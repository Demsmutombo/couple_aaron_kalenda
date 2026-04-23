export const THEME_STORAGE_KEY = 'wedding-theme-preference'

/** @typedef {'light' | 'dark'} ThemePreference */

/**
 * @returns {ThemePreference}
 */
export function readStoredPreference() {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    if (raw === 'light' || raw === 'dark') return raw
    /** Ancienne valeur « system » : migrer vers le clair */
    if (raw === 'system') {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, 'light')
      } catch {
        /* ignore */
      }
      return 'light'
    }
  } catch {
    /* ignore */
  }
  return 'light'
}

/**
 * @param {ThemePreference} pref
 */
export function resolveDark(pref) {
  return pref === 'dark'
}

/**
 * @param {ThemePreference} pref
 */
export function applyTheme(pref) {
  const dark = resolveDark(pref)
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export function initThemeFromStorage() {
  applyTheme(readStoredPreference())
}
