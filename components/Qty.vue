<script setup lang="ts">
import type { TCart } from "@/types";
import { useCart } from "@/store/cart";

const { handleSelect, handleInput } = useCart();

type Props = {
  item: TCart;
};

const { item } = defineProps<Props>();
</script>

<template>
  <div class="flex gap-x-6 items-center text-primary">
    <select
      v-if="item.amount < 10"
      class="p-2 rounded-lg w-[100px] h-10 outline-none text-primary"
      :value="item.amount"
      @change="handleSelect($event, item.id)"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10+</option>
    </select>

    <input
      v-else
      class="text-primary placeholder:text-primary h-10 rounded-md p-3 w-[100px] outline-accent"
      :placeholder="String(item.amount)"
      type="text"
      :value="item.amount"
      @blur="handleInput($event, item.id)"
    />
  </div>
</template>
