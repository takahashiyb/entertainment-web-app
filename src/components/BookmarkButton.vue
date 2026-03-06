<script lang="ts" setup>
const isFull = false
</script>
<template>
  <button>
    <img src="@/assets/icons/icon-bookmark-full.svg" alt="" v-if="isFull" />
    <img src="@/assets/icons/icon-bookmark-empty.svg" alt="" v-else />
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;

button {
  display: grid;
  place-content: center;
  height: 32px;
  width: 32px;
  background-color: rgba(v.$blue-950, 50%);

  border-radius: 50%;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;
}
</style>
