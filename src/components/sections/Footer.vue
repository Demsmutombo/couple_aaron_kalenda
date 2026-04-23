<script setup>
import { siteContent } from '@/content'
</script>

<template>
  <footer id="contact" class="mt-20 bg-brand-dark py-16 text-white">
    <div class="mx-auto max-w-4xl px-4 py-8 text-center">
      <div class="section-title">
        <h2
          v-if="siteContent.footer.title"
          class="font-secondary text-4xl text-white md:text-6xl"
        >
          {{ siteContent.footer.title }}
        </h2>
        <i
          v-if="siteContent.footer.title"
          class="far fa-heart mt-2 text-gold"
          aria-hidden="true"
        />
        <i
          v-if="!siteContent.footer.title && siteContent.footer.quote"
          class="far fa-heart mb-4 text-2xl text-gold"
          aria-hidden="true"
        />
        <blockquote
          v-if="siteContent.footer.quote"
          class="mx-auto mt-6 max-w-2xl text-balance text-lg font-light italic text-white/95 md:text-xl"
        >
          “{{ siteContent.footer.quote }}”
        </blockquote>
        <p
          v-if="siteContent.footer.quotePremium"
          class="mx-auto mt-4 max-w-2xl text-sm text-primary/90 md:text-base"
        >
          {{ siteContent.footer.quotePremium }}
        </p>
      </div>

      <div
        class="mt-8 flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:text-base"
      >
        <div>
          {{ siteContent.footer.creditLabel }}
          <a
            :href="siteContent.footer.creditUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold text-primary"
          >
            {{ siteContent.footer.creditName }}
          </a>
        </div>
        <span class="hidden text-white/40 sm:inline">|</span>
        <div class="flex items-center justify-center">
          <a
            :href="siteContent.footer.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 text-2xl text-green-400 transition hover:bg-green-500 hover:text-white"
            :aria-label="siteContent.footer.whatsappAriaLabel"
            :title="siteContent.footer.whatsappAriaLabel"
          >
            <i class="fab fa-whatsapp" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p class="mt-8 text-sm text-white/80">
        &copy;
        <a
          class="text-primary hover:underline"
          :href="siteContent.footer.copyrightCoupleHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ siteContent.footer.copyrightLabel }}
        </a>
      </p>
    </div>
  </footer>
</template>
