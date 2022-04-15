<script setup>
import MenuIcon from './icons/MenuIcon.vue';
import Logo from './Logo.vue';
import CartIcon from './CartIcon.vue';

</script>


<template>
  <header class="flex justify-between m-4">
    <div class="flex-center">
      <button>
        <MenuIcon />
      </button>
  
      <Logo />
    </div>

    <div class="flex-center">
      <CartIcon />
      <img src="/assets/image-avatar.png" alt="avatar" class="h-5">
    </div>
  </header>
</template>


<style lang="postcss" scoped>
  .flex-center{
    @apply flex justify-between items-center space-x-4
  }
</style>