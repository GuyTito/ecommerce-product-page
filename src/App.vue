<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import PlusIcon from './components/icons/PlusIcon.vue';
import MinusIcon from './components/icons/MinusIcon.vue';
import CartIcon from './components/icons/CartIcon.vue';
import { ref } from 'vue';
import { useCartStore } from './stores/cart'
import Lightbox from './components/Lightbox.vue';

const quantity = ref(0)

const cart = useCartStore()
const addToCart = () => {
  cart.addItem(quantity.value)
  quantity.value = 0
}

const items = [1, 2, 3, 4]
const current_photo = ref(1)

const open_lightbox = ref(false)

</script>


<template>
  <Navbar />

  <main class="md:mt-20 md:max-w-3xl mx-auto md:flex md:space-x-20">
    <Carousel class="md:hidden" />

    <div class="hidden md:block w-1/2">
      <div class="flex relative h-[304px] w-full">
        <template v-for="item in items" :key="item">
          <Transition>
            <img  v-if="current_photo == item" @click="open_lightbox = true" :src="`/assets/image-product-${item}.jpg`" alt="product image" class="rounded-lg cursor-pointer absolute">
          </Transition>
        </template>
      </div>

      <div class="flex justify-between mt-8">
        <div 
          v-for="item in items" :key="item" 
          class="rounded-lg h-16 w-16  cursor-pointer overflow-hidden" 
          :class="{ 'border-2 border-Orange': current_photo == item }"
        >
          <img
            :src="`/assets/image-product-${item}-thumbnail.jpg`" 
            @click="current_photo = item"
            alt="product thumbnail" 
            class="object-cover hover:opacity-50"
            :class="{ 'opacity-25': current_photo == item }"
          >
        </div>
      </div>
    </div>

    <div class="mx-4 space-y-4 md:w-1/2">
      <h1 class="font-bold text-xs tracking-wider uppercase text-Orange mt-4">Sneaker Company</h1>
  
      <span class="font-bold text-2xl block text-Very-vark-blue">Fall Limited Edition Sneakers</span>
  
      <p class="text-Dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
  
      <div class="flex md:block items-center">
        <div class="flex items-center">
          <span class="Very-vark-blue font-bold text-2xl">$125.00</span>
  
          <span class="text-Orange bg-Pale-orange py-1 px-2 text-xs font-bold ml-4 rounded-[5px]">50%</span>
        </div>

        <span class="text-Grayish-blue line-through text-xs font-bold ml-auto md:block md:mt-2">$250.00</span>
      </div>
  
      <form @submit.prevent="addToCart" class="md:flex md:space-x-5 items-center">
        <div class="bg-Light-grayish-blue rounded-lg text-Orange font-bold py-3 px-4 flex justify-between">
          <button type="button" @click="quantity--"> <MinusIcon /> </button>

          <input v-model="quantity" type="number" min="0" class="text-Very-vark-blue font-bold text-center bg-Light-grayish-blue w-12 outline-none" />
  
          <button type="button" @click="quantity++"> <PlusIcon /> </button>
        </div>
  
        <button type="submit" class="orange-btn shadow-2xl shadow-Orange mt-4 md:mt-0 ">
          <CartIcon class="fill-white mr-4"/> Add to cart
        </button>
      </form>
    </div>

    <!-- lightbox modal -->
    <Teleport to="body">
      <Transition>
        <Lightbox v-if="open_lightbox" @close="(data) => open_lightbox = data" />
      </Transition>
    </Teleport>
  </main>

  <footer class="mt-10 mb-2 text-center text-[10px] text-Dark-grayish-blue">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="underline hover:font-bold">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/GuyTito/ecommerce-product-page"  target="_blank" class="underline hover:font-bold">GuyTito</a>.
  </footer>
</template>


<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>