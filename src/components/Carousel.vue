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
      autoPlay: 5000,
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

    <button @click="previous" class="arrow-btn group left-2">
      <PreviousIcon />
    </button>
    <button @click="next" class="arrow-btn group right-2">
      <NextIcon />
    </button>
  </div>
</template>


<style lang="postcss" scoped>
  
</style>