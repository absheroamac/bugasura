"use client";

import { motion } from "framer-motion";

/**
 * PlatformInfographic — animated SVG composition
 *
 * Z-order: context → lines3 → refine → lines2 → generate → lines1 → execute → head
 * Active bar scales up; glow ellipse translates to active bar; label color follows.
 */

const BAR_X     = 60;
const BAR_W     = 335;
const BAR_H     = 164;
const TOPFACE_B = Math.round(85.698 * (BAR_W / 394));   // ≈ 73 px
const BAR_CX    = BAR_X + BAR_W / 2;                    // 227.5

const LINES_W   = 80;
const LINES_X   = BAR_CX - LINES_W / 2;

const Y_EXEC = 100;
const Y_GEN  = Y_EXEC + 95;
const Y_REF  = Y_GEN  + 95;
const Y_CTX  = Y_REF  + 95;

const linesY = (upperY: number, lowerY: number) => ({
  y: lowerY - 10,
  h: TOPFACE_B + 8,
});

const L1 = linesY(Y_EXEC, Y_GEN);
const L2 = linesY(Y_GEN,  Y_REF);
const L3 = linesY(Y_REF,  Y_CTX);

const HANDLE_REL = 98.28 / 193;
const LBL_X      = BAR_X + BAR_W + 65;
const TEXT_X     = LBL_X + 27;

const HEAD_W = BAR_W + 260;
const HEAD_H = Math.round(HEAD_W * 220 / 700);
const HEAD_X = BAR_CX - HEAD_W / 2;

const SPRING = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

// stepIndex matches FourLayers steps order: 0=Context, 1=Refine, 2=Generate, 3=Execute
const BAR_DEFS = [
  { src: "/infographic/context-bar.svg",  label: "Context",  activeColor: "#AC1515", y: Y_CTX  },
  { src: "/infographic/refine-bar.svg",   label: "Refine",   activeColor: "#C47200", y: Y_REF  },
  { src: "/infographic/generate-bar.svg", label: "Generate", activeColor: "#0077B6", y: Y_GEN  },
  { src: "/infographic/execute-bar.svg",  label: "Execute",  activeColor: "#555555", y: Y_EXEC },
];

function AnimatedBar({
  bar,
  isActive,
}: {
  bar: (typeof BAR_DEFS)[0];
  isActive: boolean;
}) {
  const handleCY = bar.y + BAR_H * HANDLE_REL;
  return (
    <motion.g
      animate={{
        scale: isActive ? 1.07 : 1,
        filter: isActive
          ? "brightness(0.78) saturate(1.6)"
          : "brightness(1) saturate(1)",
      }}
      transition={SPRING}
      style={{ transformOrigin: `${BAR_CX}px ${bar.y + BAR_H / 2}px` }}
    >
      <image
        href={bar.src}
        x={BAR_X} y={bar.y}
        width={BAR_W} height={BAR_H}
        preserveAspectRatio="xMidYMid meet"
      />
      <image
        href="/infographic/label-handle.svg"
        x={LBL_X}
        y={handleCY - 22.5}
        width={25} height={45}
      />
      <motion.text
        x={TEXT_X}
        y={handleCY + 10}
        animate={{ fill: isActive ? bar.activeColor : "#1E1E1E" }}
        transition={{ duration: 0.35 }}
        style={{
          fontFamily: "var(--font-caveat), 'Caveat', cursive",
          fontSize: "26px",
          fontWeight: 700,
        }}
      >
        {bar.label}
      </motion.text>
    </motion.g>
  );
}

function Lines({ y, h }: { y: number; h: number }) {
  return (
    <image
      href="/infographic/lines-between.svg"
      x={LINES_X} y={y}
      width={LINES_W} height={h}
      preserveAspectRatio="none"
    />
  );
}

interface Props {
  active?: number;
}

export default function PlatformInfographic({ active = 0 }: Props) {

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
      <svg
        viewBox={`0 0 540 ${Y_CTX + BAR_H + 10}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="barGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        {/* Red glow — fixed to context bar only */}
        <ellipse
          cx={BAR_CX}
          cy={Y_CTX + BAR_H * 0.6}
          rx={BAR_W * 0.55}
          ry={BAR_H * 0.45}
          fill="#E52727"
          opacity={0.45}
          filter="url(#barGlow)"
        />

        {/* Z-order: context → lines3 → refine → lines2 → generate → lines1 → execute → head */}
        <AnimatedBar bar={BAR_DEFS[0]} isActive={active === 0} />
        <Lines y={L3.y} h={L3.h} />
        <AnimatedBar bar={BAR_DEFS[1]} isActive={active === 1} />
        <Lines y={L2.y} h={L2.h} />
        <AnimatedBar bar={BAR_DEFS[2]} isActive={active === 2} />
        <Lines y={L1.y} h={L1.h} />
        <AnimatedBar bar={BAR_DEFS[3]} isActive={active === 3} />

        {/* Head — highest z */}
        <image
          href="/infographic/head.png"
          x={HEAD_X}
          y={0}
          width={HEAD_W}
          height={HEAD_H}
          preserveAspectRatio="xMidYMin meet"
        />
      </svg>
    </div>
  );
}
