import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({ isLoading: false }),
  actions: {
    /** @param {boolean} isLoading */
    setLoading(isLoading) {
      this.isLoading = isLoading
    },
  },
})
