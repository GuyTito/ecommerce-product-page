import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    item_quantity: 0,
    open_cart: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    /**
     * Add item to the cart
     * @param {Number} quantity
     */
     addItem(quantity) {
      this.item_quantity = quantity
    },
  }
})
