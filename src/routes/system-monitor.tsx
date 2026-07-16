import { createFileRoute } from "@tanstack/react-router";
import { Activity, Cpu, HardDrive, Wifi } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, Donut, pageHead } from "@/components/apex/ui";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/system-monitor")({
  head: pageHead("System Monitor", "Real-time system monitoring."),
  component: SystemMonitor,
});

const data = Array.from({ length: 24 }, (_, i) => ({ t: i, v: 30 + Math.sin(i / 2) * 20 + Math.random() * 15, w: 20 + Math.cos(i / 3) * 15 + Math.random() * 10 }));

const procs = [
  { name: "ApexAgent", cpu: "2.4%", mem: "245MB" },
  { name: "System", cpu: "1.8%", mem: "128MB" },
  { name: "Node.js", cpu: "3.6%", mem: "456MB" },
  { name: "Python", cpu: "2.1%", mem: "312MB" },
  { name: "Chrome", cpu: "12.1%", mem: "987MB" },
];

function SystemMonitor() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={Activity} title="System Overview" subtitle="Real-time system monitoring" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: 86, l: "CPU Usage", c: "oklch(0.82 0.16 200)", icon: Cpu },
            { v: 56, l: "RAM Usage", c: "oklch(0.68 0.24 300)", icon: Cpu },
            { v: 42, l: "Disk Usage", c: "oklch(0.72 0.24 350)", icon: HardDrive },
            { v: 23, l: "Network Usage", c: "oklch(0.82 0.2 155)", icon: Wifi },
          ].map((d) => (
            <div key={d.l} className="flex flex-col items-center">
              <Donut value={d.v} color={d.c} size={130} />
              <div className="text-xs text-muted-foreground mt-2">{d.l}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="h-3" />

      <div className="grid gap-3 lg:grid-cols-2">
        <Panel delay={0.15}>
          <SectionTitle title="Network Activity" right={<button className="text-xs text-primary">View All</button>} />
          <div className="h-52">
            <ResponsiveContainer>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="net" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.68 0.24 300)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.68 0.24 300)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="t" hide />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "oklch(0.19 0.04 278)", border: "1px solid oklch(0.32 0.06 285)", borderRadius: 12 }} />
                <Area dataKey="v" stroke="oklch(0.68 0.24 300)" strokeWidth={2} fill="url(#net)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel delay={0.2}>
          <SectionTitle title="Process Monitor" right={<button className="text-xs text-primary">View All</button>} />
          <div className="space-y-2">
            {procs.map((p) => (
              <div key={p.name} className="flex items-center justify-between gap-2 text-sm rounded-lg bg-black/20 border border-border px-3 py-2">
                <span className="truncate font-medium">{p.name}</span>
                <div className="flex gap-4 shrink-0 text-xs">
                  <span className="text-neon-cyan">{p.cpu}</span>
                  <span className="text-muted-foreground">{p.mem}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
