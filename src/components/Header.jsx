import React from 'react';
import { Building2, Cog, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-emerald-600 flex items-center justify-center text-white">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold leading-tight">Pulp & Paper Industries</p>
            <p className="text-xs text-slate-500 -mt-0.5">Innovating sustainable materials</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#scene" className="hover:text-emerald-600 transition-colors">3D Factory</a>
          <a href="#details" className="hover:text-emerald-600 transition-colors">Details</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-600"><Shield className="h-3.5 w-3.5"/>ISO 14001</span>
          <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors">
            <Cog className="h-4 w-4" /> Explore
          </button>
        </div>
      </div>
    </header>
  );
}
