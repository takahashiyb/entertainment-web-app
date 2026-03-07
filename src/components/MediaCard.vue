<script setup lang="ts">
import { onBeforeMount } from 'vue'
import BookmarkButton from './BookmarkButton.vue'
import MediaCardDetails from './MediaCardDetails.vue'

const props = defineProps({
  mediaData: { type: Object, require: true },
  cardType: { type: String, default: 'regular' },
})

const base = import.meta.env.BASE_URL

let small

let medium

let large

onBeforeMount(() => {
  small =
    props.cardType === 'trending'
      ? props.mediaData!.thumbnail.trending.small?.replace('./assets', '/assets/images') ||
        (Object.values(props.mediaData!.thumbnail.trending)[0] as string).replace(
          './assets',
          '/assets/images',
        )
      : props.mediaData!.thumbnail.regular.small?.replace('./assets', '/assets/images') ||
        (Object.values(props.mediaData!.thumbnail.regular)[0] as string).replace(
          './assets',
          '/assets/images',
        )
  medium =
    props.cardType === 'trending'
      ? props.mediaData!.thumbnail.trending.medium?.replace('./assets', '/assets/images') || small
      : props.mediaData!.thumbnail.regular.medium?.replace('./assets', '/assets/images') || small
  large =
    props.cardType === 'trending'
      ? props.mediaData!.thumbnail.trending.large?.replace('./assets', '/assets/images') || medium
      : props.mediaData!.thumbnail.regular.large?.replace('./assets', '/assets/images') || medium
})
</script>

<template>
  <div class="card" :class="{ trending: props.cardType === 'trending' }">
    <div class="container__image">
      <picture>
        <source :srcset="`${base + large}`" media="(min-width: 1000px)" />
        <source :srcset="`${base + medium}`" media="(min-width: 700px)" />
        <img :src="`${base + small}`" alt="" />
      </picture>
      <MediaCardDetails
        :mediaData="props.mediaData!"
        :cardType="props.cardType"
        v-if="props.cardType === 'trending'"
      />
      <BookmarkButton :mediaData="props.mediaData" />
      <div class="overlay__play">
        <div class="play">
          <img src="@/assets/icons/icon-play.svg" alt="" />
          <p class="text__play">Play</p>
        </div>
      </div>
    </div>
    <MediaCardDetails
      :mediaData="props.mediaData!"
      :cardType="props.cardType"
      v-if="props.cardType === 'regular'"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;

.card {
  cursor: pointer;
  height: min-content;
  z-index: 96;
}

.container__image {
  position: relative;
  height: 100%;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;

  border-radius: 8px;
}

.trending img {
  width: auto;
}

.overlay__play {
  display: none;
  background-color: rgba(v.$black, 50%);
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  position: absolute;
  top: 0;
}

.play {
  display: none;

  white-space: nowrap;
  background-color: rgba(v.$white, 50%);

  align-items: center;
  gap: 5px;

  padding: 12px 9px;

  border-radius: 9em;

  z-index: 97;
}

.card:hover .play {
  display: flex;
}

.card:hover .overlay__play {
  display: flex;
}
</style>
