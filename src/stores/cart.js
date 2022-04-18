import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    /** @type {Number} */
    item_quantity: 0,
    /** @type {Boolean} */
    is_open: false,
  }),
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
