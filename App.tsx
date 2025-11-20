import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import ArtworkModal from './components/ArtworkModal';
import AIChat from './components/AIChat';
import { Artwork } from './types';

const App: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-accent selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Gallery onArtworkSelect={setSelectedArtwork} />
        <About />
        <Contact />
      </main>

      <footer className="bg-ink text-white py-12 text-center">
        <p className="font-serif text-xl mb-4">YUKI.</p>
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Yuki Tanaka. All Rights Reserved.
        </p>
      </footer>

      <ArtworkModal 
        artwork={selectedArtwork} 
        onClose={() => setSelectedArtwork(null)} 
      />
      
      <AIChat />
    </div>
  );
};

export default App;