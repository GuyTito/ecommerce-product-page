<script setup>
import { computed } from '@vue/reactivity';
import { watchEffect } from 'vue';
import { useCartStore } from '../stores/cart';
import DeleteIcon from './icons/DeleteIcon.vue';

const cart = useCartStore()
const total = computed(() => {
  return 125 * cart.item_quantity
})

watchEffect(()=> {
  if (cart.is_open) {
    document.body.style.overflow = 'hidden'
    return
  }
  document.body.style.overflow = 'auto'
})

</script>


<template>
  <Teleport to="body">
    <Transition>
      <div v-if="cart.is_open" @click="cart.is_open = false" class="fixed inset-0 w-full h-full items-start">
        <div class="bg-white m-2 rounded-lg p-4 mt-16 md:mt-20 md:absolute md:w-80 md:right-6 shadow-2xl">
          <h2 class="text-Very-vark-blue font-bold">Cart</h2>
          
          <hr class="my-4">
  
          <div v-if="cart.item_quantity" class="flex items-center text-Dark-grayish-blue mb-4">
            <img src="/assets/image-product-1-thumbnail.jpg" alt="product thumbnail" class="rounded-[6px] h-12 w-12">
  
            <div class="ml-3">
              <div>Fall Limited Edition</div>
              <div> $125.00 * {{ cart.item_quantity }} <span class="font-bold text-Very-vark-blue">${{ total }}.00</span></div>
            </div>
  
            <button @click="cart.item_quantity = 0" class="ml-auto">
              <DeleteIcon />
            </button>
          </div>
  
          <button v-if="cart.item_quantity" @click="cart.item_quantity = 0" class="orange-btn mb-4">Checkout</button>
  
          <div v-else class="text-Dark-grayish-blue font-bold text-center my-16">
            Your cart is empty.
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<style scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
</style>