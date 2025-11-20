import React from 'react';
import { Artwork } from '../types';
import { X } from 'lucide-react';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 p-2 text-gray-500 hover:text-ink transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <div 
        className="flex flex-col lg:flex-row max-w-6xl w-full h-full max-h-[90vh] bg-white shadow-2xl overflow-hidden rounded-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="w-full lg:w-2/3 h-1/2 lg:h-full bg-gray-100 relative">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Info Container */}
        <div className="w-full lg:w-1/3 h-1/2 lg:h-full p-8 lg:p-12 flex flex-col justify-center overflow-y-auto bg-white">
          <div className="mb-2">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              {artwork.category}
            </span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-ink mb-4">{artwork.title}</h2>
          <p className="text-gray-500 mb-8 text-sm font-mono">Created in {artwork.year}</p>
          
          <div className="prose prose-sm text-gray-600 leading-relaxed mb-8">
            <p>{artwork.description}</p>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Availability</p>
            <p className="text-sm font-medium text-ink">Available for Prints</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;