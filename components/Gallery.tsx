import React, { useState } from 'react';
import { ARTWORKS } from '../constants';
import { Artwork } from '../types';
import { Maximize2 } from 'lucide-react';

interface GalleryProps {
  onArtworkSelect: (artwork: Artwork) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onArtworkSelect }) => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(ARTWORKS.map(a => a.category)))];

  const filteredArtworks = filter === 'All' 
    ? ARTWORKS 
    : ARTWORKS.filter(a => a.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-4xl font-serif font-bold text-ink">Selected Works</h2>
          
          <div className="flex space-x-6 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-colors whitespace-nowrap ${
                  filter === cat ? 'border-accent text-ink' : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => (
            <div 
              key={art.id} 
              className="group relative cursor-pointer overflow-hidden rounded-sm aspect-[3/4] bg-gray-100"
              onClick={() => onArtworkSelect(art)}
            >
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                <h3 className="text-white font-serif text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {art.title}
                </h3>
                <p className="text-gray-200 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {art.category} — {art.year}
                </p>
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;