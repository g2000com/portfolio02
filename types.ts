export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Character' | 'Landscape' | 'Sketch' | 'Commercial';
  year: number;
  width?: number; // For masonry layout calculations if needed
  height?: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface ArtistProfile {
  name: string;
  title: string;
  bio: string;
  commissionStatus: 'Open' | 'Closed' | 'Waitlist';
  email: string;
  socials: {
    twitter?: string;
    instagram?: string;
    pixiv?: string;
  }
}