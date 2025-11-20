import React from 'react';
import { ARTIST_PROFILE } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="max-w-3xl z-10 animate-fade-in-up">
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-500 mb-4">
          {ARTIST_PROFILE.title}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-ink mb-8 leading-tight">
          Imagination <br />
          <span className="italic font-normal text-gray-600">Realized.</span>
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mb-12 leading-relaxed">
          {ARTIST_PROFILE.bio.substring(0, 50)}...
        </p>
        <a 
          href="#gallery"
          className="inline-block border border-ink text-ink px-8 py-3 text-sm uppercase tracking-widest hover:bg-ink hover:text-white transition-all duration-300"
        >
          View Portfolio
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>

      {/* Abstract background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
    </section>
  );
};

export default Hero;