import { createFileRoute } from "@tanstack/react-router";
import { User, Info, Lock, Key, Bell } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/profile")({
  head: pageHead("Profile", "User profile and preferences."),
  component: Profile,
});

function Profile() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={User} title="Profile" subtitle="User profile and preferences" />
        <div className="grid gap-4 md:grid-cols-[220px_1fr]">
          <div className="flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary">
              <User className="h-10 w-10" />
            </div>
            <div className="mt-3 font-display font-bold text-lg">Apex Operator</div>
            <div className="text-xs text-muted-foreground">operator@apex.com</div>
            <div className="text-[10px] text-primary mt-1">Administrator</div>
            <div className="grid grid-cols-3 gap-2 mt-4 w-full">
              {[{ v: "1254", l: "Commands" }, { v: "89", l: "Tools" }, { v: "47", l: "Reports" }].map((s) => (
                <div key={s.l} className="rounded-lg bg-black/30 border border-border p-2">
                  <div className="font-bold text-sm">{s.v}</div>
                  <div className="text-[9px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {[
              { i: Info, l: "Profile Information" },
              { i: Lock, l: "Change Password" },
              { i: Key, l: "API Keys" },
              { i: Bell, l: "Notification Settings" },
            ].map((r) => (
              <button key={r.l} className="w-full flex items-center gap-3 rounded-xl bg-black/20 border border-border p-3 hover:border-primary/50 transition text-left">
                <r.i className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm flex-1 truncate">{r.l}</span>
              </button>
            ))}
          </div>
        </div>
      </Panel>
    </AppShell>
  );
}
