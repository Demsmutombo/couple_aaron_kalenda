<script setup>
import { ref } from 'vue'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
import VideoModal from '@/components/ui/VideoModal.vue'

const videoOpen = ref(false)
const videoSrc = ref('')

function openLocalVideo() {
  videoSrc.value = usePublicUrl(`img/${siteContent.about.videoFile}`)
  videoOpen.value = true
}

function closeVideo() {
  videoOpen.value = false
  videoSrc.value = ''
}
</script>

<template>
  <section id="about" class="bg-white py-16 dark:bg-slate-950 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.about.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
          {{ siteContent.about.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-gold" aria-hidden="true" />
      </div>

      <div class="mb-10 flex flex-col md:mb-0 md:flex-row">
        <div
          class="order-2 flex min-h-[320px] flex-1 flex-col justify-center bg-secondary p-8 text-center dark:bg-slate-900/75 md:order-1 md:text-right"
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 550 } }"
        >
          <h3 class="mb-3 text-xl font-semibold text-brand-dark dark:text-slate-100">
            {{ siteContent.about.groom.title }}
          </h3>
          <p
            class="text-sm leading-relaxed text-brand-dark/80 dark:text-slate-300 md:text-base"
            v-html="siteContent.about.groom.html"
          />
          <h3
            class="font-secondary mt-4 text-2xl font-normal text-brand-dark/60 dark:text-slate-400 md:text-3xl"
          >
            <i class="fas fa-male mr-3 text-gold" aria-hidden="true" />
            {{ siteContent.about.groom.signature }}
          </h3>
        </div>
        <div
          class="relative order-1 min-h-[400px] flex-1 overflow-hidden md:order-2 md:min-h-[600px]"
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 550 } }"
        >
          <img
            :src="usePublicUrl(`img/${siteContent.about.groom.image}`)"
            :alt="siteContent.about.groom.signature"
            class="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row">
        <div
          class="relative min-h-[400px] flex-1 overflow-hidden md:min-h-[650px]"
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 550 } }"
        >
          <img
            :src="usePublicUrl(`img/${siteContent.about.bride.image}`)"
            :alt="siteContent.about.bride.signature"
            class="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div
          class="flex flex-1 flex-col justify-center bg-secondary p-8 text-center dark:bg-slate-900/75 md:text-left"
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 550 } }"
        >
          <h3 class="mb-3 text-xl font-semibold text-brand-dark dark:text-slate-100">
            {{ siteContent.about.bride.title }}
          </h3>
          <p
            class="text-sm leading-relaxed text-brand-dark/80 dark:text-slate-300 md:text-base"
            v-html="siteContent.about.bride.html"
          />
          <h3
            class="font-secondary mt-4 text-2xl font-normal text-brand-dark/60 dark:text-slate-400 md:text-3xl"
          >
            <i class="fas fa-female mr-3 text-gold" aria-hidden="true" />
            {{ siteContent.about.bride.signature }}
          </h3>
          <div
            v-if="siteContent.about.videoFile"
            class="relative mt-6 flex justify-center md:justify-start"
          >
            <button type="button" class="btn-play" aria-label="Lire la vidéo" @click="openLocalVideo">
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>

    <VideoModal :open="videoOpen" :src="videoSrc" @close="closeVideo" />
  </section>
</template>
