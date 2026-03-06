import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Media } from '@/Types'

export const useDataStore = defineStore('data', () => {
  const json = ref<Media[]>()
  return { json }
})
