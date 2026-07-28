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
  startDate?: string;     // ISO date (YYYY-MM-DD) — set on upcoming shows (with
                          // location) to list them in Google event results;
                          // ignored automatically once the date passes
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'live' | 'portrait' | 'bts';
}
