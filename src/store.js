import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartCount = computed(() => cart.value.length);
  const cartTotal = computed(() =>
  cart.value.reduce((total, current) => {
    console.log(current,'current')
    return Number(total) + Number(current.price) ;
  }, 0)
);
  const addToCart = (product) => {
    cart.value.push(product);
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((el) => {
      return el.id !== id;
    });
  };

 
  return { cartCount, addToCart, removeFromCart, cart, cartTotal };
});
