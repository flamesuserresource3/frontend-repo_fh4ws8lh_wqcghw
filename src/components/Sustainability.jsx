import React from 'react';
import { Recycle, Droplets, Leaf } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="sustainability" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Sustainability</h2>
          <p className="mt-4 text-gray-600">
            Circular systems reduce waste and emissions while protecting natural resources.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Recycle className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Fiber Circularity</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Closed-loop fiber recovery and residue valorization to minimize landfill.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Droplets className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Water Stewardship</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Advanced treatment, recycling, and monitoring ensure responsible water use.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Leaf className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Low-Carbon Energy</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Biomass boilers and energy efficiency projects cut scope 1 & 2 emissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
