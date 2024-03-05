<script setup lang="ts">
const navigationGroups = [
  {
    title: 'Services',
    navigations: [
      {
        text: 'Branding',
        href: '#',
      },
      {
        text: 'Design',
        href: '#',
      },
      {
        text: 'Marketing',
        href: '#',
      },
      {
        text: 'Advertisement',
        href: '#',
      },
    ],
  },
  {
    title: 'Company',
    navigations: [
      {
        text: 'About us',
        href: '#',
      },
      {
        text: 'Contact',
        href: '#',
      },
      {
        text: 'Jobs',
        href: '#',
      },
      {
        text: 'Press kit',
        href: '#',
      },
    ],
  },
  {
    title: 'Legal',
    navigations: [
      {
        text: 'Terms of use',
        href: '#',
      },
      {
        text: 'Privacy policy',
        href: '#',
      },
      {
        text: 'Cookie policy',
        href: '#',
      },
    ],
  },
]
</script>
<template>
  <footer class="footer-area">
    <nav v-for="navigationGroup in navigationGroups" :key="navigationGroup.title" class="navigation-group">
      <h6 class="title">{{ navigationGroup.title }}</h6>
      <nuxt-link
        v-for="navigation in navigationGroup.navigations"
        :key="navigation.text"
        :to="navigation.href"
        class="link"
      >
        {{ navigation.text }}
      </nuxt-link>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.footer-area {
  padding: 2.5rem;
}
</style>
