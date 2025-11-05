import React, { useMemo, useState } from 'react';
import { ZoomIn, ZoomOut, Info, Leaf, Sprout, TreePine, CircleDollarSign } from 'lucide-react';

// Simple interactive Acacia tree using SVG with clickable parts and zoom-to-focus
// Parts: canopy/leaves, branches, trunk (wood), bark, pods, roots

const PARTS = {
  leaves: {
    label: 'Daun',
    icon: Leaf,
    color: '#22c55e',
    origin: '60% 35%',
    summary: 'Tidak digunakan untuk pulp. Biasanya menjadi biomassa/kompos atau dikembalikan ke lahan.',
    details: [
      'Tidak masuk ke proses chipping',
      'Dapat dimanfaatkan sebagai mulsa/kompos',
      'Kontribusi pada keanekaragaman hayati kebun',
    ],
  },
  branches: {
    label: 'Ranting/Cabang',
    icon: TreePine,
    color: '#16a34a',
    origin: '58% 40%',
    summary: 'Sebagian digunakan (jika diameter cukup) sebagai bahan baku chip; sisanya untuk bahan bakar biomassa.',
    details: [
      'Cabang berdiameter cukup dapat menjadi chip kayu',
      'Sisa cabang jadi energi biomassa/boiler',
      'Memengaruhi kadar kulit dan kotoran pada kayu masuk',
    ],
  },
  trunk: {
    label: 'Batang (Kayu)',
    icon: Sprout,
    color: '#92400e',
    origin: '50% 55%',
    summary: 'Sumber serat utama untuk pulp (selulosa). Dipotong jadi chip, lalu proses kraft/berbasis kimia.',
    details: [
      'Kayu dibongkar, dikuliti, dicacah (chipper) menjadi chip',
      'Diproses dalam digester (kraft) untuk memisahkan lignin',
      'Menentukan yield, kekuatan, dan warna pulp',
    ],
  },
  bark: {
    label: 'Kulit Kayu',
    icon: Info,
    color: '#b45309',
    origin: '50% 58%',
    summary: 'Umumnya dikupas dan tidak digunakan untuk pulp; dimanfaatkan sebagai bahan bakar atau ekstraktif.',
    details: [
      'Dikurangi untuk menekan kotoran/ash di proses',
      'Dapat dipakai sebagai bahan bakar boiler',
      'Mengandung ekstraktif yang memengaruhi kimia proses',
    ],
  },
  pods: {
    label: 'Bunga/Polong',
    icon: Info,
    color: '#84cc16',
    origin: '68% 32%',
    summary: 'Tidak digunakan pada proses pulp. Potensi sebagai benih/riset ekstraktif.',
    details: [
      'Tidak masuk rantai pasok pulp',
      'Dapat dikumpulkan untuk perbanyakan bibit',
    ],
  },
  roots: {
    label: 'Akar',
    icon: CircleDollarSign,
    color: '#166534',
    origin: '50% 85%',
    summary: 'Tidak digunakan untuk pulp. Peran penting pada kesehatan tanah dan fiksasi nitrogen.',
    details: [
      'Mendukung kesuburan tanah (fiksasi N oleh rhizobia)',
      'Stabilisasi tanah dan retensi air',
    ],
  },
};

function PartBadge({ active, color, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
        active ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      {children}
    </button>
  );
}

