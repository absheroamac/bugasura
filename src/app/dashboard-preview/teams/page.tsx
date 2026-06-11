"use client";

import {
  Mail,
  Crown,
  UserCircle,
  Search,
  Plus,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  CheckCircle,
  Send,
  Eye, TrendingUp, BookOpen, FileText, TestTube,
  Zap, Database, Bug, Settings, Trash2,
} from "lucide-react";

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: false },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

// ─── Data ─────────────────────────────────────────────────────────────────────

type Role = "Owner" | "Admin" | "Member";

interface Member {
  name: string;
  email: string;
  role: Role;
  avatar?: string; // initials fallback
  avatarBg?: string;
  accentColor: string;
  isCurrentUser?: boolean;
}

const MEMBERS: Member[] = [
  { name: "Michael Smith",  email: "michael.smith@acme.com",  role: "Owner",  accentColor: "#FFA840" },
  { name: "Alex Johnson",   email: "alex.johnson@acme.com",   role: "Admin",  avatar: "AJ", avatarBg: "#E8F0FE", accentColor: "#29A5FF" },
  { name: "Sophia Lee",     email: "sophia.lee@acme.com",     role: "Admin",  accentColor: "#29A5FF" },
  { name: "Daniel Kim",     email: "daniel.kim@acme.com",     role: "Admin",  avatar: "DK", avatarBg: "#EDE9FE", accentColor: "#29A5FF" },
  { name: "James Baker",    email: "james.baker@acme.com",    role: "Member", avatar: "JB", avatarBg: "#DCFCE7", accentColor: "#22C55E", isCurrentUser: true },
  { name: "Charlotte Stone",email: "charlotte.stone@acme.com",role: "Member", avatar: "CS", avatarBg: "#FEF3C7", accentColor: "#22C55E" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ member, size = 40 }: { member: Pick<Member, "name" | "avatar" | "avatarBg">; size?: number }) {
  const initials = member.avatar ?? member.name.split(" ").map(w => w[0]).join("").slice(0, 2);
  const bg = member.avatarBg ?? "#E8F0FE";
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      border: "2px solid rgba(255,255,255,0.8)",
    }}>
      <span style={{
        fontFamily: "'Clash Grotesk', sans-serif",
        fontWeight: 600, fontSize: `${size * 0.3}px`,
        color: "#1E1E1E",
      }}>{initials}</span>
    </div>
  );
}

