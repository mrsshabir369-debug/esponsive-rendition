import { createFileRoute } from "@tanstack/react-router";
import { Radar, PlayCircle, Download } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, Chip, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/network-scanner")({
  head: pageHead("Network Scanner", "Advanced network scanning powered by APEX AGENT."),
  component: NetScanner,
});

const results = [
  { ip: "192.168.1.1", host: "router.local", ports: "22,80,443", status: "open", disco: "192.168.1.1" },
  { ip: "192.168.1.10", host: "workstation", ports: "139,445", status: "open", disco: "192.168.1.10" },
  { ip: "192.168.1.15", host: "server.local", ports: "21,22,80,443", status: "open", disco: "192.168.1.15" },
  { ip: "192.168.1.20", host: "db-server", ports: "3306", status: "filtered", disco: "192.168.1.20" },
  { ip: "192.168.1.25", host: "printer", ports: "9100", status: "open", disco: "192.168.1.25" },
];

function NetScanner() {
  return (
    <AppShell>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,340px)_1fr]">
        <Panel>
          <SectionTitle icon={Radar} title="Network Scanner" subtitle="Advanced network scanning tools" />
          <div className="space-y-3 text-sm">
            {[
              { l: "Network Range", v: "192.168.1.0/24" },
              { l: "Scan Type", v: "Comprehensive Scan" },
              { l: "Scan Ports", v: "All Ports" },
              { l: "Scan Speed", v: "Fast" },
              { l: "Output Format", v: "Results" },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-xs text-muted-foreground mb-1">{f.l}</label>
                <div className="rounded-lg bg-black/30 border border-border px-3 py-2 text-sm">{f.v}</div>
              </div>
            ))}
            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-neon-pink py-2.5 font-medium glow-primary">
              <PlayCircle className="h-4 w-4" /> Start Scan
            </button>
          </div>
        </Panel>

        <Panel delay={0.15}>
          <SectionTitle title="Scan Results" right={<button className="inline-flex items-center gap-1 text-xs text-primary"><Download className="h-3 w-3" />Export</button>} />
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-muted-foreground border-b border-border">
                  <th className="p-2">IP Address</th><th className="p-2">Hostname</th><th className="p-2">Ports</th><th className="p-2">Status</th><th className="p-2">Discovered</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.ip} className="border-b border-border/50 hover:bg-white/5">
                    <td className="p-2 font-mono">{r.ip}</td>
                    <td className="p-2">{r.host}</td>
                    <td className="p-2 font-mono text-neon-cyan">{r.ports}</td>
                    <td className="p-2"><Chip tone={r.status === "open" ? "green" : "amber"}>{r.status}</Chip></td>
                    <td className="p-2 font-mono text-xs text-muted-foreground">{r.disco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
