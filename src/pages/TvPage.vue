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
      '{{ data.searchText }}' in TV Series.
    </h2>
    <SearchGroup mediaCategory="tv series" />
  </section>
  <section v-else>
    <h2>TV Series</h2>
    <div><CardGroup media-category="tv series" /></div>
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
