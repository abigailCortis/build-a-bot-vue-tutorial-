import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line
export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  return { cart };
});
