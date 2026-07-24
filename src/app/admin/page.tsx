"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Row = {
  id: string; name: string; email: string; mobile: string | null;
  company: string | null; role: string; position: number; bumps: number;
  share_token: string; shared_at: string | null; created_at: string;
  linkedin_post_url: string | null; verified: boolean | null;
};

type Metrics = { total: number; bumped: number; not_shared: number; today: number };
type SortKey = keyof Row;
type SortDir = "asc" | "desc";

function fmt(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default function AdminDashboard() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [bumpFilter, setBumpFilter] = useState<"all" | "bumped" | "not_shared" | "verified" | "unverified">("all");
  const [sortKey, setSortKey] = useState<SortKey>("position");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  useEffect(() => {
    fetch("/internal/api/v1/admin/waitlist")
      .then(r => { if (r.status === 401) router.push("/admin/login"); return r.json(); })
      .then(d => { setMetrics(d.metrics); setRows(d.rows || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [router]);

  const roles = useMemo(() => Array.from(new Set(rows.map(r => r.role))).sort(), [rows]);

  const filtered = useMemo(() => {
    let data = [...rows];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter(r => r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || (r.company || "").toLowerCase().includes(q));
    }
    if (roleFilter) data = data.filter(r => r.role === roleFilter);
    if (bumpFilter === "bumped") data = data.filter(r => r.bumps > 0);
    if (bumpFilter === "not_shared") data = data.filter(r => r.bumps === 0);
    if (bumpFilter === "verified") data = data.filter(r => r.verified === true);
    if (bumpFilter === "unverified") data = data.filter(r => r.bumps > 0 && !r.verified);
    data.sort((a, b) => {
      const av = sortKey === "position" ? a.position - a.bumps : a[sortKey];
      const bv = sortKey === "position" ? b.position - b.bumps : b[sortKey];
      const cmp = av == null ? 1 : bv == null ? -1 : av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return data;
  }, [rows, search, roleFilter, bumpFilter, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const handleLogout = async () => {
    await fetch("/internal/api/v1/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleVerify = async (id: string) => {
    await fetch("/internal/api/v1/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setRows(prev => prev.map(r => r.id === id ? { ...r, verified: true } : r));
  };

  const th: React.CSSProperties = {
    padding: "10px 14px", textAlign: "left", fontFamily: "'Clash Grotesk', sans-serif",
    fontWeight: 700, fontSize: "12px", color: "rgba(30,30,30,0.5)", letterSpacing: "0.06em",
    textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap", userSelect: "none",
    borderBottom: "1px solid rgba(30,30,30,0.08)",
  };
  const td: React.CSSProperties = {
    padding: "12px 14px", fontFamily: "'Clash Grotesk', sans-serif",
    fontSize: "13px", color: "#1E1E1E", whiteSpace: "nowrap",
    borderBottom: "1px solid rgba(30,30,30,0.06)",
  };
  const inp: React.CSSProperties = {
    padding: "9px 12px", borderRadius: "8px", border: "1px solid rgba(30,30,30,0.15)",
    background: "#fff", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px",
    color: "#1E1E1E", outline: "none",
  };

  const SortIcon = ({ k }: { k: SortKey }) => sortKey !== k ? <span style={{ opacity: 0.3 }}> ↕</span> : sortDir === "asc" ? <span style={{ color: "#E52727" }}> ↑</span> : <span style={{ color: "#E52727" }}> ↓</span>;

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'Clash Grotesk', sans-serif", overflowX: "hidden" }}>
      <style>{`body { background-color: #ffffff !important; overflow-x: hidden; } html { overflow-x: hidden; }`}</style>
      {/* Admin header — same pill design, logo + sign out only */}
      <div className="fixed top-2 left-2 right-2 lg:top-6 lg:left-6 lg:right-6 z-50 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-[1400px] pointer-events-auto">
          <div className="relative" style={{ height: "67px" }}>
            <div className="absolute inset-0 flex items-stretch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero/navbar/Left.svg" alt="" aria-hidden width={56} height={67} style={{ display: "block", flexShrink: 0, marginRight: "-1px", filter: "saturate(0) brightness(1.1)" }} />
              <div className="flex-1" style={{ backgroundColor: "#ffffff" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hero/navbar/right.svg" alt="" aria-hidden width={56} height={67} style={{ display: "block", flexShrink: 0, marginLeft: "-1px", filter: "saturate(0) brightness(1.1)" }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-between" style={{ paddingLeft: "36px", paddingRight: "36px" }}>
              <Image src="/bugasura-logo.png" alt="Bugasura" width={160} height={30} className="h-[22px] lg:h-[28px] w-auto" priority />
              <button onClick={handleLogout} style={{ background: "none", border: "1px solid rgba(30,30,30,0.2)", color: "#1E1E1E", padding: "6px 14px", borderRadius: "8px", cursor: "pointer", fontFamily: "'Clash Grotesk', sans-serif", fontSize: "13px", fontWeight: 600 }}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 lg:px-6 pt-[96px] lg:pt-[115px]" style={{ background: "#FFF6E2" }}>
      <div style={{ background: "#FFF6E2", borderRadius: "20px", padding: "12px", maxWidth: "1400px", margin: "0 auto", minHeight: "calc(100vh - 112px)" }} className="sm:p-5 lg:p-8">
        {/* Metrics */}
        {metrics && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-7">
            {[
              { label: "Total Signups", value: metrics.total, color: "#1E1E1E" },
              { label: "Joined Today", value: metrics.today, color: "#1E1E1E" },
              { label: "Shared & Bumped", value: metrics.bumped, color: "#E52727" },
              { label: "Waiting to Share", value: metrics.not_shared, color: "#1E1E1E" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: "#fff", borderRadius: "14px", padding: "16px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "11px", color: "rgba(30,30,30,0.5)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</div>
                <div style={{ fontSize: "32px", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div style={{ background: "#fff", borderRadius: "14px", padding: "14px 16px", marginBottom: "12px", display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <input style={{ ...inp, flex: "1", minWidth: "160px" }} placeholder="Search name, email, company…" value={search} onChange={e => setSearch(e.target.value)} />
          <select style={{ ...inp }} value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
            <option value="">All roles</option>
            {roles.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select style={{ ...inp }} value={bumpFilter} onChange={e => setBumpFilter(e.target.value as typeof bumpFilter)}>
            <option value="all">All entries</option>
            <option value="bumped">Bumped only</option>
            <option value="not_shared">Not shared yet</option>
            <option value="verified">Verified</option>
            <option value="unverified">Bumped, not verified</option>
          </select>
          <span style={{ fontSize: "13px", color: "rgba(30,30,30,0.4)", marginLeft: "auto" }}>{filtered.length} entries</span>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", maxWidth: "100%", minWidth: 0 }}>
          {loading ? (
            <div style={{ padding: "60px", textAlign: "center", color: "rgba(30,30,30,0.4)", fontSize: "14px" }}>Loading…</div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ background: "#fafafa" }}>
                  <tr>
                    {([
                      ["position", "Position"],
                      ["name", "Name"],
                      ["email", "Email"],
                      ["role", "Role"],
                      ["company", "Company"],
                      ["mobile", "Mobile"],
                      ["bumps", "Bumped"],
                      ["shared_at", "Shared At"],
                      ["created_at", "Signed Up"],
                    ] as [SortKey, string][]).map(([key, label]) => (
                      <th key={key} style={th} onClick={() => handleSort(key)}>
                        {label}<SortIcon k={key} />
                      </th>
                    ))}
                    <th style={{ ...th, cursor: "default" }}>LinkedIn Post</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(row => {
                    const bumped = row.bumps > 0;
                    const effective = row.position - row.bumps;
                    return (
                      <tr
                        key={row.id}
                        style={{
                          background: bumped ? "linear-gradient(90deg, rgba(229,39,39,0.04) 0%, rgba(255,255,255,0) 100%)" : undefined,
                          outline: bumped ? "1.5px solid rgba(229,39,39,0.3)" : undefined,
                          outlineOffset: bumped ? "-1px" : undefined,
                        }}
                      >
                        <td style={td}>
                          <span style={{ fontWeight: 700, color: "#E52727" }}>#{effective}</span>
                          {bumped && <span style={{ fontSize: "11px", color: "rgba(30,30,30,0.35)", marginLeft: "4px" }}>(was #{row.position})</span>}
                        </td>
                        <td style={{ ...td, fontWeight: 600 }}>{row.name}</td>
                        <td style={{ ...td, color: "rgba(30,30,30,0.6)" }}>{row.email}</td>
                        <td style={td}>{row.role}</td>
                        <td style={{ ...td, color: "rgba(30,30,30,0.6)" }}>{row.company || "—"}</td>
                        <td style={{ ...td, color: "rgba(30,30,30,0.6)" }}>{row.mobile || "—"}</td>
                        <td style={td}>
                          {bumped
                            ? <span style={{ background: "rgba(229,39,39,0.1)", color: "#E52727", padding: "2px 8px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>Bumped +100</span>
                            : <span style={{ color: "rgba(30,30,30,0.3)", fontSize: "12px" }}>—</span>}
                        </td>
                        <td style={{ ...td, color: "rgba(30,30,30,0.5)", fontSize: "12px" }}>{fmt(row.shared_at)}</td>
                        <td style={{ ...td, color: "rgba(30,30,30,0.5)", fontSize: "12px" }}>{fmt(row.created_at)}</td>
                        <td style={td}>
                          {row.linkedin_post_url ? (
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "nowrap" }}>
                              <a
                                href={row.linkedin_post_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: "inline-flex", alignItems: "center", gap: "5px",
                                  padding: "4px 12px", borderRadius: "6px",
                                  background: "#E52727", color: "#fff",
                                  fontFamily: "'Clash Grotesk', sans-serif", fontSize: "12px", fontWeight: 600,
                                  textDecoration: "none", whiteSpace: "nowrap",
                                }}
                              >
                                Open
                              </a>
                              {row.verified ? (
                                <span style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a", padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, whiteSpace: "nowrap" }}>
                                  ✓ Verified
                                </span>
                              ) : (
                                <button
                                  onClick={() => handleVerify(row.id)}
                                  style={{
                                    padding: "4px 10px", borderRadius: "6px",
                                    border: "1px solid rgba(30,30,30,0.2)", background: "#fff",
                                    fontFamily: "'Clash Grotesk', sans-serif", fontSize: "12px", fontWeight: 600,
                                    color: "#1E1E1E", cursor: "pointer", whiteSpace: "nowrap",
                                  }}
                                >
                                  Mark Verified
                                </button>
                              )}
                            </div>
                          ) : (
                            <span style={{ color: "rgba(30,30,30,0.25)", fontSize: "12px" }}>—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {filtered.length === 0 && (
                    <tr><td colSpan={10} style={{ ...td, textAlign: "center", color: "rgba(30,30,30,0.3)", padding: "40px" }}>No entries found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
