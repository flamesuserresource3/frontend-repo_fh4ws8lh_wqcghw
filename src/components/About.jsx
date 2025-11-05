import React from 'react';
import { Users, Award, Factory } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-gray-600">
            We are a vertically integrated pulp & paper company delivering reliable quality at scale. 
            Our operations prioritize forest stewardship, circularity, and community prosperity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Factory className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Integrated Mills</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Strategically located mills with efficient energy systems ensure consistent supply and reduced emissions.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">People First</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              A culture of safety, learning, and inclusion empowers our teams to innovate responsibly.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-gray-900">Recognized Quality</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Global certifications and customer trust built on consistent product performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
