import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageSquare, FlaskConical, Terminal as TerminalIcon, FileText, Clock,
  Zap, Copy, Send, Paperclip, Image as ImageIcon, Code2, Mic, Plus,
  MoreHorizontal, Sparkles, Globe, Server, Cpu, Lock, Radar, Fingerprint,
  Shield, Wifi, Activity, PlayCircle, Upload, Edit3, ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, StatCard, SectionTitle, Donut, Chip, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/dashboard")({
  head: pageHead("Dashboard", "APEX AGENT operator command center — AI chat, scans, monitoring, and tools."),
  component: Dashboard,
});

const stats = [
  { icon: MessageSquare, label: "AI Conversations", value: "1,245", sub: "+12 today", color: "bg-primary/30" },
  { icon: FlaskConical, label: "Research Done", value: "89", sub: "+5 today", color: "bg-neon-cyan/30" },
  { icon: TerminalIcon, label: "Commands Run", value: "532", sub: "+18 today", color: "bg-neon-pink/30" },
  { icon: FileText, label: "Files Analyzed", value: "128", sub: "+7 today", color: "bg-neon-green/30" },
  { icon: Clock, label: "Uptime", value: "7h 42m", sub: "stable", color: "bg-amber-500/30" },
];

const quickTools = [
  { icon: Globe, label: "Whois Lookup" }, { icon: Server, label: "DNS Lookup" },
  { icon: Radar, label: "Subdomain Finder" }, { icon: Fingerprint, label: "Port Scanner" },
  { icon: Lock, label: "Hash Generator" }, { icon: Wifi, label: "IP Tracker" },
  { icon: Shield, label: "SQLi Scanner" }, { icon: FileText, label: "Header Check" },
  { icon: Activity, label: "URL Analyze" }, { icon: Lock, label: "SSL Checker" },
  { icon: MessageSquare, label: "Phone Lookup" }, { icon: Plus, label: "More Tools" },
];

const toolHub = [
  { name: "Nmap", desc: "Network Scanner", color: "from-primary to-neon-cyan" },
  { name: "SQLMap", desc: "SQL Injection", color: "from-neon-pink to-primary" },
  { name: "Gobuster", desc: "Directory Bruteforce", color: "from-neon-cyan to-neon-green" },
  { name: "JohnTheRipper", desc: "Password Cracker", color: "from-amber-500 to-neon-pink" },
  { name: "Nikto", desc: "Web Scanner", color: "from-primary to-neon-pink" },
  { name: "Metasploit", desc: "Exploitation", color: "from-neon-pink to-primary" },
  { name: "Hydra", desc: "Login Brute Force", color: "from-amber-500 to-primary" },
  { name: "Wireshark", desc: "Packet Analyzer", color: "from-neon-cyan to-primary" },
  { name: "Burp Suite", desc: "Proxy Tool", color: "from-amber-500 to-neon-pink" },
];

const activity = [
  { time: "12:40 PM", text: "Ran nmap scan on 192.168.1.0/24" },
  { time: "12:38 PM", text: "Researched: AI latest news" },
  { time: "12:36 PM", text: "Accessed /etc/passwd" },
  { time: "12:34 PM", text: "Generated 20 strong passwords" },
];

