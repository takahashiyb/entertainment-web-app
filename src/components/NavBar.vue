<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref('movies')

function switchNavHighlight(current: string) {
  isSelected.value = current
}
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
            @click="switchNavHighlight('home')"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'movies' }">
          <img
            src="/src/assets/icons/icon-nav-movies.svg"
            alt="nav icon for movies"
            :class="{ selected: isSelected === 'movies' }"
            @click="switchNavHighlight('movies')"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'tvseries' }">
          <img
            src="/src/assets/icons/icon-nav-tv-series.svg"
            alt="nav icon for tv series"
            :class="{ selected: isSelected === 'tvseries' }"
            @click="switchNavHighlight('tvseries')"
          />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'bookmarks' }">
          <img
            src="/src/assets/icons/icon-nav-bookmark.svg"
            alt="nav icon for bookmarks"
            :class="{ selected: isSelected === 'bookmarks' }"
            @click="switchNavHighlight('bookmarks')"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

nav > ul {
  height: 100%;
  list-style-type: none;

  display: flex;
  gap: $spacing-0300;
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
</style>
