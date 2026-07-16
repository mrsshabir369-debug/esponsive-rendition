import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Send, Paperclip, Mic, Copy, Plus } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/chat")({
  head: pageHead("AI Chat", "Talk to APEX AI — offensive security copilot."),
  component: ChatPage,
});

const msgs = [
  { role: "user", text: "How do I enumerate subdomains for a target?" },
  { role: "ai", text: "Use amass, subfinder or assetfinder. Example: subfinder -d example.com -all -recursive | tee subs.txt" },
  { role: "user", text: "Show me a passive recon workflow." },
  { role: "ai", text: "1. amass intel  2. subfinder  3. httpx probe  4. nuclei templates  5. gowitness screenshots. Chain them for full passive recon." },
];

function ChatPage() {
  return (
    <AppShell>
      <Panel>
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="h-5 w-5 text-primary shrink-0" />
            <h2 className="font-display font-bold text-lg truncate">APEX AI Chat</h2>
          </div>
          <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium glow-primary shrink-0">
            <Plus className="h-3.5 w-3.5" /> New Chat
          </button>
        </div>
        <div className="space-y-4 min-h-[50vh]">
          {msgs.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className={`flex ${m.role === "user" ? "justify-end" : "gap-3"}`}>
              {m.role === "ai" && (
                <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center">
                  <Sparkles className="h-4 w-4" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${m.role === "user" ? "bg-primary/20 border border-primary/40 rounded-tr-sm" : "glass rounded-tl-sm"}`}>
                {m.text}
                {m.role === "ai" && (
                  <button className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground hover:text-white"><Copy className="h-3 w-3" /> Copy</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-black/40 border border-border p-2">
          <input placeholder="Message Apex AI..." className="flex-1 min-w-0 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground" />
          <button className="p-1.5 rounded-lg hover:bg-white/5"><Paperclip className="h-4 w-4" /></button>
          <button className="p-1.5 rounded-lg hover:bg-white/5"><Mic className="h-4 w-4" /></button>
          <button className="p-2 rounded-lg bg-primary text-primary-foreground glow-primary"><Send className="h-4 w-4" /></button>
        </div>
      </Panel>
    </AppShell>
  );
}
