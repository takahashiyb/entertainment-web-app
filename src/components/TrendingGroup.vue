<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import MediaCard from './MediaCard.vue'

const data = useDataStore()
</script>
<template>
  <div class="container__trending">
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
@use '@/assets/styles/functions.scss' as f;

.container__trending {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  display: flex;
  gap: v.$spacing-0200;
}

.container__trending > div {
  height: 140px;
}

@media (min-width: f.em(700)) {
  .container__trending > div {
    height: 230px;
  }
}

@media (min-width: f.em(1000)) {
  .container__trending {
    width: calc(100dvw - f.em(170));
  }
}
</style>
