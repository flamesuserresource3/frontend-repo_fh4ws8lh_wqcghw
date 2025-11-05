import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Sustainability from "./components/Sustainability";
import { Leaf } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-extrabold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf size={18} />
            </span>
            Pulp & Paper Co.
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gray-900">Tentang</a>
            <a href="#products" className="hover:text-gray-900">Produk</a>
            <a href="#sustainability" className="hover:text-gray-900">Sustainability</a>
            <a href="#contact" className="hover:text-gray-900">Kontak</a>
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700"
          >
            Dapatkan Penawaran
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Products />
        <Sustainability />

        {/* Contact / CTA section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mari Bekerja Sama</h2>
                <p className="mt-3 text-gray-600">
                  Tim kami siap membantu kebutuhan pulp dan kertas Anda. Kirimkan
                  pertanyaan, minta sampel, atau jadwalkan kunjungan pabrik.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-200 p-4 bg-white">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">sales@pulpandpaper.co</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4 bg-white">
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="font-semibold">+62 21 555 1234</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4 bg-white">
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-semibold">Kawasan Industri Paper, Karawang</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4 bg-white">
                    <p className="text-sm text-gray-500">Jam Operasional</p>
                    <p className="font-semibold">Senin–Jumat, 09.00–17.00</p>
                  </div>
                </div>
              </div>

              <form className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nama</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="email@perusahaan.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Pesan</label>
                  <textarea
                    rows="4"
                    className="mt-1 w-full rounded-lg border-gray-300 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="Ceritakan kebutuhan Anda"
                  />
                </div>
                <button
                  type="button"
                  className="w-full inline-flex justify-center px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                >
                  Kirim Permintaan
                </button>
                <p className="text-xs text-gray-500">
                  Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pulp & Paper Co. Semua hak dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#sustainability" className="hover:text-gray-900">Lingkungan</a>
            <a href="#products" className="hover:text-gray-900">Produk</a>
            <a href="#about" className="hover:text-gray-900">Profil</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
