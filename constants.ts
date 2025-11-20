import { Artwork, ArtistProfile } from './types';

export const ARTIST_PROFILE: ArtistProfile = {
  name: "Yuki Tanaka",
  title: "Digital Illustrator & Concept Artist",
  bio: "東京を拠点に活動するイラストレーター。ファンタジーとサイバーパンクの融合をテーマに、物語性のある作品を描いています。ゲームのコンセプトアートや書籍の装画などを手がけています。",
  commissionStatus: "Open",
  email: "contact@yukiart.example.com",
  socials: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  }
};

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: "Neon Rain",
    description: "A cyberpunk cityscape reflecting in puddles under heavy rain.",
    imageUrl: "https://picsum.photos/id/10/800/600",
    category: "Landscape",
    year: 2024
  },
  {
    id: '2',
    title: "The Guardian",
    description: "Character design for an unannounced RPG project.",
    imageUrl: "https://picsum.photos/id/237/600/800",
    category: "Character",
    year: 2023
  },
  {
    id: '3',
    title: "Floating Islands",
    description: "Concept art exploring atmospheric perspective.",
    imageUrl: "https://picsum.photos/id/1015/800/500",
    category: "Landscape",
    year: 2024
  },
  {
    id: '4',
    title: "Mechanical Heart",
    description: "Detailed sketch of a robotic core.",
    imageUrl: "https://picsum.photos/id/1016/600/600",
    category: "Sketch",
    year: 2023
  },
  {
    id: '5',
    title: "Summer Silence",
    description: "Book cover illustration for a slice-of-life novel.",
    imageUrl: "https://picsum.photos/id/1018/800/1000",
    category: "Commercial",
    year: 2022
  },
  {
    id: '6',
    title: "Deep Dive",
    description: "Personal work focusing on underwater lighting.",
    imageUrl: "https://picsum.photos/id/1019/800/600",
    category: "Landscape",
    year: 2024
  },
];