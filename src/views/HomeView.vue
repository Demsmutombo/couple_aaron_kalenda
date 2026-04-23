<script setup>
import { onMounted } from 'vue'
import WeddingNavbar from '@/components/layout/WeddingNavbar.vue'
import HeroCarousel from '@/components/sections/HeroCarousel.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import StoryTimeline from '@/components/sections/StoryTimeline.vue'
import Gallery from '@/components/sections/Gallery.vue'
import EventSection from '@/components/sections/EventSection.vue'
import FamilySection from '@/components/sections/FamilySection.vue'
import RSVPSection from '@/components/sections/RSVPSection.vue'
import Footer from '@/components/sections/Footer.vue'
import ScrollExploreHint from '@/components/ui/ScrollExploreHint.vue'
import BackToTopFab from '@/components/ui/BackToTopFab.vue'
import MusicFab from '@/components/ui/MusicFab.vue'
import { siteContent } from '@/content'
import { useScrollChrome } from '@/composables/useScrollChrome.js'

const { showScrollHint, showBackTop, scrollToTop } = useScrollChrome()

onMounted(() => {
  document.title = siteContent.meta.title
  document.documentElement.lang = siteContent.meta.htmlLang
})
</script>

<template>
  <div class="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-950">
    <WeddingNavbar />
    <main>
      <HeroCarousel />
      <AboutSection />
      <StoryTimeline />
      <Gallery />
      <FamilySection />
      <EventSection />
      <RSVPSection />
      <Footer />
    </main>

    <ScrollExploreHint :visible="showScrollHint" />
    <MusicFab />
    <BackToTopFab :visible="showBackTop" @click="scrollToTop" />
  </div>
</template>
