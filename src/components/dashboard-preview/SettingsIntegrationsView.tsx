"use client";

import { useState } from "react";
import {
  Eye,
  TrendingUp,
  BookOpen,
  FileText,
  TestTube,
  Zap,
  Database,
  Bug,
  Settings,
  Trash2,
  Search,
  Mail,
  MessageSquare,
  Layers,
  Target,
  Activity,
  Briefcase,
  Headphones,
  AlertTriangle,
  Shield,
  Smartphone,
  Globe,
  Box,
  Star,
  Plus,
  X,
  ChevronRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Eagle Eye",      Icon: Eye,       count: null, active: false },
  { label: "Revenue Flows",  Icon: TrendingUp, count: null, active: false },
  { label: "Knowledge Base", Icon: BookOpen,   count: 10,   active: false },
  { label: "Requirements",   Icon: FileText,   count: 26,   active: false },
  { label: "Test Repo",      Icon: TestTube,   count: 350,  active: false },
  { label: "Sprints",        Icon: Zap,        count: 6,    active: false },
  { label: "Test Data",      Icon: Database,   count: null, active: false },
  { label: "Issues",         Icon: Bug,        count: 141,  active: false },
  { label: "Settings",       Icon: Settings,   count: null, active: true  },
  { label: "Trash",          Icon: Trash2,     count: null, active: false },
];

const TABS = ["Project Details", "Issue Fields", "Integrations", "Workflows", "Time Tracker", "SLA"];

const CATEGORIES = ["All", "Notifications", "Project Management", "Dev Tools", "Monitoring", "Reporters", "Importers"];

type Integration = {
  name: string;
  namePrefix?: string;
  suffix: string;
  beta?: boolean;
  description: string;
  extra?: string;
  Icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  category: string[];
};

