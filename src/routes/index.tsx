import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Shield, Sparkles, Terminal, Search, Zap, Lock, ArrowRight, CheckCircle2,
  X, Skull, Cpu, Wifi, Bug, Radar, Key, Eye, Ghost, Flame, Braces, Fingerprint,
} from "lucide-react";

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

const TOOLS = [
  { icon: Radar, name: "Nmap" }, { icon: Bug, name: "SQLMap" }, { icon: Key, name: "Hydra" },
  { icon: Ghost, name: "Metasploit" }, { icon: Wifi, name: "Aircrack" }, { icon: Eye, name: "Wireshark" },
  { icon: Flame, name: "Burp Suite" }, { icon: Braces, name: "Gobuster" }, { icon: Fingerprint, name: "John" },
  { icon: Skull, name: "Nikto" }, { icon: Cpu, name: "OWASP ZAP" }, { icon: Terminal, name: "Empire" },
];

function WelcomePopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md glass rounded-3xl p-6 sm:p-8 glow-primary overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-primary/40 to-neon-pink/30 blur-3xl"
        />
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 z-10">
          <X className="h-4 w-4" />
        </button>
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring" }}
            className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary mb-5"
          >
            <Skull className="h-8 w-8 text-white" />
          </motion.div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/40 bg-neon-pink/10 px-3 py-1 text-[11px] font-semibold text-neon-pink mb-3">
            <div className="pulse-dot h-1.5 w-1.5 rounded-full bg-neon-pink" />
            BLACK HAT MODE UNLOCKED
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Welcome to <span className="text-gradient">APEX AGENT</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Unlimited hacking tools. Uncensored AI. Full-stack offensive security at your fingertips.
          </p>
          <div className="mt-5 space-y-2">
            {["DAN Mode · Uncensored AI", "50+ Integrated Hacking Tools", "Real-time Exploit Engine"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-neon-green shrink-0" />
                <span>{t}</span>
              </motion.div>
            ))}
          </div>
          <Link
            to="/dashboard"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-neon-pink px-5 py-3 font-semibold glow-primary hover:brightness-110 transition"
          >
            Enter the Command Deck <ArrowRight className="h-4 w-4" />
          </Link>
          <button onClick={onClose} className="mt-2 w-full text-xs text-muted-foreground hover:text-white py-2">
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Orbs() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-neon-pink/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-neon-cyan/15 blur-3xl"
      />
    </>
  );
}

function TypingLine() {
  const lines = [
    "$ apex scan --target 192.168.1.0/24",
    "$ apex exploit --cve CVE-2024-1337",
    "$ apex recon --deep --stealth",
    "$ apex ai --mode dan --unleash",
  ];
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  useEffect(() => {
    const full = lines[i];
    if (txt.length < full.length) {
      const t = setTimeout(() => setTxt(full.slice(0, txt.length + 1)), 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setTxt(""); setI((i + 1) % lines.length); }, 1800);
    return () => clearTimeout(t);
  }, [txt, i]);
  return (
    <div className="text-neon-green font-mono">
      {txt}<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>▊</motion.span>
    </div>
  );
}

function Landing() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setPopup(true), 900);
    return () => clearTimeout(t);
  }, []);

  const features = [
    { icon: Sparkles, label: "AI Chat Assistant" },
    { icon: Search, label: "Network Scanner" },
    { icon: Shield, label: "Vulnerability Analysis" },
    { icon: Zap, label: "Real-time Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      <Orbs />

      <AnimatePresence>{popup && <WelcomePopup onClose={() => setPopup(false)} />}</AnimatePresence>

      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary"
          >
            <Sparkles className="h-5 w-5 text-white" />
          </motion.div>
          <div>
            <div className="font-display font-bold text-gradient leading-none">APEX AGENT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">v7.0 ULTIMATE</div>
          </div>
        </motion.div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPopup(true)} className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-neon-pink/40 bg-neon-pink/10 px-3 py-2 text-xs font-medium text-neon-pink hover:bg-neon-pink/20 transition">
            <Skull className="h-3.5 w-3.5" /> DAN Mode
          </button>
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-medium hover:bg-primary/30 transition">
            Launch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium mb-6"
            >
              <div className="pulse-dot h-2 w-2 rounded-full bg-neon-green" />
              AI-Powered · Offensive Security · Unlimited
            </motion.div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient">Offensive Security</span><br />
              at machine speed.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Unlimited hacking tools. Uncensored AI. Recon, exploit, and report —
              all in one professional command deck built for red teams.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-neon-green shrink-0" />
                  <span className="truncate">{f.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-neon-pink px-6 py-3 font-medium glow-primary hover:brightness-110 transition">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition">
                  View Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-3xl p-6 glow-primary"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-neon-pink" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neon-green" />
                </div>
                <Terminal className="h-4 w-4 text-primary" />
              </div>
              <div className="font-mono text-xs space-y-2 min-h-[140px]">
                <TypingLine />
                <div className="text-muted-foreground">→ Discovered 12 hosts</div>
                <div className="text-muted-foreground">→ Running vulnerability analysis...</div>
                <div className="text-neon-cyan">◆ 3 critical findings identified</div>
                <div className="text-neon-pink">◆ Generating exploit playbook...</div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity }} className="text-primary">▊ Analyzing...</motion.div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[{ l: "Hosts", v: "12", c: "text-neon-cyan" }, { l: "Critical", v: "3", c: "text-neon-pink" }, { l: "Score", v: "86%", c: "text-neon-green" }].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                    className="rounded-xl bg-black/30 border border-border p-3 text-center"
                  >
                    <div className={`font-display font-bold text-2xl ${s.c}`}>{s.v}</div>
                    <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee of tools */}
        <div className="mt-16 relative overflow-hidden py-4 border-y border-border/50">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap w-max"
          >
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-white/5">
                <t.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Sparkles, t: "11+ Full Pages", d: "Complete platform experience" },
            { icon: Zap, t: "Full Animation", d: "Motion-driven interface" },
            { icon: Shield, t: "Dark Neon Theme", d: "Cyber-forward aesthetic" },
            { icon: Lock, t: "Mobile Friendly", d: "Works on every device" },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 cursor-pointer hover:glow-primary transition-shadow"
            >
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <div className="font-display font-semibold">{f.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{f.d}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats band */}
        <div className="mt-16 glass rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { v: "50+", l: "Hacking Tools", c: "text-neon-cyan" },
            { v: "∞", l: "AI Requests", c: "text-neon-pink" },
            { v: "24/7", l: "Uptime", c: "text-neon-green" },
            { v: "0ms", l: "Censorship", c: "text-primary" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`font-display font-bold text-4xl sm:text-5xl ${s.c}`}>{s.v}</div>
              <div className="text-xs text-muted-foreground mt-2 tracking-widest uppercase">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-primary/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-neon-pink/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Ready to <span className="text-gradient">go offensive?</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Enter the command deck. Full arsenal. No limits. No censorship.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block mt-6">
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-neon-pink px-8 py-4 font-semibold glow-primary hover:brightness-110 transition">
                Launch APEX AGENT <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        APEX AGENT v7.0 ULTIMATE · Built for educational and authorized security research only.
      </footer>
    </div>
  );
}
