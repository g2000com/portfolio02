import React from 'react';
import { ARTIST_PROFILE } from '../constants';
import { Mail, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-serif font-bold text-ink mb-4">Let's Create Together</h2>
        <p className="text-gray-500 mb-12">
          Commission status: <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded ml-2">{ARTIST_PROFILE.commissionStatus}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              Interested in commissioning a piece or collaborating on a project? 
              Please fill out the form or send an email directly. I usually respond within 2-3 business days.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a href={`mailto:${ARTIST_PROFILE.email}`} className="flex items-center text-ink hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-indigo-50 transition-colors">
                  <Mail size={18} />
                </div>
                <span>{ARTIST_PROFILE.email}</span>
              </a>
              <a href={ARTIST_PROFILE.socials.twitter} className="flex items-center text-ink hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-indigo-50 transition-colors">
                  <Twitter size={18} />
                </div>
                <span>@yuki_art</span>
              </a>
              <a href={ARTIST_PROFILE.socials.instagram} className="flex items-center text-ink hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-indigo-50 transition-colors">
                  <Instagram size={18} />
                </div>
                <span>@yuki_grams</span>
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-paper border border-gray-200 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-paper border border-gray-200 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-paper border border-gray-200 p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-ink text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;