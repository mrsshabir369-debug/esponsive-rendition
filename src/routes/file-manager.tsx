import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen, FileText } from "lucide-react";
import { AppShell } from "@/components/apex/AppShell";
import { Panel, SectionTitle, pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/file-manager")({
  head: pageHead("File Manager", "File management and analysis."),
  component: FileManager,
});

const files = [
  { name: "reconnaissance.txt", size: "5KB", mod: "192.168.1.10 12:45" },
  { name: "subdomains.txt", size: "3KB", mod: "192.168.1.10 12:40" },
  { name: "ports.txt", size: "2KB", mod: "192.168.1.10 12:35" },
  { name: "vulnerabilities.json", size: "8KB", mod: "192.168.1.10 12:30" },
  { name: "scan_results.xml", size: "15KB", mod: "192.168.1.10 12:25" },
  { name: "payloads.txt", size: "4KB", mod: "192.168.1.10 12:20" },
  { name: "wordlist.txt", size: "12KB", mod: "192.168.1.10 12:15" },
];

function FileManager() {
  return (
    <AppShell>
      <Panel>
        <SectionTitle icon={FolderOpen} title="File Manager" subtitle="File management and analysis" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b border-border">
                <th className="p-2">Name</th><th className="p-2">Size</th><th className="p-2">Modified</th>
              </tr>
            </thead>
            <tbody>
              {files.map((f) => (
                <tr key={f.name} className="border-b border-border/50 hover:bg-white/5">
                  <td className="p-2 flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> {f.name}</td>
                  <td className="p-2 text-muted-foreground">{f.size}</td>
                  <td className="p-2 font-mono text-xs text-muted-foreground">{f.mod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </AppShell>
  );
}
