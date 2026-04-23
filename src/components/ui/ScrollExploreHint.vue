<script setup>
defineProps({
  visible: { type: Boolean, default: true },
})
</script>

<template>
  <button
    v-show="visible"
    type="button"
    class="floating-ui pointer-events-none fixed bottom-8 left-1/2 z-20 -translate-x-1/2 text-2xl text-white drop-shadow-md md:text-3xl"
    aria-hidden="true"
  >
    <i class="fas fa-angle-down" />
  </button>
</template>
