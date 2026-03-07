<script setup lang="ts">
import CardGroup from '@/components/CardGroup.vue'
import { useDataStore } from '@/stores/data'
import SearchGroup from '@/components/SearchGroup.vue'

const data = useDataStore()
</script>
<template>
  <section v-if="data.searchText !== ''">
    <h2>
      Found {{ data.searchResult.length }} result{{ data.searchResult.length > 1 ? 's' : '' }} for
      '{{ data.searchText }}' in Bookmarks.
    </h2>
    <SearchGroup mediaBookmark />
  </section>
  <section v-if="data.searchText === ''">
    <h2>Bookmarked Movies</h2>
    <div><CardGroup media-category="movie" media-bookmark /></div>
  </section>

  <section v-if="data.searchText === ''">
    <h2>Bookmarked TV Series</h2>
    <div><CardGroup media-category="tv series" media-bookmark /></div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
section {
  padding: v.$spacing-0200;
}

h2 {
  padding-bottom: v.$spacing-0200;
}

div {
  padding-bottom: v.$spacing-0300;
}
</style>
