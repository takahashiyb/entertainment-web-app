<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  cardType: {
    type: String,
    default: 'regular',
  },
  mediaData: { type: Object, required: true },
})

const textType = computed(() => {
  if (props.cardType === 'trending') {
    return {
      detail: 'text__details--trending',
      title: 'text__title--trending',
      position: 'inside',
    } as {
      detail: string
      title: string
      position: string
    }
  }

  return { detail: 'text__details', title: 'text__title', position: 'normal' } as {
    detail: string
    title: string
    position: string
  }
})
</script>
<template>
  <div class="details" :class="textType['position']">
    <div class="container">
      <p :class="textType['detail']">{{ props.mediaData.year }}</p>
      <p :class="textType['detail']">•</p>
      <div class="media">
        <img
          v-if="props.mediaData.category === 'movie'"
          src="@/assets/icons/icon-category-movie.svg"
          alt="movie card icon"
        />
        <img
          v-if="props.mediaData.category === 'tvseries'"
          src="@/assets/icons/icon-category-tv.svg"
          alt="tv card icon"
        />
        <p :class="textType['detail']">{{ props.mediaData.category }}</p>
      </div>
      <p :class="textType['detail']">•</p>
      <p :class="textType['detail']">{{ props.mediaData.rating }}</p>
    </div>
    <h3 :class="[textType['title'], 'title']">{{ props.mediaData.title }}</h3>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
.details {
  display: grid;
  gap: v.$spacing-0100;
  width: 100%;
}

.container {
  display: flex;
  gap: v.$spacing-0100;
}

.media {
  display: flex;
  gap: 3px;
}

.title {
  grid-column: 1 / -1;
  grid-row: 2;
  column-span: 1 / -1;

  white-space: nowrap;
}

.inside {
  background-image: v.$gradient;

  position: absolute;
  bottom: 0;
  left: 0;

  padding-left: 16px;
  padding-bottom: 16px;

  border-radius: 0 0 8px 8px;
}
</style>
