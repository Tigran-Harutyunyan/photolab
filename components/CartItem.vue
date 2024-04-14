<script setup lang="ts">
import { IoClose } from "@/components/ui/icons";
import type { TCart } from "@/types";
import { useCart } from "@/store/cart";

const { removeFromCart } = useCart();

type Props = {
  item: TCart;
};

const { item } = defineProps<Props>();
</script>

<template>
  <div class="flex gap-x-8">
    <NuxtLink class="w-[70px] h-[70px]" :to="`/product/${item.id}`">
      <NuxtImg :alt="item.item.title" :src="item.item.image" />
    </NuxtLink>

    <div class="flex-1">
      <div class="flex gap-x-4 mb-3">
        <NuxtLink :to="`/product/${item.id}`">{{ item.item.title }}</NuxtLink>

        <div
          class="cursor-pointer text-[24px] hover:text-accent transition-all"
          @click="removeFromCart(item.id)"
        >
          <IoClose />
        </div>
      </div>

      <div class="flex gap-x-12 items-center mb-2">
        <div class="flex gap-x-4">
          <Qty :item="item" />
        </div>
        <div class="text-xl text-accent">
          {{ `${useCurrency(item.item.price * item.amount)}` }}
        </div>
      </div>

      <div>
        <span class="text-accent">{{
          `${useCurrency(item.item.price)} per piece`
        }}</span>
      </div>
    </div>
  </div>
</template>
