import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/settings")({
  head: pageHead("Settings", "System settings and configuration."),
  component: SettingsPage,
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-3 border-b border-border/50 last:border-0">
      <span className="text-sm text-muted-foreground truncate">{label}</span>
      <span className="text-sm font-medium shrink-0">{value}</span>
    </div>
  );
}

function SettingsPage() {
  const [tab, setTab] = useState<"general" | "security" | "ai">("general");
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={SettingsIcon} title="Settings" subtitle="System settings and configuration" />
        <div className="flex gap-1 mb-4 border-b border-border overflow-x-auto">
          {(["general", "security", "ai"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-sm capitalize transition ${tab === t ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-white"}`}>
              {t === "ai" ? "AI Settings" : `${t} Settings`}
            </button>
          ))}
        </div>
        {tab === "general" && (
          <div>
            <Row label="Theme" value="Dark" />
            <Row label="Language" value="English" />
            <Row label="Notifications" value="Enabled" />
          </div>
        )}
        {tab === "security" && (
          <div>
            <Row label="Two Factor Auth" value="Enabled" />
            <Row label="Session Timeout" value="30 minutes" />
            <Row label="API Access" value="Enabled" />
          </div>
        )}
        {tab === "ai" && (
          <div>
            <Row label="Model" value="Mixtral-8x22B" />
            <Row label="Temperature" value="0.7" />
            <Row label="Max Tokens" value="4096" />
          </div>
        )}
      </Panel>
    </AppShell>
  );
}
