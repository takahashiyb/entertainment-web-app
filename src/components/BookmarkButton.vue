<script lang="ts" setup>
const props = defineProps({
  mediaData: Object,
})
</script>
<template>
  <label>
    <input type="checkbox" v-model="props.mediaData!.isBookmarked" />
    <img src="@/assets/icons/icon-bookmark-full.svg" alt="" v-if="props.mediaData!.isBookmarked" />
    <img src="@/assets/icons/icon-bookmark-empty.svg" alt="" v-else />
  </label>
</template>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as v;

label {
  display: grid;
  place-content: center;
  height: 32px;
  width: 32px;
  background-color: rgba(v.$blue-950, 50%);
  cursor: pointer;

  border-radius: 50%;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;

  z-index: 98;
}

label:hover {
  background-color: rgba(v.$white, 100%);

  img {
    filter: brightness(0);
  }
}

input {
  display: none;
}
</style>
