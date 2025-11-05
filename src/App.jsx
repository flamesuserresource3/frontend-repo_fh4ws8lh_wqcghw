import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import AcaciaTree from './components/AcaciaTree';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-md bg-emerald-600" />
            <span className="text-sm font-semibold tracking-wide text-gray-900">GreenFiber</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#acacia" className="hover:text-gray-900">Akasia</a>
            <a href="#sustainability" className="hover:text-gray-900">Sustainability</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        <Hero />
        <Products />
        <AcaciaTree />
        <Sustainability />

        {/* Contact */}
        <section id="contact" className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-gray-600">Have a question or need a quote? Send us a message.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 sm:col-span-2"
              />
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <button className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-gray-600 lg:px-8">
          <p>© {new Date().getFullYear()} GreenFiber. All rights reserved.</p>
          <div className="hidden gap-6 sm:flex">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
