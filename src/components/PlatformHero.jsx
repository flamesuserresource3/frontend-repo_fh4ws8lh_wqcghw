import { ArrowRight, Shield, Server, Users } from "lucide-react";

export default function PlatformHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            Trusted enterprise collaboration
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Transform multi‑party operations into one secure, shared workflow
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-white/70 sm:text-lg">
            A neutral, enterprise-grade platform that connects organizations, standardizes data, and orchestrates end‑to‑end processes with transparency and strong governance.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              Explore capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See the ecosystem
            </a>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat icon={<Server className="h-4 w-4" />} label="Transactions synchronized" value="1.2M+" />
            <Stat icon={<Users className="h-4 w-4" />} label="Organizations onboarded" value="120+" />
            <Stat icon={<Shield className="h-4 w-4" />} label="Compliance controls" value="250+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
      <div className="flex items-center gap-2 text-xs text-white/60">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
