<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const modules = [Autoplay, EffectFade, Navigation]
</script>

<template>
  <section id="home" class="relative w-full">
    <Swiper
      class="hero-swiper min-h-[400px] w-full"
      :modules="modules"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :speed="1200"
      :loop="true"
      :autoplay="{
        delay: 6500,
        disableOnInteraction: false,
      }"
      navigation
    >
      <SwiperSlide v-for="(slide, i) in siteContent.hero.slides" :key="i">
        <div class="relative h-[100svh] min-h-[400px] w-full overflow-hidden">
          <img
            :src="usePublicUrl(`img/${slide.image}`)"
            :alt="slide.alt"
            class="absolute inset-0 h-full w-full object-cover"
            :style="{ objectPosition: slide.objectPosition ?? 'center center' }"
            loading="eager"
            fetchpriority="high"
          />
          <div
            class="absolute inset-0 z-[1] flex flex-col items-center justify-center bg-black/45 px-6 text-center sm:px-10 md:px-4"
          >
            <div class="max-w-[900px] space-y-4 p-3">
              <h1
                class="font-secondary text-4xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
                v-motion
                :initial="{ opacity: 0, y: 24 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 700 } }"
              >
                {{ siteContent.couple.displayName }}
              </h1>
              <div
                class="inline-block border-y border-white/80 px-4 py-3"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { delay: 500, duration: 600 } }"
              >
                <p
                  class="m-0 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base"
                >
                  {{ siteContent.couple.heroTagline }}
                </p>
              </div>
              <p
                v-if="siteContent.couple.heroImpact"
                class="mx-auto mt-6 max-w-2xl text-balance text-sm font-light italic leading-relaxed text-white/95 sm:text-base md:text-lg"
                v-motion
                :initial="{ opacity: 0, y: 12 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 750, duration: 650 } }"
              >
                {{ siteContent.couple.heroImpact }}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
/* Navigation hero : style « glass » + accent au survol (moderne, mariage premium) */
.hero-swiper :deep(.swiper-button-prev),
.hero-swiper :deep(.swiper-button-next) {
  width: 3.25rem;
  height: 3.25rem;
  margin-top: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.38);
  color: #fff;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease,
    opacity 0.2s ease;
}

.hero-swiper :deep(.swiper-button-prev:hover),
.hero-swiper :deep(.swiper-button-next:hover) {
  background: rgba(255, 255, 255, 0.2);
  border-color: color-mix(in srgb, var(--color-primary) 75%, white);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.25),
    0 0 0 1px color-mix(in srgb, var(--color-primary) 45%, transparent),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transform: translateY(-50%) scale(1.05);
}

.hero-swiper :deep(.swiper-button-prev:active),
.hero-swiper :deep(.swiper-button-next:active) {
  transform: translateY(-50%) scale(0.97);
}

.hero-swiper :deep(.swiper-button-prev) {
  left: max(1rem, env(safe-area-inset-left, 0px));
}

.hero-swiper :deep(.swiper-button-next) {
  right: max(1rem, env(safe-area-inset-right, 0px));
}

.hero-swiper :deep(.swiper-button-prev::after),
.hero-swiper :deep(.swiper-button-next::after) {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0;
}

.hero-swiper :deep(.swiper-button-prev.swiper-button-disabled),
.hero-swiper :deep(.swiper-button-next.swiper-button-disabled) {
  opacity: 0.35;
  pointer-events: none;
}

.hero-swiper :deep(.swiper-button-prev:focus-visible),
.hero-swiper :deep(.swiper-button-next:focus-visible) {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

/* Mobile / tablette : en bas, cercles un peu plus compacts */
@media (max-width: 767px) {
  .hero-swiper :deep(.swiper-button-prev),
  .hero-swiper :deep(.swiper-button-next) {
    top: auto;
    bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
    transform: none;
    width: 2.875rem;
    height: 2.875rem;
  }

  .hero-swiper :deep(.swiper-button-prev:hover),
  .hero-swiper :deep(.swiper-button-next:hover) {
    transform: scale(1.06);
  }

  .hero-swiper :deep(.swiper-button-prev:active),
  .hero-swiper :deep(.swiper-button-next:active) {
    transform: scale(0.96);
  }

  .hero-swiper :deep(.swiper-button-prev) {
    left: max(0.75rem, env(safe-area-inset-left, 0px));
  }

  .hero-swiper :deep(.swiper-button-next) {
    right: max(0.75rem, env(safe-area-inset-right, 0px));
  }

  .hero-swiper :deep(.swiper-button-prev::after),
  .hero-swiper :deep(.swiper-button-next::after) {
    font-size: 0.85rem;
  }
}

@media (max-width: 380px) {
  .hero-swiper :deep(.swiper-button-prev),
  .hero-swiper :deep(.swiper-button-next) {
    width: 2.625rem;
    height: 2.625rem;
    bottom: calc(5rem + env(safe-area-inset-bottom, 0px));
  }
}

/* Desktop large : boutons un peu plus présents */
@media (min-width: 1024px) {
  .hero-swiper :deep(.swiper-button-prev),
  .hero-swiper :deep(.swiper-button-next) {
    width: 3.5rem;
    height: 3.5rem;
  }

  .hero-swiper :deep(.swiper-button-prev::after),
  .hero-swiper :deep(.swiper-button-next::after) {
    font-size: 1.05rem;
  }
}

.hero-swiper :deep(.swiper-slide) {
  height: auto;
}
</style>
