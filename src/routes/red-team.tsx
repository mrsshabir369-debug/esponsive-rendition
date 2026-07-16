import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Skull, Radar, KeyRound, ShieldOff, Move, RotateCcw, PackageOpen } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/red-team")({
  head: pageHead("Red Team", "Red team operations and attack chains."),
  component: RedTeam,
});

const ops = [
  { icon: Radar, name: "Reconnaissance", desc: "Information Gathering", color: "from-primary to-neon-cyan" },
  { icon: KeyRound, name: "Initial Access", desc: "Gain Initial Access", color: "from-neon-pink to-primary" },
  { icon: ShieldOff, name: "Privilege Escalation", desc: "Escalate Privileges", color: "from-amber-500 to-neon-pink" },
  { icon: Move, name: "Lateral Movement", desc: "Move Through Network", color: "from-neon-cyan to-primary" },
  { icon: RotateCcw, name: "Persistence", desc: "Maintain Access", color: "from-primary to-neon-pink" },
  { icon: PackageOpen, name: "Exfiltration", desc: "Extract Data", color: "from-neon-pink to-neon-cyan" },
];

function RedTeam() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={Skull} title="Red Team" subtitle="Red team operations" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ops.map((o, i) => (
            <motion.div
              key={o.name}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-black/20 p-4 flex items-center gap-3 hover:border-primary/50 hover:glow-primary transition"
            >
              <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${o.color} grid place-items-center`}>
                <o.icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold truncate">{o.name}</div>
                <div className="text-xs text-muted-foreground truncate">{o.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Panel>

      <div className="h-3" />

      <Panel delay={0.2}>
        <SectionTitle title="Active Operations" />
        <div className="rounded-xl bg-black/20 border border-border p-4 space-y-2">
          <div className="flex justify-between items-center gap-2">
            <div className="min-w-0">
              <div className="font-medium truncate">Network Reconnaissance</div>
              <div className="text-xs text-muted-foreground font-mono">192.168.1.0/24</div>
            </div>
            <div className="text-xs text-muted-foreground shrink-0">Recon</div>
          </div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "67%" }} transition={{ duration: 1.2 }} className="h-full bg-gradient-to-r from-primary to-neon-pink" />
          </div>
          <div className="text-right text-xs text-primary font-medium">67%</div>
        </div>
      </Panel>
    </AppShell>
  );
}
