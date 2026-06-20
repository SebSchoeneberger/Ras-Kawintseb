export interface Release {
  id: string;
  title: string;
  subtitle: string;       // e.g. "Second Album · 2024"
  youtubeUrl: string;
  spotifyUrl: string;
  description: string;
}

export interface Performance {
  year: number;
  title: string;
  location?: string;
  date?: string;
  note?: string;          // short context hint shown under the show
  isFeatured?: boolean;   // true → large gold dot (most recent highlight)
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'live' | 'portrait' | 'bts';
}
