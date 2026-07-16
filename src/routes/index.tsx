import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Sparkles, Terminal, Search, Zap, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APEX AGENT — AI-Powered Offensive Security Platform" },
      { name: "description", content: "Advanced penetration testing, network scanning, and security analysis powered by artificial intelligence." },
      { property: "og:title", content: "APEX AGENT — AI-Powered Offensive Security" },
      { property: "og:description", content: "AI-powered pentest, recon, and vulnerability analysis platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const features = [
    { icon: Sparkles, label: "AI Chat Assistant" },
    { icon: Search, label: "Network Scanner" },
    { icon: Shield, label: "Vulnerability Analysis" },
    { icon: Zap, label: "Real-time Monitoring" },
  ];
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-neon-pink/20 blur-3xl" />

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-display font-bold text-gradient leading-none">APEX AGENT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">v7.0 ULTIMATE</div>
          </div>
        </div>
        <Link to="/dashboard" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-medium hover:bg-primary/30 transition">
          Launch Dashboard <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium mb-6">
              <div className="pulse-dot h-2 w-2 rounded-full bg-neon-green" />
              AI-Powered · Offensive Security
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">Offensive Security</span><br />
              at machine speed.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Advanced penetration testing, network scanning, and security analysis
              powered by frontier AI. Recon, exploit, and report — all in one command deck.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-neon-green shrink-0" />
                  <span className="truncate">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-neon-pink px-6 py-3 font-medium glow-primary hover:brightness-110 transition">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition">
                View Demo
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="glass rounded-3xl p-6 glow-primary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-neon-pink" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neon-green" />
                </div>
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <div className="font-mono text-xs space-y-2">
                <div className="text-neon-green">$ apex scan --target 192.168.1.0/24</div>
                <div className="text-muted-foreground">→ Discovered 12 hosts</div>
                <div className="text-muted-foreground">→ Running vulnerability analysis...</div>
                <div className="text-neon-cyan">◆ 3 critical findings identified</div>
                <div className="text-neon-pink">◆ Generating exploit playbook...</div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity }} className="text-primary">▊ Analyzing...</motion.div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[{ l: "Hosts", v: "12", c: "text-neon-cyan" }, { l: "Critical", v: "3", c: "text-neon-pink" }, { l: "Score", v: "86%", c: "text-neon-green" }].map((s) => (
                  <div key={s.l} className="rounded-xl bg-black/30 border border-border p-3 text-center">
                    <div className={`font-display font-bold text-2xl ${s.c}`}>{s.v}</div>
                    <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Sparkles, t: "11 Full Pages", d: "Complete platform experience" },
            { icon: Zap, t: "Full Animation", d: "Motion-driven interface" },
            { icon: Shield, t: "Dark Neon Theme", d: "Cyber-forward aesthetic" },
            { icon: Lock, t: "Mobile Friendly", d: "Works on every device" },
          ].map((f, i) => (
            <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="glass rounded-2xl p-5">
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <div className="font-display font-semibold">{f.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{f.d}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
