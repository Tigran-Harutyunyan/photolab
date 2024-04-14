<script setup lang="ts">
import { IoArrowForward } from "@/components/ui/icons";
import { IoCartOutline } from "@/components/ui/icons";
import { IoClose } from "@/components/ui/icons";
import { toast } from "vue-sonner";
import { useCart } from "@/store/cart";

const { setIsOpen, clearCart } = useCart();
const { cart, totalPrice } = storeToRefs(useCart());

const isButtonDisabled = ref(false);

const handlePayment = async () => {
  isButtonDisabled.value = true;

  try {
    const response = await $fetch("/api/checkout", {
      method: "post",
      body: {
        cart: toRaw(cart.value),
      },
    });

    if (response?.url) {
      window.location.href = response?.url;
    }
  } catch (error) {
    console.log(error);
  } finally {
    isButtonDisabled.value = false;
  }
};

onMounted(() => {
  const query = useRoute().query;

  if (query.success) {
    toast("Payment completed!");
    clearCart();
    navigateTo("/");
  }

  if (query.canceled) {
    toast("Something went wrong.");
  }
});
</script>

<template>
  <div class="px-4 w-full h-full text-white">
    <div class="overflow-y-auto overflow-x-hidden h-[75vh]">
      <div
        class="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        @click="setIsOpen(false)"
      >
        <IoClose />
      </div>

      <div class="flex flex-col gap-y-10 px-2">
        <CartItem v-for="item in cart" :key="item.id" :item="item" />
      </div>
    </div>

    <div v-if="cart.length > 0" class="flex flex-col px-6 py-10">
      <!-- <div class="flex justify-between text-lg">
        <div>Subtotal:</div>
        <div>{{ useCurrency(totalPrice) }}</div>
      </div> -->

      <div class="flex justify-between text-2xl">
        <div>Total:</div>
        <div>{{ useCurrency(totalPrice) }}</div>
      </div>
    </div>

    <div class="px-6">
      <div v-if="cart.length > 0" class="flex gap-x-4 justify-between">
        <button
          class="btn btn-accent hover:bg-accent-hover"
          type="button"
          @click="clearCart"
        >
          clear cart
        </button>

        <button
          class="flex-1 gap-x-2 px-2 btn btn-accent hover:bg-accent-hover"
          :disabled="isButtonDisabled"
          type="button"
          @click="handlePayment"
        >
          <template v-if="isButtonDisabled">Loading...</template>

          <template v-else>
            checkout
            <IoArrowForward class="text-lg" />
          </template>
        </button>
      </div>

      <div
        v-else
        class="flex absolute top-0 right-0 bottom-0 left-0 flex-col justify-center items-center h-full -z-10 text-white/30"
      >
        <div class="text-2xl">Your Cart Is Empty</div>
        <div class="text-6xl">
          <IoCartOutline />
        </div>
      </div>
    </div>
  </div>
</template>
