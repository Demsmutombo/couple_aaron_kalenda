<script setup>
defineProps({
  visible: { type: Boolean, default: false },
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    v-show="visible"
    type="button"
    class="floating-ui fixed bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded border-2 border-primary bg-white/95 text-primary shadow-lg transition hover:bg-primary hover:text-white dark:bg-slate-900/95 dark:text-primary dark:shadow-black/40 dark:hover:text-white"
    aria-label="Retour en haut"
    @click="emit('click')"
  >
    <i class="fas fa-angle-double-up" />
  </button>
</template>
