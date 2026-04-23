import { ref } from 'vue'
import {
  THEME_STORAGE_KEY,
  applyTheme,
  readStoredPreference,
} from '@/theme/initTheme.js'

const preference = ref(readStoredPreference())

/**
 * Préférence thème : clair ou sombre uniquement.
 * Persistance `localStorage` + application immédiate sur `<html>`.
 */
export function useTheme() {
  /**
   * @param {'light' | 'dark'} v
   */
  function setPreference(v) {
    if (v !== 'light' && v !== 'dark') return
    preference.value = v
    try {
      localStorage.setItem(THEME_STORAGE_KEY, v)
    } catch {
      /* ignore */
    }
    applyTheme(v)
  }

  return { preference, setPreference }
}
