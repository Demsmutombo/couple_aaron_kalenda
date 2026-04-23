<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
import splashFallbackUrl from '@/assets/splash/fallback.svg?url'

const emit = defineEmits(['dismissed'])

const visible = ref(true)
/** Index dans la liste des fichiers candidats (incrémenté sur @error de l’image) */
const activeCandidateIndex = ref(0)

const progressStyle = computed(() => ({
  '--splash-dur': `${siteContent.splash.minVisibleMs}ms`,
}))

let preloadLinkEl = null

function candidateFiles() {
  const s = siteContent.splash
  if (Array.isArray(s.logoCandidates) && s.logoCandidates.length) {
    return s.logoCandidates
  }
  if (Array.isArray(s.logoFiles) && s.logoFiles.length) {
    return s.logoFiles
  }
  return ['logo.png']
}

/**
 * Chemin relatif à la racine `public/` (ex. `logo.png` → public/logo.png, `img/photo.jpg` → public/img/photo.jpg).
 */
function absoluteImgUrl(publicRelativePath) {
  const path = usePublicUrl(publicRelativePath)
  if (typeof window === 'undefined') return path
  try {
    return new URL(path, window.location.origin).href
  } catch {
    return path
  }
}

const candidateUrls = computed(() => {
  const fromPublic = candidateFiles().map((f) => absoluteImgUrl(f))
  /** Secours si aucun fichier public ne convient */
  return [...fromPublic, splashFallbackUrl]
})

const imgSrc = computed(() => {
  const urls = candidateUrls.value
  if (!urls.length) return ''
  const i = Math.min(activeCandidateIndex.value, urls.length - 1)
  return urls[i] ?? ''
})

function onImgError() {
  const urls = candidateUrls.value
  if (activeCandidateIndex.value < urls.length - 1) {
    activeCandidateIndex.value += 1
  }
}

function finish() {
  document.body.classList.remove('overflow-hidden')
  if (preloadLinkEl?.parentNode) {
    preloadLinkEl.parentNode.removeChild(preloadLinkEl)
    preloadLinkEl = null
  }
  emit('dismissed')
}

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
  if (preloadLinkEl?.parentNode) {
    preloadLinkEl.parentNode.removeChild(preloadLinkEl)
    preloadLinkEl = null
  }
})

function injectPreload(href) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = href
  document.head.appendChild(link)
  return link
}

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

onMounted(async () => {
  document.body.classList.add('overflow-hidden')

  const minWait = new Promise((resolve) => {
    setTimeout(resolve, siteContent.splash.minVisibleMs)
  })

  if (imgSrc.value) {
    preloadLinkEl = injectPreload(imgSrc.value)
  }

  await nextTick()
  await waitForPaint()

  await minWait

  visible.value = false
})
</script>

<template>
  <Teleport to="body">
    <Transition name="splash" @after-leave="finish">
      <div
        v-if="visible"
        class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-gradient-to-b from-brand-dark via-[#0d1528] to-black px-6"
        aria-live="polite"
        aria-busy="true"
      >
        <div class="flex max-w-4xl flex-col items-center px-2 text-center">
          <div
            v-if="imgSrc"
            :key="imgSrc"
            v-motion
            class="splash-logo-wrap flex min-h-[180px] flex-row flex-wrap items-center justify-center sm:min-h-[220px] md:min-h-[260px]"
            :initial="{ opacity: 0, y: 28, scale: 0.88 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 80, duration: 780, ease: [0.22, 1, 0.36, 1] },
            }"
          >
            <img
              :src="imgSrc"
              alt=""
              class="splash-logo-img max-h-48 w-auto max-w-[92vw] object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)] sm:max-h-56 md:max-h-72 lg:max-h-80"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              @error="onImgError"
            />
          </div>
          <p
            class="font-secondary mt-10 max-w-[95vw] text-4xl leading-tight text-white/95 sm:mt-12 sm:text-5xl md:mt-14 md:text-6xl lg:text-7xl"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 320, duration: 720, ease: [0.22, 1, 0.36, 1] },
            }"
          >
            {{ siteContent.couple.displayName }}
          </p>
        </div>
        <div
          class="absolute bottom-10 left-1/2 h-1 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white/10"
          :style="progressStyle"
        >
          <div class="splash-progress h-full w-full origin-left rounded-full bg-primary" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.splash-enter-from,
.splash-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

@keyframes splash-progress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.splash-progress {
  animation: splash-progress var(--splash-dur, 3s) ease-out forwards;
}

/* Léger flottement du logo pendant l’affichage du splash */
.splash-logo-img {
  animation: splash-logo-float 2.6s ease-in-out infinite alternate;
}

@keyframes splash-logo-float {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-10px) scale(1.035);
  }
}

@media (prefers-reduced-motion: reduce) {
  .splash-logo-img {
    animation: none;
  }
}
</style>
