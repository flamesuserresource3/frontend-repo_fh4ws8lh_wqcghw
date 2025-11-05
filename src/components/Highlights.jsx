import { Award, Shield, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Award,
    title: "Kualitas Kelas Dunia",
    desc: "Standar mutu ketat untuk performa konsisten di setiap batch.",
  },
  {
    icon: Shield,
    title: "Sertifikasi Lengkap",
    desc: "Memenuhi ISO 14001, FSC, dan kepatuhan lingkungan global.",
  },
  {
    icon: Users,
    title: "Kemitraan Jangka Panjang",
    desc: "Tim ahli mendampingi dari R&D hingga supply chain.",
  },
  {
    icon: Leaf,
    title: "Berkelanjutan by Design",
    desc: "Efisiensi energi, bahan baku terkelola, dan daur ulang.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 170, damping: 20 },
  },
};

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-500/10" aria-hidden />
              <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
