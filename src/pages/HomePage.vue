<script setup lang="ts">
import CardGroup from '@/components/CardGroup.vue'
import TrendingGroup from '@/components/TrendingGroup.vue'
</script>
<template>
  <section>
    <h2>Trending</h2>
    <div><TrendingGroup /></div>
    <h2>Recommended</h2>
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
