import { motion } from "framer-motion";
import type { ReactNode, ComponentType } from "react";

export function Panel({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-2xl p-5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StatCard({ icon: Icon, label, value, sub, color, delay = 0 }: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-4 flex items-center gap-3 group cursor-pointer transition-shadow hover:glow-primary"
    >
      <div className={`h-11 w-11 shrink-0 rounded-xl grid place-items-center ${color}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted-foreground truncate">{label}</div>
        <div className="text-xl font-bold font-display truncate">{value}</div>
        {sub && <div className="text-[10px] text-neon-green">{sub}</div>}
      </div>
    </motion.div>
  );
}

export function SectionTitle({ icon: Icon, title, subtitle, right }: {
  icon?: ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-2 min-w-0">
        {Icon && <Icon className="h-4 w-4 text-primary shrink-0" />}
        <div className="min-w-0">
          <h3 className="font-display font-semibold truncate">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
        </div>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

export function Donut({ value, label, color = "oklch(0.68 0.24 300)", size = 140 }: {
  value: number;
  label?: string;
  color?: string;
  size?: number;
}) {
  const r = size / 2 - 10;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color}
          strokeWidth="10" strokeLinecap="round" strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: off }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-display text-2xl font-bold">{value}%</div>
          {label && <div className="text-[10px] text-muted-foreground">{label}</div>}
        </div>
      </div>
    </div>
  );
}

export function Chip({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "green" | "pink" | "cyan" | "red" | "amber" }) {
  const tones = {
    primary: "bg-primary/15 text-primary border-primary/30",
    green: "bg-neon-green/15 text-neon-green border-neon-green/30",
    pink: "bg-neon-pink/15 text-neon-pink border-neon-pink/30",
    cyan: "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/30",
    red: "bg-destructive/15 text-destructive border-destructive/30",
    amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  };
  return <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${tones[tone]}`}>{children}</span>;
}

export function pageHead(title: string, description: string) {
  return () => ({
    meta: [
      { title: `${title} — APEX AGENT` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — APEX AGENT` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  });
}
