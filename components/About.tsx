import React from 'react';
import { ARTIST_PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
             {/* Artistic arrangement of placeholder images */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img 
                src="https://picsum.photos/id/338/600/800" 
                alt="Artist Workspace" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-ink/20 rounded-lg z-0"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-serif font-bold text-ink mb-6">About the Artist</h2>
            <h3 className="text-xl text-gray-500 mb-8 font-light">{ARTIST_PROFILE.name}</h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{ARTIST_PROFILE.bio}</p>
              <p>
                My work focuses on the intersection of traditional aesthetics and modern digital techniques.
                I strive to create worlds that feel both familiar and impossibly distant.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <span className="block text-2xl font-bold text-accent mb-1">5+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</span>
              </div>
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <span className="block text-2xl font-bold text-accent mb-1">50+</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;