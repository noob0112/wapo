<script setup lang="ts">
defineProps<{
  title: string
  thumbnail: string
}>()
</script>

<template>
  <div class="book-container lg:w-52 xl:w-56 2xl:w-[265px]">
    <div class="book-cover relative">
      <picture>
        <img :src="thumbnail" :alt="title" />
      </picture>
    </div>
    <nuxt-link class="title line-clamp-2" to="#">{{ title }}</nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.book-container {
  > .title {
    white-space: normal;
  }
}

.book-cover {
  border-radius: 0 1rem 1rem 0;
  overflow: hidden;
}
</style>
