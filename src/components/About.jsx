import { Users, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tentang Perusahaan</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Didirikan pada tahun 1999, kami berkembang menjadi produsen pulp dan
              kertas terkemuka di kawasan Asia Tenggara. Fokus kami adalah
              menghadirkan produk ramah lingkungan, menjaga kualitas, dan
              menjalin kemitraan jangka panjang dengan pelanggan global.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <Users className="text-emerald-700" />
                <p className="mt-3 text-sm text-gray-600">>2.000 karyawan</p>
                <p className="text-base font-semibold text-gray-900">Tim ahli berpengalaman</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <Shield className="text-emerald-700" />
                <p className="mt-3 text-sm text-gray-600">Keamanan & kualitas</p>
                <p className="text-base font-semibold text-gray-900">Standar internasional</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                <Award className="text-emerald-700" />
                <p className="mt-3 text-sm text-gray-600">Penghargaan industri</p>
                <p className="text-base font-semibold text-gray-900">Inovasi & keberlanjutan</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border border-gray-100 bg-white shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514108225820-2b602873e539?q=80&w=1600&auto=format&fit=crop"
                  alt="Tim profesional pabrik kertas"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 shadow-lg rounded-2xl p-4">
                <p className="text-sm font-semibold text-gray-900">Jejak karbon berkurang 35%</p>
                <p className="text-xs text-gray-500">Program efisiensi energi 5 tahun terakhir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
