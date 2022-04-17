<script setup>
import { nextTick, onMounted, ref } from 'vue';
import NextIcon from './icons/NextIcon.vue';
import PreviousIcon from './icons/PreviousIcon.vue';

const items = [1, 2, 3, 4]
const carousel = ref(null)
let flkty = null
onMounted(() => {
  nextTick(() => {
    flkty = new Flickity(carousel.value, {
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
    })
  })
})
const next = () => { flkty.next() }
const previous = () => { flkty.previous() }

</script>


<template>
  <div class="relative">
    <div ref="carousel">
      <div v-for="item in items" :key="item" class="carousel-cell min-w-[375px] h-80">
        <img :src="`/assets/image-product-${item}.jpg`" alt="product image" class="object-cover">
      </div>
    </div>

    <button @click="previous" class="left-2"> <PreviousIcon /> </button>
    <button @click="next" class="right-2"> <NextIcon /> </button>
  </div>
</template>


<style lang="postcss" scoped>
  button{
    @apply absolute top-1/2 bg-white py-3 px-4 rounded-full
  }
</style>