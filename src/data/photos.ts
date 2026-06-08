// ─────────────────────────────────────────
// src/data/photos.ts
// Single source of truth for all image data.
// Update this file whenever you add/remove photos.
// ─────────────────────────────────────────

// ── Types ──────────────────────────────────

export interface Photo {
  src: string;      // full-size image (used in lightbox)
  thumb: string;    // thumbnail (used in gallery grid)
  alt: string;
  width?: number;   // thumb width  — set these to avoid layout shift
  height?: number;  // thumb height — set these to avoid layout shift
}

export interface Category {
  label: string;
  href: string;
  src: string;      // cover image shown on /portfolio and homepage
}

export interface HeroSlide {
  src: string;
  alt: string;
}

export type CategoryKey = 'portraits' | 'fashion' | 'travels' | 'architectures' | 'landscapes';


// ── Hero slides ────────────────────────────
// Full-screen images on the homepage slider.
// Landscape orientation recommended, ~2400×1400px.

export const heroSlides: HeroSlide[] = [
  { src: '/images/hero/hero-0.webp', alt: 'Portrait photography'},
  { src: '/images/hero/hero-1.webp', alt: 'Portrait photography by Mathilde Godard' },
  { src: '/images/hero/hero-2.webp', alt: 'Fashion photography' },
  { src: '/images/hero/hero-3.webp', alt: 'Travel photography' },
  { src: '/images/hero/hero-4.webp', alt: 'Architecture photography' },
  { src: '/images/hero/hero-5.webp', alt: 'Architecture photography' },
  { src: '/images/hero/hero-6.webp', alt: 'Architecture photography' },
  { src: '/images/hero/hero-7.webp', alt: 'Architecture photography' }
]; 


// ── Categories ─────────────────────────────
// Shown on /portfolio index and homepage category grid.
// Cover images: portrait ratio recommended, ~800×1000px.

export const categories: Category[] = [
  { label: 'Portraits',     href: '/portfolio/portraits',     src: '/images/covers/portraits.webp'     },
  { label: 'Fashion',       href: '/portfolio/fashion',       src: '/images/covers/fashion.webp'       },
  { label: 'Travels',       href: '/portfolio/travels',       src: '/images/covers/travels.webp'       },
  { label: 'Architectures', href: '/portfolio/architectures', src: '/images/covers/architectures.webp' },
  { label: 'Landscapes',    href: '/portfolio/landscapes',    src: '/images/covers/landscapes.webp'    },
];



// ── Gallery photos ─────────────────────────
// One array per category.
// - src:    full-size image shown in lightbox
// - thumb:  smaller image shown in the grid
// - width/height: dimensions of the THUMB (prevents layout shift)

