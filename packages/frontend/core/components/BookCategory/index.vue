<script setup lang="ts">
const books = [
  {
    id: 1,
    title: 'Israel đã kiến tạo tương lai như thế nào?',
    thumbnail: '/books/46672.jpg'
  },
  {
    id: 2,
    title: 'Bẫy ngụy biện trong tư duy phản biện',
    thumbnail: '/books/46780.jpg'
  }
  // {
  //   id: 3,
  //   title: 'Dám nghĩ lại',
  //   thumbnail: '/books/39950.jpg'
  // },
  // {
  //   id: 4,
  //   title: 'Việt Sử Kiêu Hùng',
  //   thumbnail: '/books/47581.jpg'
  // },
  // {
  //   id: 5,
  //   title: 'Luyện trí nhớ',
  //   thumbnail: '/books/1851.jpg'
  // },
  // {
  //   id: 6,
  //   title: 'Cách biến khả năng của bạn thành tiền',
  //   thumbnail: '/books/899.jpg'
  // },
  // {
  //   id: 7,
  //   title: 'Cách biến khả năng của bạn thành tiền',
  //   thumbnail: '/books/33010.jpg'
  // },
  // {
  //   id: 8,
  //   title: 'Content Marketing tất tần tật từ A đến Z',
  //   thumbnail: '/books/35204.jpg'
  // },
  // {
  //   id: 9,
  //   title: 'Nét xuân cửa Thiền',
  //   thumbnail: '/books/44321.jpg'
  // },
  // {
  //   id: 10,
  //   title: 'Quảng cáo Facebook Messenger',
  //   thumbnail: '/books/35216.jpg'
  // }
]
</script>

<template>
  <section class="">
    <header class="header flex">
      <h2>Sách miễn phí <a class="explore" href="#">khám phá &gt;</a></h2>
    </header>
    <ul class="books-list carousel w-full overflow-auto whitespace-nowrap">
      <li v-for="book in books" :key="book.id" class="carousel-item">
        <Book v-bind="book" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.books-list {
  column-gap: 2rem;
}
</style>