function RoleBadge({ role }: { role: Role }) {
  if (role === "Owner") return (
    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Crown size={14} color="#FFA840" fill="#FFA840" />
      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#FFA840" }}>Owner</span>
    </span>
  );
  const color = role === "Admin" ? "#29A5FF" : "#22C55E";
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <UserCircle size={14} color={color} />
      <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600, color }}>{role}</span>
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TeamsPage() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#F2EFE8",
      fontFamily: "var(--font-inter), Inter, sans-serif",
      overflow: "hidden",
    }}>

      {/* ── Sidebar ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: "12px 0 12px 12px", flexShrink: 0 }}>
      <aside style={{ width: "232px", height: "100%", background: "#1E1E1E", display: "flex", flexDirection: "column", overflowY: "auto", borderRadius: "16px" }}>
        {/* Client logo */}
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", background: "#29A5FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#fff" }}>J</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: "#ffffff", lineHeight: 1.2 }}>Acme</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "1px" }}>Workspace</div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 12px" }}>
            <Search size={13} color="rgba(255,255,255,0.3)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}>Search…</span>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "4px 8px", flex: 1 }}>
          {NAV_ITEMS.map(({ label, Icon, count, active }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", marginBottom: "2px", borderRadius: "10px", cursor: "pointer", background: active ? "rgba(229,39,39,0.14)" : "transparent" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <Icon size={15} color={active ? "#E52727" : "rgba(255,255,255,0.38)"} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: active ? 600 : 400, color: active ? "#ffffff" : "rgba(255,255,255,0.52)" }}>{label}</span>
              </div>
              {count !== null && (
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: active ? "#E52727" : "rgba(255,255,255,0.25)", background: active ? "rgba(229,39,39,0.18)" : "rgba(255,255,255,0.06)", padding: "2px 7px", borderRadius: "20px" }}>{count}</span>
              )}
            </div>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "30px", height: "30px", background: "#E52727", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" }}>UD</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.3 }}>User</div>
              <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.3 }}>user@acme.io</div>
            </div>
          </div>
        </div>
      </aside>
      </div>

      <div style={{ width: "12px", flexShrink: 0 }} />

      {/* ── Main area ────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff", position: "relative" }}>

        {/* Top bar */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)", padding: "0 28px", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>Sprint</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Teams</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Hero header */}
        <div style={{
          padding: "32px 40px 28px",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {/* Decorative blobs */}
          <div style={{ position: "absolute", top: "18px", left: "380px", width: "200px", height: "180px", background: "rgba(41,165,255,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "28px", left: "440px", width: "12px", height: "12px", borderRadius: "50%", background: "#29A5FF", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "18px", left: "500px", width: "8px", height: "8px", borderRadius: "50%", background: "#29A5FF", opacity: 0.5, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "200px", left: "300px", width: "8px", height: "8px", borderRadius: "50%", background: "#29A5FF", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "215px", left: "290px", width: "5px", height: "5px", borderRadius: "50%", background: "#FFA840", pointerEvents: "none" }} />

          <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "28px", color: "#1E1E1E", margin: "0 0 8px" }}>
            Acme Team
          </h1>
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "rgba(30,30,30,0.45)", margin: 0, maxWidth: "360px", lineHeight: 1.6 }}>
            We work in teams. Bring your teams together and collaborate<br />or even work on private projects.
          </p>

          {/* Floating user cards */}
          <div style={{ position: "absolute", top: "20px", right: "420px", zIndex: 2 }}>
            <div style={{
              background: "#fff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "12px",
              padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#166534" }}>EJ</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}>Emma Johnson</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "#29A5FF", fontWeight: 600 }}>Admin</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)" }}>emma.johnson@acme.com</div>
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", top: "110px", right: "500px", zIndex: 2 }}>
            <div style={{
              background: "#fff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "12px",
              padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#92400E" }}>LW</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}>Liam Williams</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "#29A5FF", fontWeight: 600 }}>Admin</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)" }}>liam.williams@acme.com</div>
              </div>
            </div>
          </div>

          {/* Asura character placeholder */}
          <div style={{
            position: "absolute", top: "30px", right: "240px",
            width: "160px", height: "170px",
            background: "rgba(41,165,255,0.05)",
            borderRadius: "50% 50% 40% 40%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "80px", height: "100px",
              background: "linear-gradient(160deg, #C4B5FD 0%, #8B5CF6 100%)",
              borderRadius: "40px 40px 30px 30px",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <Crown size={24} color="#FFA840" fill="#FFA840" style={{ position: "absolute", top: "-16px" }} />
              <span style={{ fontSize: "28px" }}>🧑‍💻</span>
            </div>
          </div>

          {/* Olivia card + gmail */}
          <div style={{ position: "absolute", top: "28px", right: "20px", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
            {/* Gmail icon row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Mail size={18} color="#E52727" strokeWidth={2} />
              </div>
              <Plus size={14} color="#29A5FF" />
              <div style={{ position: "relative" }}>
                <Send size={14} color="#29A5FF" style={{ transform: "rotate(-40deg)" }} />
                <div style={{
                  position: "absolute", top: "-6px", right: "-8px",
                  width: "14px", height: "14px", borderRadius: "50%",
                  border: "2px dashed rgba(41,165,255,0.4)",
                }} />
              </div>
              <Plus size={12} color="#7C3AED" />
            </div>
            {/* Olivia card */}
            <div style={{
              background: "#fff", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "12px",
              padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: "-8px", right: "-8px",
                width: "22px", height: "22px", borderRadius: "50%",
                background: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <CheckCircle size={14} color="#fff" strokeWidth={2.5} />
              </div>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#5B21B6" }}>OB</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#1E1E1E" }}>Olivia Brown</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "#22C55E", fontWeight: 600 }}>Member</div>
                <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "rgba(30,30,30,0.4)" }}>olivia.brown@acme.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Add bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 40px 20px",
          flexShrink: 0,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)",
            borderRadius: "8px", padding: "9px 16px", width: "280px",
          }}>
            <Search size={14} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.35)" }}>Search</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: "6px",
              fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13.5px", fontWeight: 600,
              color: "#ffffff", background: "#29A5FF",
              border: "none", borderRadius: "8px 0 0 8px",
              padding: "9px 18px", cursor: "pointer",
            }}>
              <Plus size={15} strokeWidth={2.5} />
              Add
            </button>
            <button style={{
              display: "flex", alignItems: "center",
              background: "#1A90E8", border: "none",
              borderRadius: "0 8px 8px 0", borderLeft: "1px solid rgba(255,255,255,0.2)",
              padding: "9px 10px", cursor: "pointer",
            }}>
              <ChevronDown size={14} color="#ffffff" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Member table */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 40px 24px" }}>
          {MEMBERS.map((member, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              borderBottom: "1px solid rgba(30,30,30,0.06)",
              padding: "14px 0",
              position: "relative",
              gap: "0",
            }}>
              {/* Accent left bar */}
              <div style={{
                position: "absolute", left: "-16px", top: "50%", transform: "translateY(-50%)",
                width: "3px", height: "36px",
                background: member.accentColor,
                borderRadius: "0 2px 2px 0",
              }} />

              {/* Avatar + Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "0 0 220px" }}>
                <Avatar member={member} size={38} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#1E1E1E" }}>
                  {member.name}
                </span>
              </div>

              {/* Email */}
              <div style={{ flex: "0 0 260px", display: "flex", alignItems: "center", gap: "7px" }}>
                <Mail size={13} color="rgba(30,30,30,0.3)" strokeWidth={1.8} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.55)" }}>
                  {member.email}
                </span>
              </div>

              {/* Role */}
              <div style={{ flex: "0 0 120px" }}>
                <RoleBadge role={member.role} />
              </div>

              {/* Action 1 */}
              <div style={{ flex: 1 }}>
                <button style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500,
                  color: "#29A5FF", background: "none", border: "none", cursor: "pointer", padding: 0,
                }}>
                  {member.role === "Member" ? "Make Admin" : member.role === "Owner" ? "Make Member" : "Make Member"}
                </button>
              </div>

              {/* Action 2 */}
              <div>
                <button style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 500,
                  color: "#E52727", background: "none", border: "none", cursor: "pointer", padding: 0,
                }}>
                  {member.isCurrentUser ? "Leave" : "Remove"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chat FAB */}
        <div style={{
          position: "absolute", bottom: "24px", right: "24px",
          width: "48px", height: "48px", borderRadius: "50%",
          background: "#29A5FF",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(41,165,255,0.35)",
          cursor: "pointer",
        }}>
          <MessageCircle size={22} color="#ffffff" strokeWidth={2} fill="#ffffff" />
        </div>
      </div>
    </div>
  );
}
