<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import MediaCard from './MediaCard.vue'

const data = useDataStore()
</script>
<template>
  <div class="container">
    <MediaCard
      v-for="media in data.json?.filter((media) => media.isTrending)"
      :key="media.title.trim()"
      :mediaData="media"
      cardType="trending"
    />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;

.container {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  display: flex;
  gap: v.$spacing-0200;
}

.container > div {
  height: 140px;
}
</style>
