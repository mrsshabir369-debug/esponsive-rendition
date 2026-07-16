import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock } from "lucide-react";
import { pageHead } from "@/components/apex/ui";

export const Route = createFileRoute("/login")({
  head: pageHead("Login", "Sign in to APEX AGENT."),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid place-items-center bg-background bg-grid p-4 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-neon-pink/20 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 w-full max-w-md relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-neon-pink grid place-items-center glow-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display font-bold text-gradient">APEX AGENT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground">Welcome back</div>
          </div>
        </div>
        <h1 className="font-display text-2xl font-bold mb-1">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">Enter your operator credentials.</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-xl bg-black/30 border border-border px-3 py-2.5">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Email" className="flex-1 min-w-0 bg-transparent outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-black/30 border border-border px-3 py-2.5">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <input type="password" placeholder="Password" className="flex-1 min-w-0 bg-transparent outline-none text-sm" />
          </div>
          <Link to="/dashboard" className="block text-center rounded-xl bg-gradient-to-r from-primary to-neon-pink py-2.5 font-medium glow-primary hover:brightness-110 transition">
            Sign in
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs">
          <Link to="/forgot-password" className="text-muted-foreground hover:text-primary">Forgot password?</Link>
          <Link to="/register" className="text-primary">Create account</Link>
        </div>
      </motion.div>
    </div>
  );
}
