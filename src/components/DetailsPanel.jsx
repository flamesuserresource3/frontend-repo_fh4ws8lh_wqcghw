import React from 'react';
import { Building2, Cog, Shield } from 'lucide-react';

const detailsMap = {
  Warehouse: {
    title: 'Warehouse',
    desc: 'Automated storage for finished paper reels and pulp bales with smart inventory tracking.',
    icon: Building2,
    highlights: ['Automated racking', 'Barcode + RFID', 'Fire suppression']
  },
  "Paper Machine": {
    title: 'Paper Machine',
    desc: 'High-speed machine for forming, pressing, and drying paper webs with precise moisture control.',
    icon: Cog,
    highlights: ['Online QCS/MD/CD control', 'Up to 1500 m/min', 'Energy recovery']
  },
  "Recovery Boiler": {
    title: 'Recovery Boiler',
    desc: 'Converts black liquor into energy and recovers chemicals, reducing fossil fuel use.',
    icon: Shield,
    highlights: ['Chemical recovery', 'Steam cogeneration', 'Emissions control']
  }
};

function DefaultCard({ name }) {
  return (
    <div className="p-5 bg-white border border-slate-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Cog className="h-4 w-4 text-emerald-600"/>
        <p className="font-medium">{name || 'Factory Area'}</p>
      </div>
      <p className="text-sm text-slate-600">Click on different parts of the 3D model to explore processes, safety features, and sustainability initiatives.</p>
    </div>
  );
}

export default function DetailsPanel({ selected }) {
  const item = selected && detailsMap[selected] ? detailsMap[selected] : null;
  if (!item) return <DefaultCard name={selected} />;
  const Icon = item.icon;
  return (
    <div className="p-5 bg-white border border-slate-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-emerald-600"/>
        <p className="font-medium">{item.title}</p>
      </div>
      <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
        {item.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
