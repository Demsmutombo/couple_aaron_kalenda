/**
 * Service API pour la gestion dynamique du contenu du mariage
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class WeddingApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  // Méthode générique pour les requêtes
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API Request failed:', error)
      throw error
    }
  }

  // ===== CONTENU PRINCIPAL =====
  
  // Récupérer tout le contenu du site
  async getSiteContent() {
    return this.request('/wedding/content')
  }

  // Mettre à jour tout le contenu
  async updateSiteContent(content) {
    return this.request('/wedding/content', {
      method: 'PUT',
      body: JSON.stringify(content),
    })
  }

  // ===== MÉTADONNÉES =====
  
  async getMeta() {
    return this.request('/wedding/meta')
  }

  async updateMeta(meta) {
    return this.request('/wedding/meta', {
      method: 'PUT',
      body: JSON.stringify(meta),
    })
  }

  // ===== COUPLE =====
  
  async getCoupleInfo() {
    return this.request('/wedding/couple')
  }

  async updateCoupleInfo(couple) {
    return this.request('/wedding/couple', {
      method: 'PUT',
      body: JSON.stringify(couple),
    })
  }

  // ===== NAVIGATION =====
  
  async getNavigation() {
    return this.request('/wedding/navigation')
  }

  async updateNavigation(nav) {
    return this.request('/wedding/navigation', {
      method: 'PUT',
      body: JSON.stringify(nav),
    })
  }

  // ===== HERO CAROUSEL =====
  
  async getHeroSlides() {
    return this.request('/wedding/hero')
  }

  async addHeroSlide(slide) {
    return this.request('/wedding/hero/slides', {
      method: 'POST',
      body: JSON.stringify(slide),
    })
  }

  async updateHeroSlide(id, slide) {
    return this.request(`/wedding/hero/slides/${id}`, {
      method: 'PUT',
      body: JSON.stringify(slide),
    })
  }

  async deleteHeroSlide(id) {
    return this.request(`/wedding/hero/slides/${id}`, {
      method: 'DELETE',
    })
  }

  // ===== À PROPOS =====
  
  async getAboutInfo() {
    return this.request('/wedding/about')
  }

  async updateGroomInfo(groom) {
    return this.request('/wedding/about/groom', {
      method: 'PUT',
      body: JSON.stringify(groom),
    })
  }

  async updateBrideInfo(bride) {
    return this.request('/wedding/about/bride', {
      method: 'PUT',
      body: JSON.stringify(bride),
    })
  }

  // ===== HISTOIRE D'AMOUR =====
  
  async getStoryEvents() {
    return this.request('/wedding/story')
  }

  async addStoryEvent(event) {
    return this.request('/wedding/story/events', {
      method: 'POST',
      body: JSON.stringify(event),
    })
  }

  async updateStoryEvent(id, event) {
    return this.request(`/wedding/story/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    })
  }

  async deleteStoryEvent(id) {
    return this.request(`/wedding/story/events/${id}`, {
      method: 'DELETE',
    })
  }

  // ===== GALERIE =====
  
  async getGallery() {
    return this.request('/wedding/gallery')
  }

  async getGalleryFilenames() {
    return this.request('/wedding/gallery/filenames')
  }

  async addGalleryImage(image) {
    return this.request('/wedding/gallery/images', {
      method: 'POST',
      body: JSON.stringify(image),
    })
  }

  async deleteGalleryImage(id) {
    return this.request(`/wedding/gallery/images/${id}`, {
      method: 'DELETE',
    })
  }

  // ===== ÉVÉNEMENTS =====
  
  async getEvents() {
    return this.request('/wedding/events')
  }

  async addEvent(event) {
    return this.request('/wedding/events', {
      method: 'POST',
      body: JSON.stringify(event),
    })
  }

  async updateEvent(id, event) {
    return this.request(`/wedding/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    })
  }

  async deleteEvent(id) {
    return this.request(`/wedding/events/${id}`, {
      method: 'DELETE',
    })
  }

  // ===== FAMILLE =====
  
  async getFamilyInfo() {
    return this.request('/wedding/family')
  }

  async updateParents(parents) {
    return this.request('/wedding/family/parents', {
      method: 'PUT',
      body: JSON.stringify(parents),
    })
  }

  async updateWitnesses(witnesses) {
    return this.request('/wedding/family/witnesses', {
      method: 'PUT',
      body: JSON.stringify(witnesses),
    })
  }

  async addImportantPerson(person) {
    return this.request('/wedding/family/important', {
      method: 'POST',
      body: JSON.stringify(person),
    })
  }

  async updateImportantPerson(id, person) {
    return this.request(`/wedding/family/important/${id}`, {
      method: 'PUT',
      body: JSON.stringify(person),
    })
  }

  async deleteImportantPerson(id) {
    return this.request(`/wedding/family/important/${id}`, {
      method: 'DELETE',
    })
  }

  // ===== RSVP & MESSAGES =====
  
  async getRSVPInfo() {
    return this.request('/wedding/rsvp')
  }

  async updateRSVPInfo(rsvp) {
    return this.request('/wedding/rsvp', {
      method: 'PUT',
      body: JSON.stringify(rsvp),
    })
  }

  async sendMessage(message) {
    return this.request('/wedding/messages', {
      method: 'POST',
      body: JSON.stringify(message),
    })
  }

  async getMessages() {
    return this.request('/wedding/messages')
  }

  // ===== MUSIQUE =====
  
  async getMusicSettings() {
    return this.request('/wedding/music')
  }

  async updateMusicSettings(music) {
    return this.request('/wedding/music', {
      method: 'PUT',
      body: JSON.stringify(music),
    })
  }

  // ===== UPLOAD FICHIERS =====
  
  async uploadImage(file, type = 'gallery') {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('type', type)

    return this.request('/upload/image', {
      method: 'POST',
      headers: {}, // Laisser le navigateur définir le Content-Type pour FormData
      body: formData,
    })
  }

  async uploadMusic(file) {
    const formData = new FormData()
    formData.append('music', file)

    return this.request('/upload/music', {
      method: 'POST',
      headers: {},
      body: formData,
    })
  }
}

export const weddingApi = new WeddingApiService()
export default weddingApi
