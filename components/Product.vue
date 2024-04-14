<script setup lang="ts">
import type { TProduct } from "@/types";

interface Props {
  product: TProduct;
}
const props = defineProps<Props>();

const { product } = toRefs(props);
</script>

<template>
  <NuxtLink :to="`/product/${product._id}`">
    <div
      class="grad w-full h-[362px] rounded-[10px] overflow-hidden relative group"
    >
      <div
        v-if="product?.isNew"
        class="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10"
      >
        new
      </div>

      <section
        class="w-full h-[200px] flex items-center justify-center relative"
      >
        <NuxtImg
          :alt="product.title"
          class="w-[160px] h-[160px] group-hover:scale-90 transition-all"
          :src="product.image"
        />
      </section>

      <section class="flex flex-col px-6 pb-8">
        <div
          class="mb-2 text-sm capitalize text-accent max-w-[290px] line-clamp-1"
        >
          {{ product.title }}
        </div>

        <div class="text-[15px] mb-4 lg:mb-9 line-clamp-2">
          {{ product.description }}
          ...
        </div>

        <div class="text-lg text-accent">{{ useCurrency(product.price) }}</div>
      </section>
    </div>
  </NuxtLink>
</template>
