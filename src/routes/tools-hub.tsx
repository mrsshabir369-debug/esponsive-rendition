import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, Plus, Cpu } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/tools-hub")({
  head: pageHead("Tools Hub", "All security tools in one place."),
  component: ToolsHub,
});

const tools = [
  { name: "Nmap", desc: "Network Scanner", color: "from-primary to-neon-cyan" },
  { name: "SQLMap", desc: "SQL Injection", color: "from-neon-pink to-primary" },
  { name: "Gobuster", desc: "Directory Bruteforce", color: "from-neon-cyan to-neon-green" },
  { name: "JohnTheRipper", desc: "Password Cracker", color: "from-amber-500 to-neon-pink" },
  { name: "Nikto", desc: "Web Scanner", color: "from-primary to-neon-pink" },
  { name: "Metasploit", desc: "Exploitation", color: "from-neon-pink to-primary" },
  { name: "Hydra", desc: "Login Brute Force", color: "from-amber-500 to-primary" },
  { name: "Wireshark", desc: "Packet Analyzer", color: "from-neon-cyan to-primary" },
  { name: "Burp Suite", desc: "Proxy Tool", color: "from-amber-500 to-neon-pink" },
  { name: "Aircrack-ng", desc: "WiFi Cracking", color: "from-primary to-neon-green" },
  { name: "OWASP ZAP", desc: "Web Proxy", color: "from-neon-pink to-neon-cyan" },
];

function ToolsHub() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={Wrench} title="Tools Hub" subtitle="Security tools collection" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-black/20 p-4 flex items-center gap-3 hover:border-primary/50 hover:glow-primary transition cursor-pointer"
            >
              <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${t.color} grid place-items-center`}>
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground truncate">{t.desc}</div>
              </div>
            </motion.div>
          ))}
          <button className="rounded-2xl border-2 border-dashed border-border p-4 flex items-center gap-3 hover:border-primary/50 hover:text-primary transition text-muted-foreground">
            <div className="h-12 w-12 shrink-0 rounded-xl border border-border grid place-items-center">
              <Plus className="h-5 w-5" />
            </div>
            <div className="min-w-0 text-left">
              <div className="font-semibold">Add More</div>
              <div className="text-xs">Custom Tools</div>
            </div>
          </button>
        </div>
      </Panel>
    </AppShell>
  );
}
