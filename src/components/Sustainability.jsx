import { Leaf, Droplets, Recycle, Shield } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Bahan Baku Bersertifikat",
    desc: "Menggunakan kayu dari hutan tanaman industri yang bersertifikat dan terkelola.",
  },
  {
    icon: Droplets,
    title: "Pengelolaan Air",
    desc: "Teknologi daur ulang air proses untuk menekan konsumsi hingga 40%.",
  },
  {
    icon: Recycle,
    title: "Daur Ulang & Limbah",
    desc: "Pemanfaatan limbah menjadi energi alternatif dan bahan baku sekunder.",
  },
  {
    icon: Shield,
    title: "Kepatuhan & Keselamatan",
    desc: "Mematuhi standar ISO 14001 dan keselamatan kerja berkelas dunia.",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
            Sustainability
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Berkelanjutan adalah Inti Operasi Kami
          </h2>
          <p className="mt-3 text-gray-600">
            Dari hulu ke hilir, kami mengintegrasikan praktik yang ramah lingkungan
            untuk memastikan dampak positif bagi planet dan masyarakat.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6">
              <div className="h-10 w-10 rounded-lg bg-white text-emerald-700 border border-emerald-100 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1540280368-1fe174ca8ba2?q=80&w=1600&auto=format&fit=crop"
            alt="Hutan berkelanjutan"
            className="w-full md:w-1/2 rounded-xl object-cover"
            loading="lazy"
          />
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-900">Komitmen Net-Zero</h3>
            <p className="mt-2 text-gray-600">
              Kami menargetkan pengurangan emisi gas rumah kaca secara bertahap
              selaras dengan SBTi dan mendukung energi terbarukan di seluruh
              fasilitas produksi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
