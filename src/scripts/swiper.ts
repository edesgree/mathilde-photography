// ─────────────────────────────────────────
// src/scripts/swiper.ts
// All Swiper instances for the site.
// Imported by pages that need them —
// Vite tree-shakes unused modules automatically.
// ─────────────────────────────────────────

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs, Zoom, Keyboard, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

// ── Hero fullscreen slider ────────────────
// Used on: index.astro
export function initHeroSwiper(): void {
  if (!document.querySelector('.hero-swiper')) return;

  new Swiper('.hero-swiper', {
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-swiper .swiper-button-next',
      prevEl: '.hero-swiper .swiper-button-prev',
    },
  });
} 

// ── Gallery thumbs + lightbox ─────────────
// Used on: all portfolio category pages
export function initGallerySwiper(): void {
  if (!document.querySelector('.gallery-thumbs')) return;

  // 1. Thumbnail grid (the visible gallery)
  const thumbsSwiper = new Swiper('.gallery-thumbs', {
    modules: [FreeMode],
    slidesPerView: 'auto',
    spaceBetween: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // 2. Fullscreen lightbox swiper
  const lightboxSwiper = new Swiper('.gallery-lightbox', {
    modules: [Navigation, Thumbs, Zoom, Keyboard],
    loop: false,
    speed: 300,
    zoom: { maxRatio: 3 },
    keyboard: { enabled: true },
    navigation: {
      nextEl: '.gallery-lightbox .swiper-button-next',
      prevEl: '.gallery-lightbox .swiper-button-prev',
    },
    thumbs: { swiper: thumbsSwiper },
  });

  const wrap = document.querySelector<HTMLElement>('.gallery-lightbox-wrap');

  function openLightbox(index: number): void {
    lightboxSwiper.slideTo(index, 0); // 0 = no animation on open
    wrap?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(): void {
    wrap?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Open on thumb click
  document.querySelectorAll('.gallery-thumbs .swiper-slide').forEach((slide, i) => {
    slide.addEventListener('click', () => openLightbox(i));
  });

  // Close button
  document.querySelector('.gallery-lightbox-close')?.addEventListener('click', closeLightbox);

  // Click outside image
  wrap?.addEventListener('click', (e) => {
    if (e.target === wrap) closeLightbox();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
