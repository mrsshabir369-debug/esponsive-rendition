import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, MessageSquare, Search, Skull, Terminal, FolderOpen, Brain,
  Cpu, BarChart3, Wrench, Code2, Shield, Cloud, Settings as SettingsIcon,
  Bell, Menu, X, ChevronRight, Sparkles, User,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/chat", label: "Chat AI", icon: MessageSquare },
  { to: "/network-scanner", label: "Research", icon: Search },
  { to: "/red-team", label: "Red Team", icon: Skull },
  { to: "/vulnerability-scan", label: "Terminal", icon: Terminal },
  { to: "/file-manager", label: "File Manager", icon: FolderOpen },
  { to: "/system-monitor", label: "Memory", icon: Brain },
  { to: "/tools-hub", label: "Models", icon: Cpu },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/tools-hub", label: "Tools Hub", icon: Wrench },
  { to: "/vulnerability-scan", label: "Code Editor", icon: Code2 },
  { to: "/red-team", label: "Security", icon: Shield },
  { to: "/system-monitor", label: "Cloud", icon: Cloud },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
] as const;

function Logo() {
  return (
    <Link to="/dashboard" className="flex items-center gap-3 group">
      <div className="relative h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary">
        <Sparkles className="h-6 w-6 text-white" />
        <div className="absolute inset-0 rounded-xl border border-white/20" />
      </div>
      <div className="min-w-0">
        <div className="font-display text-lg font-bold tracking-tight text-gradient leading-none">APEX AGENT</div>
        <div className="text-[10px] font-medium text-muted-foreground tracking-widest mt-1">v7.0 ULTIMATE</div>
      </div>
    </Link>
  );
}

function Sidebar({ onNav }: { onNav?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex h-full flex-col glass rounded-none lg:rounded-2xl lg:m-3 lg:mr-0">
      <div className="p-5 border-b border-border">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {nav.map((item, i) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.label + i}
              to={item.to}
              onClick={onNav}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                active ? "text-white" : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/80 to-primary/40 glow-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4 shrink-0" />
              <span className="relative z-10 flex-1 truncate font-medium">{item.label}</span>
              <ChevronRight className="relative z-10 h-3.5 w-3.5 opacity-50" />
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <div className="text-[10px] font-semibold tracking-widest text-muted-foreground mb-3">SYSTEM STATUS</div>
        {[
          { label: "CPU", value: 34, color: "from-neon-cyan to-primary" },
          { label: "RAM", value: 56, color: "from-primary to-neon-pink" },
          { label: "Disk", value: 42, color: "from-neon-pink to-neon-green" },
        ].map((s) => (
          <div key={s.label} className="mb-2">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="text-white font-medium">{s.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.value}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
              />
            </div>
          </div>
        ))}
        <svg viewBox="0 0 120 40" className="mt-3 w-full h-10">
          <defs>
            <linearGradient id="mini" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.68 0.24 300)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.68 0.24 300)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,30 L15,22 L30,26 L45,14 L60,20 L75,8 L90,16 L105,10 L120,18 L120,40 L0,40 Z" fill="url(#mini)" />
          <path d="M0,30 L15,22 L30,26 L45,14 L60,20 L75,8 L90,16 L105,10 L120,18" fill="none" stroke="oklch(0.68 0.24 300)" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <div className="glass rounded-none lg:rounded-2xl lg:mx-3 lg:mt-3 px-4 py-3 flex items-center gap-3">
      <button onClick={onMenu} className="lg:hidden p-2 rounded-lg hover:bg-white/5">
        <Menu className="h-5 w-5" />
      </button>
      <div className="hidden md:flex flex-1 min-w-0 max-w-xl items-center gap-2 rounded-xl bg-black/30 border border-border px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          placeholder="Ask anything or type a command..."
          className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
        />
        <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground shrink-0">Ctrl /</kbd>
      </div>
      <div className="flex-1 md:hidden" />
      <div className="hidden sm:flex items-center gap-2 rounded-xl bg-black/30 border border-border px-3 py-2 text-xs">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium">Mixtral-8x22B</span>
      </div>
      <div className="hidden md:flex items-center gap-2 rounded-xl bg-neon-green/10 border border-neon-green/30 px-3 py-2 text-xs">
        <div className="pulse-dot h-2 w-2 rounded-full bg-neon-green" />
        <span className="text-neon-green font-medium">Online</span>
      </div>
      <button className="hidden sm:flex items-center gap-2 rounded-xl bg-primary/20 border border-primary/40 px-3 py-2 text-xs font-medium">
        <Skull className="h-3.5 w-3.5" /> DAN Mode
      </button>
      <button className="p-2 rounded-xl hover:bg-white/5 hidden sm:block">
        <SettingsIcon className="h-4 w-4" />
      </button>
      <button className="relative p-2 rounded-xl hover:bg-white/5">
        <Bell className="h-4 w-4" />
        <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-neon-pink text-[9px] font-bold grid place-items-center">3</span>
      </button>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center">
        <User className="h-4 w-4" />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-neon-green border-2 border-background" />
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background bg-grid relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-neon-pink/5 pointer-events-none" />
      <div className="relative flex min-h-screen">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-0 h-screen py-0">
            <Sidebar />
          </div>
        </aside>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <motion.aside
                initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
                transition={{ type: "spring", damping: 25 }}
                className="lg:hidden fixed left-0 top-0 h-screen w-72 z-50"
              >
                <div className="relative h-full">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 z-10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <Sidebar onNav={() => setOpen(false)} />
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
        <main className="flex-1 min-w-0 flex flex-col">
          <TopBar onMenu={() => setOpen(true)} />
          <div className="flex-1 p-3 lg:p-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
