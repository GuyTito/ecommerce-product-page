<script setup>
import MenuIcon from './icons/MenuIcon.vue';
import Logo from './Logo.vue';

import { ref, watchEffect } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import CartIcon from './icons/CartIcon.vue';

const menu = ['Collections', 'Men', 'Women', 'About', 'Contact']

const open = ref(false)

watchEffect(()=> {
  if (open.value) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'auto'
})

</script>


<template>
  <header class="flex justify-between m-4">
    <div class="flex-center">
      <button  @click="open = true">
        <MenuIcon />
      </button>
  
      <Logo class="mb-1" />
    </div>

    <div class="flex-center">
      <CartIcon />
      <img src="/assets/image-avatar.png" alt="avatar" class="h-5">
    </div>
  </header>

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
</template>


<style lang="postcss" scoped>
  .flex-center{
    @apply flex justify-between items-center space-x-4
  }

  .v-enter-active {
    @apply transition-all duration-300 delay-75
  }
  .v-leave-active {
    @apply transition-all duration-200 ease-in
  }
  .v-enter-from,
  .v-leave-to {
    @apply -translate-x-full
  }


  .overlay-enter-active {
    @apply transition-all duration-300
  }
  .overlay-leave-active {
    @apply transition-all duration-200 ease-in delay-75
  }
  .overlay-enter-from{
    @apply opacity-0
  }
  .overlay-enter-to {
    @apply opacity-100
  }
  .overlay-leave-from{
    @apply opacity-100
  }
  .overlay-leave-to {
    @apply opacity-0
  }
</style>