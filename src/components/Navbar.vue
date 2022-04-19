<script setup>
import MenuIcon from './icons/MenuIcon.vue';
import Logo from './Logo.vue';

import { ref, watchEffect } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import CartIcon from './icons/CartIcon.vue';
import { useCartStore } from '../stores/cart';
import Cart from './Cart.vue'

const menu = ['Collections', 'Men', 'Women', 'About', 'Contact']

const open = ref(false)
watchEffect(()=> {
  if (open.value) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'auto'
})

const cart = useCartStore()

</script>


<template>
  <header class="flex justify-between m-3 md:m-0 md:mx-16 md:border-b-2">
    <div class="flex-center">
      <button  @click="open = true" class="md:hidden">
        <MenuIcon />
      </button>
  
      <a href="#"><Logo class="mb-1 md:mb-2 ml-4 md:ml-0 md:mr-14" /></a>

      <nav class="hidden md:block space-x-6 text-Dark-grayish-blue">
        <a href="#" v-for="item in menu" :key="item" class="px-2 inline-block py-10 hover:text-Very-vark-blue border-b-4 border-transparent hover:border-Orange transition-all duration-500 delay-75">
          {{item}}
        </a>
      </nav>
    </div>

    <div class="flex-center space-x-4 md:space-x-14">
      <button @click="cart.is_open = true" class="relative">
        <CartIcon />
        
        <div v-if="cart.item_quantity" class="bg-Orange text-white absolute -top-2 -right-2 py-0 px-2 text-xs rounded-full">{{cart.item_quantity}}</div>
      </button>

      <img src="/assets/image-avatar.png" alt="avatar" class="h-8 md:h-14 rounded-full border-2 border-transparent hover:border-Orange transition-all duration-300">
    </div>

    <!-- mobile menu -->
    <Teleport to="body">
      <Transition name="overlay">
        <div v-if="open" @click="open = false" class="fixed inset-0 w-full h-full flex justify-start bg-black/75">
        </div>
      </Transition>

      <Transition>
        <div v-if="open" class="w-1/2 bg-white h-full p-5 absolute top-0">
          <div class="flex justify-start items-center mb-14">
            <button @click="open = false">
              <CloseIcon />
            </button>
          </div>

          <nav class="flex flex-col space-y-4 font-bold">
            <a href="#" v-for="item in menu" :key="item">
              {{item}}
            </a>
          </nav>
        </div>
      </Transition>
    </Teleport>

    <!-- cart modal -->
    <Cart />
  </header>
</template>


<style lang="postcss" scoped>
  .flex-center{
    @apply flex justify-between items-center
  }

  .v-enter-active {
    @apply transition-all duration-300 delay-75
  }
  .v-leave-active {
    @apply transition-all duration-200 ease-in
  }
  .v-enter-from, .v-leave-to {
    @apply -translate-x-full
  }

  .overlay-enter-active, .overlay-leave-active {
    transition: opacity 0.5s ease;
  }
  .overlay-enter-from, .overlay-leave-to {
    opacity: 0;
  }
</style>