import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import BodyText from "@/components/ui/BodyText";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

// ── helpers ───────────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#999", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
      {children}
    </p>
  );
}

function Row({ children, gap = "16px" }: { children: React.ReactNode; gap?: string }) {
  return <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap }}>{children}</div>;
}

function Block({ title, bg = "#fff", children }: { title: string; bg?: string; children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: bg, borderRadius: "20px", padding: "36px", marginBottom: "12px" }}>
      <p style={{ fontFamily: "monospace", fontSize: "11px", color: bg === "#fff" ? "#aaa" : "rgba(255,255,255,0.5)", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {title}
      </p>
      {children}
    </div>
  );
}

function Divider({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "48px 0 24px" }}>
      <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E52727", whiteSpace: "nowrap" }}>{title}</p>
      <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.1)" }} />
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  return (
    <main style={{ backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "60px 80px", fontFamily: "Inter, sans-serif" }}>

      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#999", marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Bugasura</p>
        <h1 style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "48px", letterSpacing: "-0.03em", color: "#1E1E1E", marginBottom: "12px" }}>Design System</h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#666", lineHeight: 1.6 }}>
          All UI primitives. Import everything from <code style={{ backgroundColor: "#eee", padding: "2px 6px", borderRadius: "4px", fontSize: "13px" }}>@/components/ui</code>
        </p>
      </div>

      {/* ── COLOURS ── */}
      <Divider title="Colours" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", marginBottom: "12px" }}>
        {[
          { name: "Cream", hex: "#FFF6E2", dark: false },
          { name: "Red", hex: "#E52727", dark: true },
          { name: "Orange", hex: "#FFA840", dark: false },
          { name: "Blue", hex: "#29A5FF", dark: false },
          { name: "Dark", hex: "#1E1E1E", dark: true },
        ].map(c => (
          <div key={c.hex} style={{ backgroundColor: c.hex, borderRadius: "16px", padding: "20px 20px 16px", border: c.hex === "#FFF6E2" ? "1px solid #e5e5e5" : "none" }}>
            <p style={{ fontFamily: "monospace", fontSize: "12px", color: c.dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.4)", marginBottom: "4px" }}>{c.hex}</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "15px", color: c.dark ? "#fff" : "#1E1E1E" }}>{c.name}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
        {[
          { name: "Light Salmon", hex: "#FDD9C8", label: "Context cards" },
          { name: "Light Orange", hex: "#FFDAA8", label: "Refine cards" },
          { name: "Light Blue", hex: "#B2D9EC", label: "Generate cards" },
          { name: "Light Gray", hex: "#DCDCDC", label: "Execute / neutral cards" },
        ].map(c => (
          <div key={c.hex} style={{ backgroundColor: c.hex, borderRadius: "16px", padding: "20px 20px 16px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "4px" }}>{c.hex}</p>
            <p style={{ fontFamily: "'Clash Grotesk', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1E1E1E" }}>{c.name}</p>
            <p style={{ fontFamily: "Inter", fontSize: "12px", color: "rgba(0,0,0,0.45)", marginTop: "2px" }}>{c.label}</p>
          </div>
        ))}
      </div>

      {/* ── TYPOGRAPHY ── */}
      <Divider title="Typography — Heading" />
      <Block title="Heading component — all levels">
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {(["hero", "section", "bento", "subsection", "step", "card"] as const).map(level => (
            <div key={level} style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
              <Label>{level}</Label>
              <Heading level={level} as="p">{level.charAt(0).toUpperCase() + level.slice(1)} Heading</Heading>
            </div>
          ))}
        </div>
      </Block>

      <Divider title="Typography — Body & Eyebrow" />
      <Block title="BodyText — Inter 15px">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div><Label>default</Label><BodyText>The quick brown fox jumps over the lazy dog. Bugasura is the operating system for building quality.</BodyText></div>
          <div><Label>opacity 0.6</Label><BodyText opacity={0.6}>Muted body text at 60% opacity. Used for supporting descriptions and secondary copy.</BodyText></div>
          <div><Label>white (on dark)</Label>
            <div style={{ backgroundColor: "#1E1E1E", padding: "16px", borderRadius: "12px" }}>
              <BodyText color="#ffffff">White body text on a dark background.</BodyText>
            </div>
          </div>
        </div>
      </Block>

      <Block title="Eyebrow — all variants">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div><Label>badge (12px)</Label><Eyebrow variant="badge">The Platform</Eyebrow></div>
          <div><Label>section (24px)</Label><Eyebrow variant="section">Generate</Eyebrow></div>
          <div><Label>step (numbered)</Label><Eyebrow variant="step" num="01">Context</Eyebrow></div>
          <div><Label>step — custom colors</Label><Eyebrow variant="step" num="03" numColor="#29A5FF" color="#1E1E1E">Generate</Eyebrow></div>
        </div>
      </Block>

      {/* ── BUTTONS ── */}
      <Divider title="Button" />

      <Block title="On light background">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <Label>size md</Label>
            <Row>
              <Button variant="primary" href="#">Start Free</Button>
              <Button variant="outline" href="#">Book a Demo</Button>
            </Row>
          </div>
          <div>
            <Label>size lg</Label>
            <Row>
              <Button variant="primary" size="lg" href="#">Start Free</Button>
              <Button variant="outline" size="lg" href="#">Book a Demo</Button>
            </Row>
          </div>
        </div>
      </Block>

      <Block title="On red background" bg="#E52727">
        <Row>
          <Button variant="white" href="#">Start Free</Button>
          <Button variant="outline-light" href="#">See in Action</Button>
        </Row>
      </Block>

      <Block title="On dark background" bg="#1E1E1E">
        <Row>
          <Button variant="white" href="#">Start Free</Button>
          <Button variant="outline-light" href="#">Book a Demo</Button>
        </Row>
      </Block>

      <Block title="ButtonGroup — with align">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div><Label>align left</Label>
            <ButtonGroup><Button variant="primary" href="#">Start Free</Button><Button variant="outline" href="#">Learn More</Button></ButtonGroup>
          </div>
          <div><Label>align center</Label>
            <ButtonGroup align="center"><Button variant="primary" href="#">Start Free</Button><Button variant="outline" href="#">Learn More</Button></ButtonGroup>
          </div>
        </div>
      </Block>

      {/* ── CARDS ── */}
      <Divider title="Card" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
        {(["salmon", "orange", "blue", "gray", "white"] as const).map(tint => (
          <Card key={tint} tint={tint} radius="lg" padding="28px">
            <Label>{tint}</Label>
            <Heading level="card" as="p" style={{ fontSize: "20px" }}>Card Title</Heading>
            <BodyText style={{ fontSize: "13px", marginTop: "8px" }} opacity={0.6}>Supporting description text goes here inside the card.</BodyText>
          </Card>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginTop: "12px" }}>
        {(["sm", "md", "lg", "xl"] as const).map(radius => (
          <Card key={radius} tint="gray" radius={radius} padding="24px">
            <Label>radius {radius}</Label>
            <BodyText style={{ fontSize: "13px" }} opacity={0.6}>Border radius variant</BodyText>
          </Card>
        ))}
      </div>

      {/* ── SECTION ── */}
      <Divider title="Section" />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {(["cream", "red", "orange", "blue", "dark"] as const).map(bg => (
          <Section key={bg} bg={bg} padding="40px 48px">
            <Eyebrow variant="badge" color={bg === "cream" ? "#E52727" : bg === "dark" || bg === "red" ? "#ffffff" : "#1E1E1E"}>
              Section · bg={bg}
            </Eyebrow>
            <Heading level="step" as="p" color={bg === "dark" || bg === "red" ? "#ffffff" : "#1E1E1E"} style={{ marginTop: "8px" }}>
              Section heading on {bg} background
            </Heading>
          </Section>
        ))}
      </div>

      <div style={{ height: "80px" }} />
    </main>
  );
}
