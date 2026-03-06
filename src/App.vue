<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <main>
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <NavBar />
      <div>
        <img class="avatar" src="/assets/images/avatars/image-avatar.png" alt="profile-avatar" />
      </div>
    </header>
    <SearchBar />
    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;

header {
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
</style>
