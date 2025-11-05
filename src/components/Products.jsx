import { Package, Layers, FileText } from "lucide-react";

const products = [
  {
    icon: Package,
    title: "Kraft Pulp",
    desc: "Serat kuat untuk kemasan berkinerja tinggi dan berbagai aplikasi industri.",
  },
  {
    icon: FileText,
    title: "Printing & Writing Paper",
    desc: "Permukaan halus dan opacity optimal untuk kebutuhan percetakan.",
  },
  {
    icon: Layers,
    title: "Packaging Board",
    desc: "Papan kemasan kokoh, aman untuk makanan, dan ramah lingkungan.",
  },
  {
    icon: Package,
    title: "Tissue Base Paper",
    desc: "Bahan dasar tisu dengan kelembutan dan daya serap yang sangat baik.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produk Unggulan</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Koleksi produk dirancang untuk performa tinggi dan keberlanjutan.
              Kami mendukung kebutuhan industri kemasan, percetakan, dan
              konsumen global.
            </p>
          </div>
          <a href="#contact" className="text-emerald-700 font-semibold hover:underline">
            Minta Katalog →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                Pelajari lebih lanjut →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[linear-gradient(135deg,rgba(16,185,129,0.08),rgba(45,212,191,0.08))] border border-emerald-100 p-6">
          <p className="text-sm text-emerald-900">
            Semua produk kami memenuhi standar FSC dan PEFC untuk pengelolaan hutan
            berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  );
}
