"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/internal/api/v1/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: "10px",
    border: "1px solid rgba(30,30,30,0.15)", background: "#fff",
    fontFamily: "'Clash Grotesk', sans-serif", fontSize: "15px",
    color: "#1E1E1E", outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0f0606", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "400px", background: "#FFF6E2", borderRadius: "20px", padding: "40px 36px", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1E1E1E" }}>Admin Access</div>
          <div style={{ fontFamily: "'Clash Grotesk', sans-serif", fontSize: "14px", color: "rgba(30,30,30,0.5)", marginTop: "4px" }}>Bugasura Waitlist Dashboard</div>
        </div>

        <form onSubmit={handleSubmit}>
          <input style={{ ...inp, marginBottom: "12px" }} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input style={{ ...inp, marginBottom: "20px" }} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <div style={{ color: "#E52727", fontSize: "13px", marginBottom: "12px", fontFamily: "'Clash Grotesk', sans-serif" }}>{error}</div>}
          <button
            type="submit" disabled={loading}
            style={{
              width: "100%", padding: "14px", borderRadius: "10px",
              background: loading ? "rgba(229,39,39,0.5)" : "#E52727",
              color: "#fff", border: "none", cursor: loading ? "wait" : "pointer",
              fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 700, fontSize: "15px",
            }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
