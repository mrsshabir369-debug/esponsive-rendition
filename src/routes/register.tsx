import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, User } from "lucide-react";
import { pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/register")({
  head: pageHead("Register", "Create your APEX AGENT account."),
  component: Register,
});

function Register() {
  return (
    <div className="min-h-screen grid place-items-center bg-background bg-grid p-4 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 w-full max-w-md relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display font-bold text-gradient">APEX AGENT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground">Create account</div>
          </div>
        </div>
        <h1 className="font-display text-2xl font-bold mb-1">Get started</h1>
        <p className="text-sm text-muted-foreground mb-6">Provision a new operator identity.</p>
        <div className="space-y-3">
          {[User, Mail, Lock].map((I, i) => (
            <div key={i} className="flex items-center gap-2 rounded-xl bg-black/30 border border-border px-3 py-2.5">
              <I className="h-4 w-4 text-muted-foreground" />
              <input placeholder={["Name", "Email", "Password"][i]} type={i === 2 ? "password" : "text"} className="flex-1 min-w-0 bg-transparent outline-none text-sm" />
            </div>
          ))}
          <Link to="/dashboard" className="block text-center rounded-xl bg-gradient-to-r from-primary to-neon-pink py-2.5 font-medium glow-primary">
            Create account
          </Link>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
        </div>
      </motion.div>
    </div>
  );
}
