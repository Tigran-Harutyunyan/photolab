import { defineStore } from "pinia";

import type { TCart, TProduct } from '@/types';

export const useCart = defineStore("cart", () => {
  const isOpen = ref(false);

  const cart = ref<TCart[]>([]);

  const amount = ref(0);

  const total = ref(0);

  const totalItems = computed(() => cart.value.reduce((acc, cur) => acc + cur.amount, 0));

  const totalPrice = computed(() => cart.value.reduce((acc, cur) => acc + cur.item.price * cur.amount, 0));

  const setIsOpen = (val: boolean) => {
    isOpen.value = val;
  }

  const addToCart = (item: TProduct | undefined, id: string | undefined): void => {
    if (item && id) {
      const newItem = { id, item, amount: 1 };

      // check if item is already in the cart
      const cartItem = cart.value.find((product: TCart) => product.id === id);

      if (cartItem) {
        const newCart = cart.value.map((prod: TCart) => {
          if (prod.id === id) {
            amount.value = (prod.amount + 1);
            return { ...prod, amount: prod.amount + 1 };
          }
          return prod;
        });
        cart.value = newCart;
      } else {
        cart.value = [...cart.value, newItem];
      }

      isOpen.value = true;
    }
  }

  const removeFromCart = (id: string) => {
    const newCart = cart.value.filter((item: TCart) => item.id !== id);
    cart.value = newCart;
  }

  const clearCart = () => {
    cart.value = [];
  };

  const handleInput = (event: HTMLInputElement, id: string) => {
    const value = parseInt(event?.target?.value, 10);

    const cartItem = cart.value.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.value.map((item) => {
        if (item.id === id) {
          if (Number.isNaN(value)) {
            amount.value = 1;
            return { ...item, amount: 1 };
          }

          amount.value = value;
          return { ...item, amount: value };
        }

        return item;
      });

      cart.value = newCart;
    }

    isOpen.value = true;
  }

  const handleSelect = (event: HTMLInputElement, id: string) => {
    const value = parseInt(event?.target.value, 10);

    const cartItem = cart.value.find((item: TCart) => item.id === id);

    if (cartItem) {
      const newCart = cart.value.map((item: TCart) => {
        if (item.id === id) {
          amount.value = value;
          return { ...item, amount: value };
        }

        return item;
      });

      cart.value = newCart;
    }
  }

  return {
    isOpen,
    cart,
    total,
    totalItems,
    totalPrice,
    clearCart,
    addToCart,
    removeFromCart,
    handleInput,
    handleSelect,
    setIsOpen
  };
}, {
  persist: {
    storage: persistedState.localStorage,
  },
});
