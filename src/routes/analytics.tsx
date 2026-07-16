import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, Donut, pageHead } from "@/components/apex/ui";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/analytics")({
  head: pageHead("Analytics", "Security analytics and reports."),
  component: Analytics,
});

const trend = Array.from({ length: 30 }, (_, i) => ({ d: i, v: 40 + Math.sin(i / 3) * 20 + Math.random() * 15 }));

function Analytics() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={BarChart3} title="Analytics" subtitle="Security analytics and reports" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <Donut value={86} label="Security Score" color="oklch(0.82 0.2 155)" />
            <div className="text-xs text-muted-foreground mt-2">Excellent</div>
          </div>
          {[
            { l: "Threat Detection", v: 124, s: "This month", c: "text-neon-pink" },
            { l: "Vulnerabilities", v: 23, s: "High Risk", c: "text-amber-400" },
            { l: "Reports Generated", v: 45, s: "This Month", c: "text-primary" },
          ].map((k) => (
            <div key={k.l} className="rounded-xl bg-black/30 border border-border p-4">
              <div className="text-xs text-muted-foreground">{k.l}</div>
              <div className={`font-display text-3xl font-bold ${k.c}`}>{k.v}</div>
              <div className="text-[10px] text-muted-foreground">{k.s}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="h-3" />

      <Panel delay={0.15}>
        <SectionTitle title="Security Trends" right={<button className="text-xs text-primary">View Reports</button>} />
        <div className="h-72">
          <ResponsiveContainer>
            <AreaChart data={trend}>
              <defs>
                <linearGradient id="tr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.68 0.24 300)" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="oklch(0.72 0.24 350)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="d" hide />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "oklch(0.19 0.04 278)", border: "1px solid oklch(0.32 0.06 285)", borderRadius: 12 }} />
              <Area dataKey="v" stroke="oklch(0.72 0.22 340)" strokeWidth={2.5} fill="url(#tr)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    </AppShell>
  );
}
