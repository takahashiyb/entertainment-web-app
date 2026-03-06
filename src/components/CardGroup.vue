<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import MediaCard from './MediaCard.vue'

const data = useDataStore()

const props = defineProps({
  mediaCategory: { type: String, default: 'any' },
  mediaBookmark: Boolean,
})
</script>
<template>
  <div class="container">
    <MediaCard
      v-for="media in data.json
        ?.filter(
          (media) =>
            props.mediaCategory === 'any' || media.category.toLowerCase() === props.mediaCategory,
        )
        .filter(
          (media) => props.mediaBookmark === false || media.isBookmarked === props.mediaBookmark,
        )"
      :key="media.title.trim()"
      :mediaData="media"
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
