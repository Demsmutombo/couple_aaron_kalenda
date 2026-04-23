/**
 * URL absolue pour les fichiers dans `public/` (respecte `base` Vite en prod).
 * @param {string} path - ex. "img/logo.png" ou "/img/logo.png"
 */
export function usePublicUrl(path) {
  const trimmed = path.replace(/^\/+/, '')
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  const full = `${prefix}${trimmed}`
  return encodeURI(full)
}
