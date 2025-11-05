import { motion } from "framer-motion";
import { Calendar, Building2, Award, Globe } from "lucide-react";

const milestones = [
  {
    year: "1998",
    title: "Awal Berdiri",
    icon: Building2,
    desc: "Memulai operasi sebagai produsen pulp skala nasional dengan komitmen kualitas dan keberlanjutan.",
  },
  {
    year: "2008",
    title: "Ekspansi Pabrik",
    icon: Calendar,
    desc: "Menambah lini produksi kertas printing & writing, meningkatkan kapasitas dan efisiensi energi.",
  },
  {
    year: "2016",
    title: "Penghargaan Lingkungan",
    icon: Award,
    desc: "Meraih sertifikasi internasional untuk manajemen hutan lestari dan pengelolaan limbah.",
  },
  {
    year: "2023",
    title: "Pasar Global",
    icon: Globe,
    desc: "Menjadi pemasok utama di Asia Tenggara dengan jaringan distribusi ke lebih dari 20 negara.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export default function History() {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sejarah Perusahaan</h2>
          <p className="mt-3 text-gray-600">
            Sejak awal berdiri, kami terus berkembang dengan fokus pada inovasi, kualitas,
            dan praktik yang berkelanjutan. Berikut tonggak perjalanan kami.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-transparent" />

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.li key={m.year} variants={item} className="relative">
                  <div
                    className={`grid md:grid-cols-2 gap-6 items-center ${
                      isLeft ? "md:[&_>_div:nth-child(1)]:order-1" : "md:[&_>_div:nth-child(1)]:order-2"
                    }`}
                  >
                    {/* Content card */}
                    <div className={`relative ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                      <div
                        className={`hidden md:block absolute top-8 ${
                          isLeft ? "right-0" : "left-0"
                        } w-10 h-px bg-emerald-200`}
                      />

                      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                            <Icon size={20} />
                          </span>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">{m.year}</p>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{m.title}</h3>
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600">{m.desc}</p>
                      </div>
                    </div>

                    {/* Spacer column for alternating layout */}
                    <div className="hidden md:block" aria-hidden="true" />
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
