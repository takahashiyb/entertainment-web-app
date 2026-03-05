<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <main>
    <header>
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <NavBar />
      <div>
        <img
          class="avatar"
          src="/public/assets/images/avatars/image-avatar.png"
          alt="profile-avatar"
        />
      </div>
    </header>
    <RouterView> </RouterView>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

header {
  background-color: rgba($blue-900, 1);
  height: $spacing-0700;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: $spacing-0300;
  padding-inline: $spacing-0200;
}

img {
  height: 100%;
  aspect-ratio: 1;
}

.avatar {
  border: solid rgba($white, 1) 2px;
  border-radius: 50%;
}
</style>
