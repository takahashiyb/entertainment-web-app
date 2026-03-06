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
    return { detail: 'text__details', title: 'text__title' } as { detail: string; title: string }
  }

  return { detail: 'text__details', title: 'text__title' } as {
    detail: string
    title: string
  }
})

const mediaType: { [index: string]: string } = { movie: 'movie', tvseries: 'tv' }

const mediaIcon = import.meta.glob('@/assets/icons/icon-category-*.svg', {
  eager: true,
}) as Record<string, { default: string }>
</script>
<template>
  <div class="card">
    <p :class="textType['detail']">year</p>
    <p :class="textType['detail']">•</p>
    <div class="media">
      <img
        :src="mediaIcon[`/src/assets/icons/icon-category-${mediaType[props.media]}.svg`]!.default"
        :alt="`${mediaType[props.media]}
        card
        icon`"
      />
      <p :class="textType['detail']">{{ mediaType[props.media] }}</p>
    </div>
    <p :class="textType['detail']">•</p>
    <p :class="textType['detail']">rating</p>
    <h3 :class="textType['title']">Title</h3>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/styles/main.scss' as v;
.card {
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
</style>
