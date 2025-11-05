import React from 'react';
import { ArrowRight, Leaf, Award, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-sm text-emerald-700 shadow-sm backdrop-blur">
              <Leaf className="h-4 w-4" />
              Sustainable Pulp & Paper
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Building a cleaner future with responsible fiber
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              We manufacture high‑quality pulp and paper products with a deep commitment to
              sustainability, safety, and innovation across the value chain.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:border-gray-300"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Award className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">ISO Certified</p>
                  <p className="text-xs text-gray-500">Quality & Environment</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Shield className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Safety First</p>
                  <p className="text-xs text-gray-500">Zero harm culture</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:col-span-1 col-span-2">
                <Leaf className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Low Carbon</p>
                  <p className="text-xs text-gray-500">Net‑zero 2050 roadmap</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
                alt="Sustainable pulp & paper"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
