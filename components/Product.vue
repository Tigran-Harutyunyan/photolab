<script setup lang="ts">
import type { TProduct } from "@/types";

interface Props {
  product: TProduct;
}
const { product } = defineProps<Props>();

const apiUrl = useRuntimeConfig().public.apiUrl;
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`">
    <div
      class="grad w-full h-[362px] rounded-[10px] overflow-hidden relative group"
    >
      <div
        v-if="product.attributes.isNew"
        class="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10"
      >
        new
      </div>

      <section
        class="w-full h-[200px] flex items-center justify-center relative"
      >
        <NuxtImg
          :alt="product.attributes.title"
          class="w-[160px] h-[160px] group-hover:scale-90 transition-all"
          :src="`${apiUrl}${product.attributes.image.data.attributes.url}`"
        />
      </section>

      <section class="flex flex-col px-6 pb-8">
        <div class="mb-2 text-sm capitalize text-accent max-w-[290px]">
          {{ product.attributes.categories.data[0].attributes.title }}
        </div>

        <div class="text-[15px] mb-4 lg:mb-9">
          {{ product.attributes.title.substring(0, 35) }}
          ...
        </div>

        <div class="text-lg text-accent">${{ product.attributes.price }}</div>
      </section>
    </div>
  </NuxtLink>
</template>
