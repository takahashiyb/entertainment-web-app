<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isSelected = ref('')

watch(
  () => route.name,
  (newName) => {
    isSelected.value = newName as string
  },
)
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }">
          <img
            src="/src/assets/icons/icon-nav-home.svg"
            alt="nav icon for home"
            :class="{ selected: isSelected === 'home' }"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'movies' }">
          <img
            src="/src/assets/icons/icon-nav-movies.svg"
            alt="nav icon for movies"
            :class="{ selected: isSelected === 'movies' }"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'tvseries' }">
          <img
            src="/src/assets/icons/icon-nav-tv-series.svg"
            alt="nav icon for tv series"
            :class="{ selected: isSelected === 'tvseries' }"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'bookmarks' }">
          <img
            src="/src/assets/icons/icon-nav-bookmark.svg"
            alt="nav icon for bookmarks"
            :class="{ selected: isSelected === 'bookmarks' }"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

nav > ul {
  height: 100%;
  list-style-type: none;

  display: flex;
  gap: v.$spacing-0300;
}

nav ul li img {
  height: 100%;
}

nav ul li img:hover {
  filter: saturate(100) brightness(80) invert(0.77);
}

nav ul li img.selected {
  filter: brightness(100);
}

@media (min-width: f.em(1000)) {
  nav {
    flex: 1;
  }

  nav > ul {
    flex-direction: column;
    gap: v.$spacing-0500;
  }

  img {
    width: 32px;
    height: auto;
    aspect-ratio: 1;
  }
}
</style>
