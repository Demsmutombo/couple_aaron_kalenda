<script setup>
import { siteContent } from '@/content'
</script>

<template>
  <section id="rsvp" class="bg-secondary/40 py-16 dark:bg-slate-900/45 lg:py-20">
    <div class="section-title px-4">
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {{ siteContent.rsvp.sectionKicker }}
      </p>
      <i class="far fa-heart text-gold" aria-hidden="true" />
      <h2 class="font-secondary mt-2 text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
        {{ siteContent.rsvp.sectionTitle }}
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-sm text-brand-dark/70 dark:text-slate-400 md:text-base">
        {{ siteContent.rsvp.intro }}
      </p>
    </div>

    <div class="mx-auto max-w-7xl px-4 py-8 text-center lg:px-6">
      <div
        v-if="siteContent.rsvp.contactIntro"
        class="mb-6 text-sm text-brand-dark/75 dark:text-slate-400 md:text-base"
      >
        {{ siteContent.rsvp.contactIntro }}
      </div>
      <div class="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a
          v-if="siteContent.rsvp.telHref"
          :href="siteContent.rsvp.telHref"
          class="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark/90 transition hover:text-primary dark:text-slate-200"
        >
          <i class="fas fa-phone text-primary" aria-hidden="true" />
          {{ siteContent.rsvp.telLabel }}
        </a>
        <a
          :href="siteContent.rsvp.whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary text-3xl text-primary transition hover:bg-primary hover:text-white dark:hover:text-white"
          :aria-label="siteContent.rsvp.whatsappAriaLabel"
          :title="siteContent.rsvp.whatsappAriaLabel"
        >
          <i class="fab fa-whatsapp" aria-hidden="true" />
        </a>
        <a
          :href="siteContent.rsvp.emailHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block border-2 border-primary px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white dark:hover:text-white"
        >
          {{ siteContent.rsvp.emailLabel }}
        </a>
      </div>
    </div>
  </section>
</template>
