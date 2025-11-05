import { Shield, Server, Lock, BarChart3, Globe, Layers } from "lucide-react";

const features = [
  {
    title: "Shared process layer",
    desc: "Standardize complex, multi-party workflows with role-based steps and auditable checkpoints.",
    icon: Layers,
  },
  {
    title: "Data harmonization",
    desc: "Normalize and validate inputs from disparate systems to a single, governed model.",
    icon: Globe,
  },
  {
    title: "Secure connectivity",
    desc: "Enterprise integrations via APIs and managed adapters with fine-grained access controls.",
    icon: Lock,
  },
  {
    title: "Scalable infrastructure",
    desc: "Cloud-native architecture engineered for reliability, performance, and global scale.",
    icon: Server,
  },
  {
    title: "Risk & compliance",
    desc: "Embedded controls, transparent logs, and separation of duties to meet industry standards.",
    icon: Shield,
  },
  {
    title: "Operational insights",
    desc: "Real-time status, SLAs, and analytics to optimize throughput and collaboration.",
    icon: BarChart3,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built for cross‑company operations</h2>
          <p className="mt-3 text-white/70">
            Unify stakeholders on a neutral platform that enforces one source of truth and a common way of working.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-emerald-400/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
