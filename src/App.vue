<script setup lang="ts">
import { onBeforeMount } from 'vue'
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useDataStore } from './stores/data'

const data = useDataStore()

onBeforeMount(async () => {
  const res = await fetch(import.meta.env.BASE_URL + '/assets/data/data.json')
  data.json = await res.json()
})
</script>

<template>
  <main class="container__main">
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <NavBar />
      <div>
        <img class="avatar" src="/assets/images/avatars/image-avatar.png" alt="profile-avatar" />
      </div>
    </header>
    <div class="container__content">
      <SearchBar />
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
@use '@/assets/styles/functions.scss' as f;

header {
  position: sticky;
  top: 0;
  z-index: 99;

  background-color: rgba(v.$blue-900, 1);
  height: v.$spacing-0700;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: v.$spacing-0300;
  padding-inline: v.$spacing-0200;
}

img {
  height: 100%;
  aspect-ratio: 1;
}

.avatar {
  border: solid rgba(v.$white, 1) 2px;
  border-radius: 50%;
}

@media (min-width: f.em(700)) {
  header {
    margin: v.$spacing-0300;
    border-radius: 10px;

    top: v.$spacing-0300;
  }
}

@media (min-width: f.em(1000)) {
  .container__main {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
  header {
    flex-direction: column;
    align-items: center;
    gap: v.$spacing-0900;

    height: calc(100dvh - f.em(32));
    padding: v.$spacing-0400;
  }

  img {
    width: 32px;
    height: auto;
    aspect-ratio: 1;
  }

  .container__content {
    padding-top: v.$spacing-0500;
  }
}
</style>
