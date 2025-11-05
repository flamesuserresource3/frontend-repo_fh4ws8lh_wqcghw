import { Shield, CheckCircle, Lock } from "lucide-react";

export default function Compliance() {
  return (
    <section id="compliance" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Governance, security, and trust by design</h2>
          <p className="mt-3 text-white/70">
            Independent, controlled, and transparent. Every action is validated, logged, and attributable.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card
            icon={<Shield className="h-5 w-5" />}
            title="Governance"
            desc="Neutral operating model with clear roles, separation of duties, and audit trails."
          />
          <Card
            icon={<Lock className="h-5 w-5" />}
            title="Security"
            desc="Encryption in transit and at rest, SSO, and fine-grained permissions across entities."
          />
          <Card
            icon={<CheckCircle className="h-5 w-5" />}
            title="Compliance"
            desc="Controls aligned with industry standards and regular independent assessments."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