export const photos: Record<CategoryKey, Photo[]> = {

  portraits: [
    { src: '/images/portraits/photo-01.webp', thumb: '/images/portraits/thumbs/photo-01.webp', alt: 'Portrait — Cassandra plage', width: 1200, height: 900 },
    { src: '/images/portraits/photo-02.webp', thumb: '/images/portraits/thumbs/photo-02.webp', alt: 'Portrait — Will studio',     width: 1200, height: 900 },
    { src: '/images/portraits/photo-03.webp', thumb: '/images/portraits/thumbs/photo-03.webp', alt: 'Portrait',                   width: 1200, height: 900 },
    { src: '/images/portraits/photo-04.webp', thumb: '/images/portraits/thumbs/photo-04.webp', alt: 'Portrait — Cassandra plage', width: 1200, height: 900 },
    { src: '/images/portraits/photo-05.webp', thumb: '/images/portraits/thumbs/photo-05.webp', alt: 'Portrait — Will studio',     width: 1200, height: 900 },
    { src: '/images/portraits/photo-06.webp', thumb: '/images/portraits/thumbs/photo-06.webp', alt: 'Portrait',                   width: 1200, height: 900 },
    { src: '/images/portraits/photo-07.webp', thumb: '/images/portraits/thumbs/photo-07.webp', alt: 'Portrait — Cassandra plage', width: 1200, height: 900 }
  ],

  fashion: [
  { src: '/images/fashion/photo-01.webp', thumb: '/images/fashion/thumbs/photo-01.webp', alt: 'fashion 01', width: 1200, height: 900 },
  { src: '/images/fashion/photo-02.webp', thumb: '/images/fashion/thumbs/photo-02.webp', alt: 'fashion 02', width: 1200, height: 900 },
  { src: '/images/fashion/photo-03.webp', thumb: '/images/fashion/thumbs/photo-03.webp', alt: 'fashion 03', width: 1200, height: 900 },
  { src: '/images/fashion/photo-04.webp', thumb: '/images/fashion/thumbs/photo-04.webp', alt: 'fashion 04', width: 1200, height: 900 },
  { src: '/images/fashion/photo-05.webp', thumb: '/images/fashion/thumbs/photo-05.webp', alt: 'fashion 05', width: 1200, height: 900 },
  { src: '/images/fashion/photo-06.webp', thumb: '/images/fashion/thumbs/photo-06.webp', alt: 'fashion 06', width: 1200, height: 900 },
  { src: '/images/fashion/photo-07.webp', thumb: '/images/fashion/thumbs/photo-07.webp', alt: 'fashion 07', width: 1200, height: 900 },
  { src: '/images/fashion/photo-08.webp', thumb: '/images/fashion/thumbs/photo-08.webp', alt: 'fashion 08', width: 1200, height: 900 },
  { src: '/images/fashion/photo-09.webp', thumb: '/images/fashion/thumbs/photo-09.webp', alt: 'fashion 09', width: 1200, height: 900 },
  { src: '/images/fashion/photo-10.webp', thumb: '/images/fashion/thumbs/photo-10.webp', alt: 'fashion 10', width: 1200, height: 900 },
  { src: '/images/fashion/photo-11.webp', thumb: '/images/fashion/thumbs/photo-11.webp', alt: 'fashion 11', width: 1200, height: 900 },
  { src: '/images/fashion/photo-12.webp', thumb: '/images/fashion/thumbs/photo-12.webp', alt: 'fashion 12', width: 1200, height: 900 },
  { src: '/images/fashion/photo-13.webp', thumb: '/images/fashion/thumbs/photo-13.webp', alt: 'fashion 13', width: 1200, height: 900 },
  { src: '/images/fashion/photo-14.webp', thumb: '/images/fashion/thumbs/photo-14.webp', alt: 'fashion 14', width: 1200, height: 900 }
  ],

  travels: [
    { src: '/images/travels/photo-01.webp', thumb: '/images/travels/thumbs/photo-01.webp', alt: 'travels 01', width: 1200, height: 900 },
  { src: '/images/travels/photo-02.webp', thumb: '/images/travels/thumbs/photo-02.webp', alt: 'travels 02', width: 1200, height: 900 },
  { src: '/images/travels/photo-03.webp', thumb: '/images/travels/thumbs/photo-03.webp', alt: 'travels 03', width: 1200, height: 900 },
  { src: '/images/travels/photo-04.webp', thumb: '/images/travels/thumbs/photo-04.webp', alt: 'travels 04', width: 1200, height: 900 },
  { src: '/images/travels/photo-05.webp', thumb: '/images/travels/thumbs/photo-05.webp', alt: 'travels 05', width: 1200, height: 900 },
  { src: '/images/travels/photo-06.webp', thumb: '/images/travels/thumbs/photo-06.webp', alt: 'travels 06', width: 1200, height: 900 },
  { src: '/images/travels/photo-07.webp', thumb: '/images/travels/thumbs/photo-07.webp', alt: 'travels 07', width: 1200, height: 900 },
  { src: '/images/travels/photo-08.webp', thumb: '/images/travels/thumbs/photo-08.webp', alt: 'travels 08', width: 1200, height: 900 }
  ],
  architectures: [
      { src: '/images/architectures/photo-01.webp', thumb:'/images/architectures/thumbs/photo-01.webp', alt: 'architectures 01', width: 1200, height: 900 },
  { src: '/images/architectures/photo-02.webp', thumb:'/images/architectures/thumbs/photo-02.webp', alt: 'architectures 02', width: 1200, height: 900 },
  { src: '/images/architectures/photo-03.webp', thumb:'/images/architectures/thumbs/photo-03.webp', alt: 'architectures 03', width: 1200, height: 900 },
  { src: '/images/architectures/photo-04.webp', thumb:'/images/architectures/thumbs/photo-04.webp', alt: 'architectures 04', width: 1200, height: 900 },
  { src: '/images/architectures/photo-05.webp', thumb:'/images/architectures/thumbs/photo-05.webp', alt: 'architectures 05', width: 1200, height: 900 },
  { src: '/images/architectures/photo-06.webp', thumb:'/images/architectures/thumbs/photo-06.webp', alt: 'architectures 06', width: 1200, height: 900 },
  { src: '/images/architectures/photo-07.webp', thumb:'/images/architectures/thumbs/photo-07.webp', alt: 'architectures 07', width: 1200, height: 900 },
  { src: '/images/architectures/photo-08.webp', thumb:'/images/architectures/thumbs/photo-08.webp', alt: 'architectures 08', width: 1200, height: 900 }

  ],
  landscapes: [
      { src: '/images/landscapes/photo-01.webp', thumb: '/images/landscapes/thumbs/photo-01.webp', alt: 'landscapes 01', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-02.webp', thumb: '/images/landscapes/thumbs/photo-02.webp', alt: 'landscapes 02', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-03.webp', thumb: '/images/landscapes/thumbs/photo-03.webp', alt: 'landscapes 03', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-04.webp', thumb: '/images/landscapes/thumbs/photo-04.webp', alt: 'landscapes 04', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-05.webp', thumb: '/images/landscapes/thumbs/photo-05.webp', alt: 'landscapes 05', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-06.webp', thumb: '/images/landscapes/thumbs/photo-06.webp', alt: 'landscapes 06', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-07.webp', thumb: '/images/landscapes/thumbs/photo-07.webp', alt: 'landscapes 07', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-08.webp', thumb: '/images/landscapes/thumbs/photo-08.webp', alt: 'landscapes 08', width: 1200, height: 900 },
  { src: '/images/landscapes/photo-09.webp', thumb: '/images/landscapes/thumbs/photo-09.webp', alt: 'landscapes 09', width: 1200, height: 900 }
  ]
};

