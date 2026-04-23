import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from '@/app/App.vue'
import router from './router'
import { initThemeFromStorage } from '@/theme/initTheme.js'
import './assets/styles/main.css'

initThemeFromStorage()

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
