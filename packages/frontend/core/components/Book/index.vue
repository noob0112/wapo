<script setup lang="ts">
defineProps<{
  title: string
  thumbnail: string
}>()
</script>
<template>
  <div class="book-container">
    <img :src="thumbnail" :alt="title" />
    <nuxt-link to="#">{{ title }}</nuxt-link>
  </div>
</template>