export default function AcaciaTree() {
  const [selected, setSelected] = useState('trunk');
  const [zoom, setZoom] = useState(1.0);

  const part = useMemo(() => PARTS[selected], [selected]);

  const handleFocus = (key) => {
    setSelected(key);
    setZoom(1.9);
  };

  const resetView = () => setZoom(1.0);

  return (
    <section id="acacia" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Pohon Akasia Interaktif</h2>
          <p className="mt-4 text-gray-600">Klik bagian pohon untuk melihat bagaimana tiap komponen dimanfaatkan dalam industri pulp & paper, lalu zoom ke fokus area.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* SVG Tree Panel */}
          <div className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm overflow-hidden">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {Object.entries(PARTS).map(([key, cfg]) => (
                  <PartBadge key={key} active={selected === key} color={cfg.color} onClick={() => handleFocus(key)}>
                    {cfg.label}
                  </PartBadge>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setZoom((z) => Math.min(2.2, z + 0.2))}
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(1.0, z - 0.2))}
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              className="relative aspect-[4/3] w-full rounded-lg bg-gradient-to-b from-emerald-100/60 to-emerald-50"
            >
              {/* Scene ground */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-emerald-200/70 to-transparent" />

              {/* SVG tree */}
              <svg
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out"
                style={{ transform: `scale(${zoom})`, transformOrigin: part.origin }}
              >
                {/* Canopy / leaves */}
                <g onClick={() => handleFocus('leaves')} className="cursor-pointer">
                  <ellipse cx="240" cy="95" rx="95" ry="55" fill="#34d399" opacity="0.95" />
                  <ellipse cx="180" cy="110" rx="80" ry="50" fill="#22c55e" opacity="0.95" />
                  <ellipse cx="300" cy="110" rx="70" ry="45" fill="#22c55e" opacity="0.95" />
                  {/* hover glow */}
                  <ellipse cx="240" cy="95" rx="95" ry="55" fill={PARTS.leaves.color} opacity="0.15">
                    <title>Daun</title>
                  </ellipse>
                </g>

                {/* Pods */}
                <g onClick={() => handleFocus('pods')} className="cursor-pointer">
                  <ellipse cx="270" cy="85" rx="12" ry="6" fill="#a3e635" />
                  <ellipse cx="210" cy="120" rx="10" ry="5" fill="#a3e635" />
                  <ellipse cx="310" cy="115" rx="9" ry="4.5" fill="#a3e635" />
                </g>

                {/* Branches */}
                <g onClick={() => handleFocus('branches')} className="cursor-pointer">
                  <path d="M210 140 C200 120, 170 110, 150 100" stroke="#166534" strokeWidth="6" fill="none" />
                  <path d="M250 140 C270 120, 290 110, 315 105" stroke="#166534" strokeWidth="6" fill="none" />
                </g>

                {/* Trunk */}
                <g onClick={() => handleFocus('trunk')} className="cursor-pointer">
                  <rect x="215" y="140" width="35" height="85" fill="#92400e" />
                  <rect x="215" y="140" width="35" height="85" fill="#000" opacity="0.05" />
                </g>

                {/* Bark overlay clickable */}
                <g onClick={() => handleFocus('bark')} className="cursor-pointer">
                  <rect x="215" y="140" width="35" height="85" fill="#b45309" opacity="0.15" />
                </g>

                {/* Roots */}
                <g onClick={() => handleFocus('roots')} className="cursor-pointer">
                  <path d="M232 225 C220 245, 210 258, 205 270" stroke="#166534" strokeWidth="4" fill="none" />
                  <path d="M232 225 C238 245, 245 258, 253 270" stroke="#166534" strokeWidth="4" fill="none" />
                  <path d="M232 225 C230 240, 232 255, 232 270" stroke="#166534" strokeWidth="4" fill="none" />
                </g>

                {/* Ground line */}
                <line x1="100" y1="225" x2="360" y2="225" stroke="#10b981" strokeWidth="4" />
              </svg>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
              <p>Klik bagian pohon untuk fokus dan melihat detail.</p>
              <button onClick={resetView} className="text-emerald-700 hover:text-emerald-800">Reset tampilan</button>
            </div>
          </div>

          {/* Details Panel */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                {(() => {
                  const Icon = part.icon;
                  return <Icon className="h-5 w-5 text-emerald-600" />;
                })()}
                <h3 className="text-lg font-semibold text-slate-900">{part.label}</h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">Akasia mangium</span>
            </div>

            <p className="mt-3 text-slate-700">{part.summary}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              {part.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <button onClick={() => setZoom(1.9)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">
                <ZoomIn className="h-4 w-4" /> Perbesar
              </button>
              <button onClick={resetView} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">
                <ZoomOut className="h-4 w-4" /> Kecilkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