const INTEGRATIONS: Integration[] = [
  {
    name: "Slack",
    suffix: "Notify",
    Icon: MessageSquare,
    iconColor: "#4A154B",
    iconBg: "#F9EFF9",
    description: "Publish updates from your project to a slack channel",
    category: ["All", "Notifications"],
  },
  {
    name: "Email",
    suffix: "Notify",
    Icon: Mail,
    iconColor: "#1A73E8",
    iconBg: "#EAF1FB",
    description: "Receive Project Updates Through Email",
    category: ["All", "Notifications"],
  },
  {
    name: "JIRA",
    suffix: "Sync",
    Icon: Layers,
    iconColor: "#0052CC",
    iconBg: "#E6EEFA",
    description: "Push Bugasura issue updates to Jira and pull updates in Jira back",
    category: ["All", "Project Management"],
  },
  {
    name: "Asana",
    suffix: "Sync",
    beta: true,
    Icon: Target,
    iconColor: "#F06A6A",
    iconBg: "#FEF0F0",
    description: "Push Bugasura issue updates to Asana and pull updates in Asana back",
    category: ["All", "Project Management"],
  },
  {
    name: "Linear",
    suffix: "Sync",
    beta: true,
    Icon: Activity,
    iconColor: "#5E6AD2",
    iconBg: "#EEEFFA",
    description: "Push Bugasura issue updates to Linear and pull updates in Linear back",
    category: ["All", "Project Management"],
  },
  {
    name: "OpenProject",
    suffix: "Sync",
    beta: true,
    Icon: Briefcase,
    iconColor: "#1A67A3",
    iconBg: "#E6F0F8",
    description: "Push Bugasura issue updates to OpenProject and pull updates in OpenProject back",
    category: ["All", "Project Management"],
  },
  {
    name: "Zendesk",
    suffix: "Sync",
    beta: true,
    Icon: Headphones,
    iconColor: "#03363D",
    iconBg: "#E6F2F3",
    description: "Pull Zendesk tickets updates to Bugasura",
    category: ["All", "Importers"],
  },
  {
    name: "GlitchTip",
    suffix: "Sync",
    beta: true,
    Icon: AlertTriangle,
    iconColor: "#D44000",
    iconBg: "#FCF0EB",
    description: "Pull GlitchTip issues to Bugasura project",
    category: ["All", "Monitoring"],
  },
  {
    name: "Sentry",
    suffix: "Sync",
    beta: true,
    Icon: Shield,
    iconColor: "#362D59",
    iconBg: "#EDEBF4",
    description: "Pull Sentry issues to Bugasura project",
    category: ["All", "Monitoring"],
  },
  {
    name: "Android",
    suffix: "Reporter",
    Icon: Smartphone,
    iconColor: "#3DDC84",
    iconBg: "#EDFAF3",
    description: "Report issues directly from your Android device.",
    category: ["All", "Reporters"],
  },
  {
    name: "Browser",
    suffix: "Reporter",
    Icon: Globe,
    iconColor: "#1A73E8",
    iconBg: "#EAF1FB",
    description: "Report issues directly from your web browser.",
    category: ["All", "Reporters"],
  },
  {
    name: "Email",
    suffix: "Reporter",
    Icon: Mail,
    iconColor: "#1A73E8",
    iconBg: "#EAF1FB",
    description: "Report issues directly from your email.",
    extra: "reporter+project+12345@example.io",
    category: ["All", "Reporters"],
  },
  {
    name: "Web Widget",
    suffix: "",
    beta: true,
    Icon: Box,
    iconColor: "#29A5FF",
    iconBg: "#E8F5FF",
    description: "Report issues directly from your website and close issues faster.",
    category: ["All", "Reporters"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BetaBadge({ color = "#7C3AED", bg = "#EDE9FE" }: { color?: string; bg?: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontSize: "10px",
      fontWeight: 700,
      color,
      background: bg,
      padding: "2px 7px",
      borderRadius: "4px",
      letterSpacing: "0.02em",
    }}>
      Beta
    </span>
  );
}

function IntegrationCard({ item }: { item: Integration }) {
  const { Icon } = item;
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid rgba(30,30,30,0.08)",
      borderRadius: "12px",
      padding: "24px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      cursor: "pointer",
      transition: "border-color 0.15s, box-shadow 0.15s",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(41,165,255,0.4)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(41,165,255,0.08)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(30,30,30,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Icon + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "40px", height: "40px",
          background: item.iconBg,
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={20} color={item.iconColor} strokeWidth={1.8} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" as const }}>
          <span style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#1E1E1E",
          }}>
            {item.name}
            {item.suffix && (
              <span style={{ fontWeight: 400, color: "#1E1E1E" }}> {item.suffix}</span>
            )}
          </span>
          {item.beta && <BetaBadge />}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontSize: "13px",
        color: "rgba(30,30,30,0.55)",
        lineHeight: 1.6,
        margin: 0,
      }}>
        {item.description}
      </p>

      {/* Extra (e.g. email address) */}
      {item.extra && (
        <div style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "11.5px",
          color: "rgba(30,30,30,0.55)",
          background: "rgba(30,30,30,0.04)",
          border: "1px solid rgba(30,30,30,0.08)",
          borderRadius: "6px",
          padding: "5px 10px",
          wordBreak: "break-all" as const,
        }}>
          {item.extra}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function SettingsIntegrationsView({ defaultCategory = "All" }: { defaultCategory?: string }) {
  const [activeTab, setActiveTab] = useState("Integrations");
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const filtered = INTEGRATIONS.filter(i => i.category.includes(activeCategory));

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
        <aside style={{
          width: "232px",
          height: "100%",
          background: "#1E1E1E",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          borderRadius: "16px",
        }}>
          {/* Logo */}
          <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px",
                background: "#29A5FF",
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
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
              <div key={label} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                marginBottom: "2px",
                borderRadius: "10px",
                cursor: "pointer",
                background: active ? "rgba(229,39,39,0.14)" : "transparent",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <Icon size={15} color={active ? "#E52727" : "rgba(255,255,255,0.38)"} strokeWidth={active ? 2.2 : 1.8} />
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "#ffffff" : "rgba(255,255,255,0.52)",
                  }}>
                    {label}
                  </span>
                </div>
                {count !== null && (
                  <span style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "11px", fontWeight: 600,
                    color: active ? "#E52727" : "rgba(255,255,255,0.25)",
                    background: active ? "rgba(229,39,39,0.18)" : "rgba(255,255,255,0.06)",
                    padding: "2px 7px", borderRadius: "20px",
                  }}>
                    {count}
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom icons row */}
          <div style={{ padding: "10px 16px 10px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "14px" }}>
            {[Star, Plus, Activity, Zap].map((Ic, i) => (
              <Ic key={i} size={16} color="rgba(255,255,255,0.28)" strokeWidth={1.6} style={{ cursor: "pointer" }} />
            ))}
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>+8</span>
          </div>
        </aside>
      </div>

      <div style={{ width: "12px", flexShrink: 0 }} />

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff", position: "relative" }}>

        {/* Top bar */}
        <div style={{ background: "#ffffff", borderBottom: "1px solid rgba(30,30,30,0.07)", padding: "0 28px", height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "rgba(30,30,30,0.38)", cursor: "pointer" }}>Sprint</span>
            <ChevronRight size={13} color="rgba(30,30,30,0.25)" />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "#29A5FF" }}>Settings</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F5F5F3", border: "1px solid rgba(30,30,30,0.08)", borderRadius: "8px", padding: "7px 13px" }}>
            <Search size={13} color="rgba(30,30,30,0.35)" strokeWidth={2} />
            <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12.5px", color: "rgba(30,30,30,0.3)" }}>Search…</span>
          </div>
        </div>

        {/* Decorative floating card — top right */}
        <div style={{
          position: "absolute",
          top: "68px", right: "52px",
          zIndex: 10,
          display: "flex", alignItems: "flex-start", gap: "10px",
          pointerEvents: "none",
        }}>
          {/* Status pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(30,30,30,0.05)", borderRadius: "20px", padding: "4px 10px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", color: "rgba(30,30,30,0.55)" }}>New</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "rgba(30,30,30,0.05)", borderRadius: "20px", padding: "4px 10px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FFA840", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10.5px", color: "rgba(30,30,30,0.55)" }}>In progress</span>
            </div>
          </div>
          {/* Mini card */}
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(30,30,30,0.10)",
            borderRadius: "10px",
            padding: "10px 14px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            minWidth: "130px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "8px" }}>
              <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#EAF1FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Layers size={10} color="#1A73E8" strokeWidth={2} />
              </div>
              <span style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", color: "#1E1E1E" }}>Folio project</span>
            </div>
            {[70, 50, 85, 40].map((w, i) => (
              <div key={i} style={{ height: "4px", background: "rgba(30,30,30,0.07)", borderRadius: "2px", marginBottom: "5px", width: `${w}%` }} />
            ))}
          </div>
          {/* Sparkles */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
            <Star size={14} color="#FFA840" fill="#FFA840" />
            <Plus size={12} color="#29A5FF" />
            <Star size={10} color="#E52727" fill="#E52727" />
          </div>
        </div>

        {/* Close button */}
        <div style={{ position: "absolute", top: "66px", right: "16px", zIndex: 11, cursor: "pointer" }}>
          <X size={16} color="rgba(30,30,30,0.35)" strokeWidth={2} />
        </div>

        {/* Page header */}
        <div style={{ padding: "32px 32px 0", paddingRight: "240px" }}>
          <h1 style={{
            fontFamily: "'Clash Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "22px",
            color: "#1E1E1E",
            margin: "0 0 4px",
          }}>
            Project Settings
          </h1>
          <p style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "13.5px",
            color: "rgba(30,30,30,0.45)",
            margin: 0,
          }}>
            Customise fields and add what matters to your team to succeed.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: "flex",
          gap: "0",
          padding: "0 32px",
          borderBottom: "1px solid rgba(30,30,30,0.08)",
          marginTop: "20px",
          flexShrink: 0,
        }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "13.5px",
                fontWeight: activeTab === tab ? 600 : 400,
                color: activeTab === tab ? "#29A5FF" : "rgba(30,30,30,0.5)",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #29A5FF" : "2px solid transparent",
                padding: "12px 18px",
                cursor: "pointer",
                marginBottom: "-1px",
                transition: "color 0.15s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content: category sidebar + integrations grid */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Category sidebar */}
          <div style={{
            width: "200px",
            flexShrink: 0,
            borderRight: "1px solid rgba(30,30,30,0.07)",
            padding: "16px 12px",
            overflowY: "auto",
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "13.5px",
                  fontWeight: activeCategory === cat ? 600 : 400,
                  color: activeCategory === cat ? "#29A5FF" : "rgba(30,30,30,0.6)",
                  background: activeCategory === cat ? "rgba(41,165,255,0.07)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  padding: "9px 14px",
                  cursor: "pointer",
                  marginBottom: "2px",
                  transition: "background 0.12s, color 0.12s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Integrations grid */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}>
              {filtered.map((item, i) => (
                <IntegrationCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
