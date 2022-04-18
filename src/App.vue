<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import PlusIcon from './components/icons/PlusIcon.vue';
import MinusIcon from './components/icons/MinusIcon.vue';
import CartIcon from './components/icons/CartIcon.vue';
import { ref } from 'vue';
import { computed } from '@vue/reactivity';


const quantity = ref(0)
const c_quantity = computed(()=> {
  if (quantity.value < 0) {
    quantity.value = 0
    return quantity.value
  } else return quantity.value
})

</script>

<template>
  <Navbar />

  <main>
    <Carousel />

    <div class="mx-4 space-y-4">
      <h1 class="font-bold text-xs tracking-wider uppercase text-Orange mt-4">Sneaker Company</h1>
  
      <span class="font-bold text-2xl block text-Very-vark-blue">Fall Limited Edition Sneakers</span>
  
      <p class="text-Dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
  
      <div class="flex items-center">
        <span class="Very-vark-blue font-bold text-2xl">$125.00</span>

        <span class="text-Orange bg-Pale-orange py-1 px-2 text-xs font-bold ml-4 rounded-[5px]">50%</span>

        <span class="text-Grayish-blue line-through text-xs font-bold ml-auto">$250.00</span>
      </div>
  
      <div class="bg-Light-grayish-blue rounded-lg text-Orange font-bold py-3 px-4 flex justify-between">
        <button @click="quantity--"> <MinusIcon /> </button>

        <span class="text-Very-vark-blue"> {{ c_quantity }}</span>

        <button @click="quantity++"> <PlusIcon /> </button>
      </div>

      <button class="bg-Orange text-white rounded-lg w-full py-3 px-4 flex justify-center"> <CartIcon class="fill-white mr-4" /> Add to cart</button>
    </div>
  </main>

  <footer class="mt-10 mb-2 text-center text-[10px] text-Dark-grayish-blue">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="underline hover:font-bold">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/GuyTito/ecommerce-product-page"  target="_blank" class="underline hover:font-bold">GuyTito</a>.
  </footer>
</template>
