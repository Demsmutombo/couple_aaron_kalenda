<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  /** URL absolue ou chemin /img/... pour fichier vidéo */
  src: { type: String, default: '' },
})

const emit = defineEmits(['close'])

const isYoutube = computed(() => /youtube\.com|youtu\.be/.test(props.src))

const youtubeEmbed = computed(() => {
  if (!props.src) return ''
  try {
    const u = new URL(props.src, 'https://www.youtube.com')
    let id = u.searchParams.get('v')
    if (!id && u.hostname.includes('youtu.be')) {
      id = u.pathname.replace('/', '')
    }
    if (!id) return ''
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
  } catch {
    return ''
  }
})

const videoSrc = computed(() => props.src)

watch(
  () => props.open,
  (v) => {
    document.body.classList.toggle('overflow-hidden', v)
  },
)

function close() {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        @click.self="close"
        @keydown.escape="close"
      >
        <div class="relative w-full max-w-3xl rounded-lg bg-brand-dark shadow-2xl">
          <div class="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <h2 id="video-modal-title" class="text-lg font-semibold text-white">
              Lecture Vidéo
            </h2>
            <button
              type="button"
              class="rounded p-2 text-2xl leading-none text-white transition hover:bg-white/10"
              aria-label="Fermer"
              @click="close"
            >
              &times;
            </button>
          </div>
          <div class="aspect-video w-full bg-black">
            <iframe
              v-if="open && isYoutube"
              :key="youtubeEmbed"
              :src="youtubeEmbed"
              class="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Vidéo YouTube"
            />
            <video
              v-else-if="open && videoSrc"
              :key="videoSrc"
              class="h-full w-full object-contain"
              controls
              autoplay
              playsinline
            >
              <source :src="videoSrc" />
            </video>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
