<script setup lang="ts">
import CardGroup from '@/components/CardGroup.vue'
</script>
<template>
  <section>
    <div><CardGroup media-category="movie" /></div>
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
