import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Flèche « explorer » + bouton retour en haut (seuils identiques à l’ancien template).
 */
export function useScrollChrome(options = {}) {
  const hintUntilY = options.hintUntilY ?? 100
  const backTopAfterY = options.backTopAfterY ?? 200

  const showScrollHint = ref(true)
  const showBackTop = ref(false)

  function onScroll() {
    const y = window.scrollY
    showScrollHint.value = y <= hintUntilY
    showBackTop.value = y > backTopAfterY
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { showScrollHint, showBackTop, scrollToTop }
}
