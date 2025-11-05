import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl p-8 md:p-10 shadow">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Ingin demo interaktif pabrik Anda?</h3>
              <p className="text-white/90 max-w-xl">Kami dapat menghubungkan model Spline Anda agar area seperti paper machine, digester, dan boiler bisa diklik untuk menampilkan SOP, KPI, dan video.</p>
            </div>
            <form className="w-full md:w-auto bg-white text-slate-800 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-3 shadow-lg">
              <input type="email" required placeholder="Email kerja Anda" className="flex-1 border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
