<script setup>
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
</script>

<template>
  <section id="story" class="bg-white py-16 dark:bg-slate-950 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 pt-8 pb-6 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.story.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
          {{ siteContent.story.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-gold" aria-hidden="true" />
      </div>

      <div class="timeline-line container relative p-0">
        <div
          v-for="(item, index) in siteContent.story.items"
          :key="index"
          class="timeline-row flex flex-col md:flex-row"
          v-motion
          :initial="{ opacity: 0, y: 36 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 80 } }"
        >
          <template v-if="item.imageSide === 'left'">
            <div class="w-full p-2 text-center md:w-1/2 md:pr-4 md:text-right">
              <img
                :src="usePublicUrl(`img/${item.image}`)"
                :alt="item.imageAlt"
                class="mx-auto inline-block max-h-[420px] max-w-full rounded object-cover md:mr-3 md:ml-auto"
                loading="lazy"
              />
            </div>
            <div class="w-full p-2 md:w-1/2 md:pl-4 md:text-left">
              <div class="flex min-h-[200px] flex-col justify-center bg-secondary p-6 dark:bg-slate-900/75 md:ml-3">
                <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-slate-100">{{ item.title }}</h4>
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {{ item.date }}
                </p>
                <p
                  class="m-0 text-sm leading-relaxed text-brand-dark/85 dark:text-slate-300"
                  v-html="item.html"
                />
              </div>
            </div>
          </template>
          <template v-else>
            <div class="order-2 w-full p-2 text-center md:order-1 md:w-1/2 md:pr-4 md:text-right">
              <div class="flex min-h-[200px] flex-col justify-center bg-secondary p-6 dark:bg-slate-900/75 md:mr-3">
                <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-slate-100">{{ item.title }}</h4>
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {{ item.date }}
                </p>
                <p
                  class="m-0 text-sm leading-relaxed text-brand-dark/85 dark:text-slate-300"
                  v-html="item.html"
                />
              </div>
            </div>
            <div
              class="order-1 w-full p-2 text-center md:order-2 md:w-1/2 md:pl-4 md:text-left"
            >
              <img
                :src="usePublicUrl(`img/${item.image}`)"
                :alt="item.imageAlt"
                class="mx-auto inline-block max-h-[420px] max-w-full rounded object-cover md:ml-3 md:mr-auto"
                loading="lazy"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
