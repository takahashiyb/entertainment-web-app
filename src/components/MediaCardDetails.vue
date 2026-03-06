<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'common',
  },
  media: { type: String, default: 'movie' },
})

const textType = computed(() => {
  if (props.type === 'trending') {
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
    <p :class="textType['detail']">year</p>
    <p :class="textType['detail']">•</p>
    <div class="media">
      <img
        v-if="props.media === 'movie'"
        src="@/assets/icons/icon-category-movie.svg"
        alt="movie card icon"
      />
      <img
        v-if="props.media === 'tvseries'"
        src="@/assets/icons/icon-category-tv.svg"
        alt="tv card icon"
      />
      <p :class="textType['detail']">{{ props.media }}</p>
    </div>
    <p :class="textType['detail']">•</p>
    <p :class="textType['detail']">rating</p>
    <h3 :class="textType['title']">Title</h3>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
.details {
  display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: v.$spacing-0100;
}

.media {
  display: flex;
  gap: 3px;
}

.title {
  grid-column: 1 / -1;
}

.inside {
  position: absolute;
  bottom: 16px;
  left: 16px;
}
</style>
