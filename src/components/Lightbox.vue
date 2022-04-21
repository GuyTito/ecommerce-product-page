<script setup>
import { ref } from 'vue';
import NextIcon from './icons/NextIcon.vue';
import PreviousIcon from './icons/PreviousIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';

const items = [1, 2, 3, 4]
const current_photo = ref(1)

function next() {
  if (current_photo.value == (items[items.length - 1]) ) {
    current_photo.value = items[0]
    return
  }
  current_photo.value++
}

function previous() {
  if (current_photo.value == (items[0]) ) {
    current_photo.value = items[items.length - 1]
    return
  }
  current_photo.value--
}

</script>


<template>
  <div class="fixed inset-0 w-full h-full bg-black/75 grid items-center">
    <div>
      <div class="max-w-[20rem] mx-auto relative">
        <div class="flex justify-end mb-4">
          <button @click="$emit('close', false)" class="">
            <CloseIcon class="hover:fill-Orange" />
          </button>
        </div>
        
        <div class=" relative h-[20rem]">
          <template v-for="item in items" :key="item">
            <Transition >
              <img  v-if="current_photo == item" :src="`/assets/image-product-${item}.jpg`" alt="product image" class="rounded-lg absolute">
            </Transition>
          </template>
        </div>

        <button @click="previous" class="arrow-btn group -left-4">
          <PreviousIcon /> 
        </button>
        <button @click="next" class="arrow-btn group -right-4">
          <NextIcon /> 
        </button>
      
  
        <div class="flex justify-between px-4 mt-8">
          <div 
            v-for="item in items" :key="item" 
            class="rounded-lg h-12 w-12  cursor-pointer overflow-hidden bg-white" 
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
    </div>
  </div>
</template>


<style lang="postcss" scoped>

</style>