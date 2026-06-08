interface DashboardEmbedProps {
  src: string;
}

const SCALE = 0.46;

export default function DashboardEmbed({ src }: DashboardEmbedProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "360px",
        borderRadius: "24px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.65)",
        border: "1.5px solid rgba(255,255,255,0.9)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          right: 0,
          bottom: 0,
          overflow: "hidden",
          borderTopLeftRadius: "14px",
        }}
      >
        {/* Width & height are pre-divided by SCALE so that after
            transform: scale(SCALE) the iframe fills the inset area exactly. */}
        <iframe
          src={src}
          scrolling="no"
          style={{
            display: "block",
            border: "none",
            width: `${100 / SCALE}%`,
            height: `${100 / SCALE}%`,
            transformOrigin: "top left",
            transform: `scale(${SCALE})`,
            pointerEvents: "none",
          }}
          title="Dashboard preview"
        />
      </div>
    </div>
  );
}
