<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'
import Swiper from 'swiper'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

interface IBanner {
  id: number
  imageUrl: string
}

const banners: IBanner[] = [
  {
    id: 1,
    imageUrl: 'images/3118.jpg'
    // targetUrl: ''
  },
  {
    id: 2,
    imageUrl: 'images/3172.jpg'
    // targetUrl: ''
  },
  {
    id: 3,
    imageUrl: 'images/3211.jpg'
    // targetUrl: ''
  },
  {
    id: 4,
    imageUrl: 'images/3214.jpg'
    // targetUrl: ''
  },
  {
    id: 5,
    imageUrl: 'images/3220.jpg'
    // targetUrl: ''
  },
  {
    id: 6,
    imageUrl: 'images/3223.jpg'
    // targetUrl: ''
  }
]

onMounted(() => {
  //   new Swiper('.swiper', {
  //     slidesPerView: 3,
  //     grid: {
  //       rows: 3
  //     },
  //     mousewheel: {
  //       forceToAxis: true
  //     }
  //   })
})

// function myPlugin({ swiper, extendParams, on }) {
//   extendParams({
//     debugger: true
//   })

//   on('init', () => {
//     if (!swiper.params.debugger) return
//     console.log('init')
//   })
//   on('click', (swiper, e) => {
//     if (!swiper.params.debugger) return
//     console.log('click')
//   })
//   on('tap', (swiper, e) => {
//     if (!swiper.params.debugger) return
//     console.log('tap')
//   })
//   on('doubleTap', (swiper, e) => {
//     if (!swiper.params.debugger) return
//     console.log('doubleTap')
//   })
//   on('sliderMove', (swiper, e) => {
//     if (!swiper.params.debugger) return
//     console.log('sliderMove')
//   })
//   on('slideChange', () => {
//     if (!swiper.params.debugger) return
//     console.log('slideChange', swiper.previousIndex, '->', swiper.activeIndex)
//   })
//   on('slideChangeTransitionStart', () => {
//     if (!swiper.params.debugger) return
//     console.log('slideChangeTransitionStart')
//   })
//   on('slideChangeTransitionEnd', () => {
//     if (!swiper.params.debugger) return
//     console.log('slideChangeTransitionEnd')
//   })
//   on('transitionStart', () => {
//     if (!swiper.params.debugger) return
//     console.log('transitionStart')
//   })
//   on('transitionEnd', () => {
//     if (!swiper.params.debugger) return
//     console.log('transitionEnd')
//   })
//   on('fromEdge', () => {
//     if (!swiper.params.debugger) return
//     console.log('fromEdge')
//   })
//   on('reachBeginning', () => {
//     if (!swiper.params.debugger) return
//     console.log('reachBeginning')
//   })
//   on('reachEnd', () => {
//     if (!swiper.params.debugger) return
//     console.log('reachEnd')
//   })
// }

const swiperNavigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
}
</script>

<template>
  <!-- <Swiper
    class="content"
    :pagination="true"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 3000
    }"
    :navigation="swiperNavigation"
  > -->
  <swiper-container
    navigation="true"
    :pagination="true"
    :pagination-clickable="true"
    :autoplay="{ delay: 3000 }"
    speed="500"
    loop="true"
    css-mode="true"
  >
    <swiper-slide v-for="banner in banners" :key="banner.id">
      <a href="#">
        <img :src="banner.imageUrl" />
      </a>
    </swiper-slide>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- Add Navigation -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper-container>
  <!-- <template #fallback>
      <ul>
        <li v-for="banner in banners" :key="banner.id">
          <a href="#">
            <img :src="banner.imageUrl" alt="burger" />
          </a>
        </li>
      </ul>
    </template> -->
  <!-- </Swiper> -->
</template>

<style lang="scss">
// .swiper-button-next::after,
// .swiper-button-prev::after {
//   content: '';
// }
</style>
