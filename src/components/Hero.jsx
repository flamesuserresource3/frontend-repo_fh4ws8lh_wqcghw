import { ArrowRight, Leaf, Factory } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <Leaf size={18} /> Sustainable Pulp & Paper
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Inovasi Pulp & Paper untuk Masa Depan yang Berkelanjutan
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Kami memproduksi pulp dan kertas berkualitas tinggi dengan
              mengutamakan efisiensi, kualitas, dan tanggung jawab lingkungan.
              Mendukung berbagai industri dari kemasan hingga percetakan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Jelajahi Produk <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{label: "Tahun Pengalaman", value: "25+"}, {label: "Kapasitas/Tahun", value: "500K ton"}, {label: "Negara Tujuan", value: "30+"}].map((stat) => (
                <div key={stat.label} className="text-center bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-gray-100 bg-white shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-teal-600/10" />
              <img
                src="https://images.unsplash.com/photo-1533119400600-72fa5b85f5b0?q=80&w=1600&auto=format&fit=crop"
                alt="Modern paper production"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 shadow-lg rounded-2xl p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-600/10 flex items-center justify-center text-emerald-700">
                <Factory size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">ISO 14001 Certified</p>
                <p className="text-xs text-gray-500">Standar manajemen lingkungan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
