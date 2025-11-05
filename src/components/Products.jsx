import React from 'react';
import { Package, Layers, FileText } from 'lucide-react';

const products = [
  {
    icon: Package,
    title: 'Bleached Kraft Pulp',
    desc: 'High-purity fiber optimized for tissue, printing, and specialty papers.'
  },
  {
    icon: Layers,
    title: 'Containerboard',
    desc: 'Durable liners and fluting grades engineered for strength and efficiency.'
  },
  {
    icon: FileText,
    title: 'Office & Printing',
    desc: 'Reliable office papers with smooth finish and excellent runnability.'
  }
];

const Products = () => {
  return (
    <section id="products" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-gray-600">
            Engineered for performance and sustainability across diverse applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-100 opacity-0 blur-3xl transition group-hover:opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
