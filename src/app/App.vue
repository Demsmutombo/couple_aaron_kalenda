<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SplashScreen from '@/components/ui/SplashScreen.vue'

const showSplash = ref(true)
</script>

<template>
  <RouterView />
  <SplashScreen v-if="showSplash" @dismissed="showSplash = false" />
</template>
