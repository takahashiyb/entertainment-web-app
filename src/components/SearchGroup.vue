<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
import MediaCard from './MediaCard.vue'

const data = useDataStore()

const props = defineProps({
  mediaCategory: { type: String, default: 'any' },
  mediaBookmark: Boolean,
})

data.category = props.mediaCategory

data.isBookmarked = props.mediaBookmark
</script>
<template>
  <div class="container">
    <MediaCard
      v-for="media in data.searchResult
        .filter(
          (media) =>
            props.mediaCategory === 'any' || media.category.toLowerCase() === props.mediaCategory,
        )
        .filter(
          (media) => props.mediaBookmark === false || media.isBookmarked === props.mediaBookmark,
        )"
      :mediaData="media"
      :key="media.title.trim()"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  scrollbar-width: none;

  gap: v.$spacing-0200;
}
</style>
