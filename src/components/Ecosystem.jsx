import { Users, Globe, ArrowRight } from "lucide-react";

const partners = [
  "AGROTRADE",
  "GLOBAL GRAINS",
  "HARVEST CO.",
  "PORTALLIANCE",
  "ATLANTIC LOGISTICS",
  "SEAWAY TECH",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Users className="h-3.5 w-3.5 text-cyan-400" />
              Neutral industry consortium
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">An ecosystem where competitors collaborate</h2>
            <p className="mt-3 text-white/70">
              Connect producers, traders, shippers, ports, and inspectors on a common platform to reduce friction and errors across the value chain.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
              Become a member <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grow">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Globe className="h-3.5 w-3.5" />
                Selected participants
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {partners.map((p) => (
                  <div key={p} className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-center text-sm text-white/80">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
