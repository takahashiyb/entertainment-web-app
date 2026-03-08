import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Media } from '@/Types'

export const useDataStore = defineStore('data', () => {
  const json = ref<Media[]>()

  const searchText = ref<string>('')

  const category = ref<string>('')

  const isBookmarked = ref<boolean>()

  const searchResult = computed(() => {
    return json
      .value!.filter((media) =>
        media.title.trim().toLowerCase().includes(searchText.value.toLowerCase(), 0),
      )
      .filter(
        (media) => category.value === 'any' || media.category.toLowerCase() === category.value,
      )
      .filter((media) => isBookmarked.value === false || media.isBookmarked === isBookmarked.value)
  })

  return { json, searchText, category, isBookmarked, searchResult }
})
