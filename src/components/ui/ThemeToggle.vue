<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { preference, setPreference } = useTheme()

function toggleTheme() {
  setPreference(preference.value === 'light' ? 'dark' : 'light')
}

const iconClass = computed(() =>
  preference.value === 'light' ? 'fas fa-sun' : 'fas fa-moon',
)

const modeLabel = computed(() => (preference.value === 'light' ? 'Clair' : 'Sombre'))

const buttonTitle = computed(() => {
  const next = preference.value === 'light' ? 'sombre' : 'clair'
  return `Thème ${modeLabel.value.toLowerCase()}. Clic : passer au thème ${next}.`
})
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-lg text-primary shadow-sm backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/15 hover:shadow-md dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15"
    :title="buttonTitle"
    :aria-label="`Thème : ${modeLabel}. Appuyer pour basculer entre clair et sombre.`"
    @click="toggleTheme"
  >
    <i :class="iconClass" aria-hidden="true" />
  </button>
</template>
