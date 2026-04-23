<script setup>
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
</script>

<template>
  <section id="event" class="bg-white py-16 dark:bg-slate-950 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.events.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
          {{ siteContent.events.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-gold" aria-hidden="true" />
      </div>

      <div class="mx-auto mb-12 max-w-3xl text-center">
        <p class="text-sm font-normal leading-relaxed text-brand-dark/70 dark:text-slate-400 md:text-base">
          {{ siteContent.events.intro }}
        </p>
      </div>

      <div class="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        <article
          v-for="(ev, i) in siteContent.events.items"
          :key="i"
          class="border-primary/30 text-center dark:border-primary/40 md:border-r md:pr-8 md:text-right"
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 550, delay: i * 60 } }"
        >
          <div class="mb-4 overflow-hidden rounded shadow-sm dark:shadow-black/40">
            <img
              :src="usePublicUrl(`img/${ev.image}`)"
              alt=""
              class="mx-auto max-h-[420px] w-full object-cover md:ml-auto md:mr-0"
              loading="lazy"
            />
          </div>
          <h2 class="mb-1 text-xl font-semibold text-brand-dark dark:text-slate-100 md:text-2xl">
            {{ ev.title }}
          </h2>
          <p
            v-if="ev.dateLabel"
            class="mb-3 text-xs font-semibold uppercase tracking-wide text-primary"
          >
            {{ ev.dateLabel }}
          </p>
          <div
            class="space-y-3 text-sm leading-relaxed text-brand-dark/85 dark:text-slate-300 md:text-base [&_strong]:text-brand-dark dark:[&_strong]:text-slate-100"
            v-html="ev.html"
          />
          <div v-if="ev.videoUrl" class="mt-4">
            <a
              :href="ev.videoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block border-2 border-primary px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white dark:hover:text-white"
            >
              Voir la vidéo
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
