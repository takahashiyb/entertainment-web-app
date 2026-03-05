<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isRoute = ref('')

watch(
  () => route.name,
  (newName) => {
    isRoute.value = newName as string
  },
)

const routePlaceholders: { [index: string]: string } = {
  home: 'Search for movies or TV series',
  movies: 'Search for movies',
  tvseries: 'Search for TV series',
  bookmarks: 'Search for bookmarked shows',
}
</script>
<template>
  <section>
    <img src="/src/assets/icons/icon-search.svg" alt="" />
    <label>
      <input class="text__searchbar" type="text" :placeholder="routePlaceholders[isRoute]" />
    </label>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;

section {
  display: flex;
  align-items: center;
  gap: v.$spacing-0200;
  padding: v.$spacing-0100;
  padding-inline: v.$spacing-0200;
}

img {
  padding-bottom: calc(v.$spacing-0100 + 1px);
}

label {
  flex: 1;
}

input {
  width: 100%;
  background-color: transparent;
  caret-color: v.$red-500;

  padding-bottom: v.$spacing-0100;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
}

input:focus-visible {
  border-bottom-color: v.$blue-500;
}
</style>