function Dashboard() {
  return (
    <AppShell>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-3">
        <div className="space-y-3">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.05} />)}
          </div>

          {/* AI Chat */}
          <Panel delay={0.15}>
            <div className="flex items-center gap-1 border-b border-border pb-3 mb-4 overflow-x-auto">
              {["AI Chat", "Code", "Vision", "Audio", "Image Gen", "Plugins"].map((t, i) => (
                <button key={t} className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${i === 0 ? "bg-primary/20 text-primary border border-primary/40" : "text-muted-foreground hover:text-white"}`}>
                  {i === 0 && <Sparkles className="inline h-3.5 w-3.5 mr-1" />}
                  {t}
                </button>
              ))}
              <div className="flex-1" />
              <button className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium glow-primary">
                <Plus className="h-3.5 w-3.5" /> New Chat
              </button>
              <button className="p-1.5 rounded-lg hover:bg-white/5"><MoreHorizontal className="h-4 w-4" /></button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/20 border border-primary/40 p-3 text-sm">
                  Bana do ek nmap command jo pura network scan kare aur open ports bhi dikha de
                  <div className="text-[10px] text-muted-foreground mt-1 text-right">12:45 PM</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0 rounded-2xl rounded-tl-sm glass p-4 text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-primary">APEX AI</span>
                    <span className="text-[10px] text-muted-foreground">12:45 PM</span>
                  </div>
                  <p className="text-foreground/90">Yeh raha aapke liye advanced nmap command jo complete network scan karega aur open ports bhi dikhayega:</p>
                  <div className="rounded-xl bg-black/50 border border-border p-3 font-mono text-xs relative group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neon-green">nmap -sS -sV -O -T4 -p- --open -Pn 192.168.1.0/24</span>
                      <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-white"><Copy className="h-3 w-3" /> Copy</button>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Description:</div>
                    <ul className="text-xs font-mono space-y-1 text-muted-foreground">
                      <li><span className="text-neon-cyan">-sS</span> : TCP SYN scan</li>
                      <li><span className="text-neon-cyan">-sV</span> : Service version detection</li>
                      <li><span className="text-neon-cyan">-O</span>  : OS detection</li>
                      <li><span className="text-neon-cyan">-T4</span> : Faster timing</li>
                      <li><span className="text-neon-cyan">-p-</span> : All ports</li>
                      <li><span className="text-neon-cyan">--open</span> : Sirf open ports show karega</li>
                      <li><span className="text-neon-cyan">-Pn</span> : No ping (host discovery skip)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-xl bg-black/40 border border-border p-2">
              <input placeholder="Message Apex AI..." className="flex-1 min-w-0 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground" />
              <button className="p-1.5 rounded-lg hover:bg-white/5"><Paperclip className="h-4 w-4" /></button>
              <button className="p-1.5 rounded-lg hover:bg-white/5 hidden sm:block"><ImageIcon className="h-4 w-4" /></button>
              <button className="p-1.5 rounded-lg hover:bg-white/5 hidden sm:block"><Code2 className="h-4 w-4" /></button>
              <button className="p-1.5 rounded-lg hover:bg-white/5"><Mic className="h-4 w-4" /></button>
              <button className="p-2 rounded-lg bg-primary text-primary-foreground glow-primary"><Send className="h-4 w-4" /></button>
            </div>
          </Panel>

          {/* Tool Hub */}
          <Panel delay={0.2}>
            <SectionTitle
              icon={Zap}
              title="Tool Hub"
              right={
                <div className="hidden md:flex items-center gap-1 text-xs">
                  {["All", "Offensive", "Utility", "Programming", "AI Tools", "OSINT", "Forensics"].map((t, i) => (
                    <button key={t} className={`px-2 py-1 rounded-lg ${i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-white"}`}>{t}</button>
                  ))}
                </div>
              }
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {toolHub.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-black/20 p-3 cursor-pointer hover:border-primary/50 transition-all"
                >
                  <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${t.color} grid place-items-center mb-2`}>
                    <Cpu className="h-4 w-4 text-white" />
                  </div>
                  <div className="font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{t.desc}</div>
                </motion.div>
              ))}
              <button className="rounded-xl border-2 border-dashed border-border p-3 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:border-primary/50 hover:text-primary transition">
                <Plus className="h-5 w-5" />
                <span className="text-xs">Add More</span>
                <span className="text-[10px]">Custom Tools</span>
              </button>
            </div>
          </Panel>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Panel delay={0.25}>
              <SectionTitle icon={Cpu} title="AI Models" right={<MoreHorizontal className="h-4 w-4" />} />
              <div className="rounded-xl bg-black/30 border border-border p-3 flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-neon-pink grid place-items-center shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">Mixtral 8x22B</div>
                  </div>
                </div>
                <Chip tone="green">Active</Chip>
              </div>
              <button className="w-full rounded-xl bg-primary/20 border border-primary/40 py-2 text-sm font-medium">Switch Model</button>
            </Panel>

            <Panel delay={0.3}>
              <SectionTitle icon={Mic} title="Voice Assistant" right={<MoreHorizontal className="h-4 w-4" />} />
              <div className="flex items-center justify-center gap-1 h-10 mb-3">
                {[0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.5, 0.8, 0.3, 0.7, 0.5].map((h, i) => (
                  <div key={i} className="w-1 rounded-full bg-primary wave-bar" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Click to speak</span>
                <button className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary"><Mic className="h-4 w-4" /></button>
              </div>
            </Panel>

            <Panel delay={0.35}>
              <SectionTitle icon={PlayCircle} title="Code Runner" right={<MoreHorizontal className="h-4 w-4" />} />
              <div className="rounded-lg bg-black/30 border border-border px-3 py-2 flex items-center justify-between mb-3 text-sm">
                <span className="flex items-center gap-2"><Code2 className="h-3.5 w-3.5 text-neon-cyan" /> Python 3.11</span>
                <MoreHorizontal className="h-4 w-4" />
              </div>
              <button className="w-full rounded-xl bg-gradient-to-r from-primary to-neon-pink py-2 text-sm font-medium glow-primary">Run Code</button>
            </Panel>

            <Panel delay={0.4}>
              <SectionTitle icon={Upload} title="File Upload" right={<MoreHorizontal className="h-4 w-4" />} />
              <div className="rounded-xl border-2 border-dashed border-border p-4 text-center">
                <Upload className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs">Drag & drop files here</div>
                <div className="text-[10px] text-muted-foreground">or click to browse</div>
              </div>
            </Panel>
          </div>
        </div>

        {/* Right rail */}
        <div className="space-y-3">
          <Panel delay={0.15}>
            <SectionTitle icon={Zap} title="Quick Tools" right={<button className="text-xs text-primary">Customize</button>} />
            <div className="grid grid-cols-3 gap-2">
              {quickTools.map((t, i) => (
                <motion.button
                  key={t.label + i}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl bg-black/30 border border-border grid place-items-center gap-1 hover:border-primary/50 transition p-1"
                >
                  <t.icon className="h-4 w-4 text-primary" />
                  <span className="text-[9px] text-center leading-tight">{t.label}</span>
                </motion.button>
              ))}
            </div>
          </Panel>

          <Panel delay={0.2}>
            <SectionTitle icon={Activity} title="System Overview" right={<Chip tone="green"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-neon-green" />Live</Chip>} />
            <div className="flex items-center gap-3">
              <Donut value={86} label="Performance" size={110} />
              <div className="flex-1 min-w-0 space-y-2 text-xs">
                {[
                  { l: "CPU Usage", v: "34%", c: "text-neon-cyan" },
                  { l: "RAM Usage", v: "56%", c: "text-primary" },
                  { l: "Disk Usage", v: "42%", c: "text-neon-pink" },
                  { l: "Network", v: "1.2 MB/s", c: "text-neon-green" },
                ].map((m) => (
                  <div key={m.l} className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground truncate">{m.l}</span>
                    <span className={`font-medium ${m.c}`}>{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel delay={0.25}>
            <SectionTitle title="Active Tasks" right={<button className="text-xs text-primary">View All</button>} />
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex justify-between mb-1 gap-2"><span className="truncate">Nmap Scan 192.168.1.0/24</span><span className="text-primary shrink-0">72%</span></div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-primary to-neon-pink" /></div>
              </div>
              {["Subdomain Enumeration", "SQL Injection Test"].map((n) => (
                <div key={n} className="flex justify-between items-center gap-2">
                  <span className="truncate">{n}</span>
                  <Chip tone="green">Completed ✓</Chip>
                </div>
              ))}
            </div>
          </Panel>

          <Panel delay={0.3}>
            <SectionTitle title="Recent Activity" right={<button className="text-xs text-primary">Clear</button>} />
            <div className="space-y-2 text-xs">
              {activity.map((a) => (
                <div key={a.text} className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">{a.time}</span>
                  <span className="truncate">{a.text}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel delay={0.35}>
            <SectionTitle title="Notes" right={<Edit3 className="h-4 w-4" />} />
            <input placeholder="Quick notes..." className="w-full bg-transparent border-b border-border pb-2 text-sm outline-none placeholder:text-muted-foreground" />
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
