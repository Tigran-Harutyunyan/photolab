<script setup lang="ts">
import type { TProduct } from "@/types";

type Props = {
  categoryId: string;
  productId: string;
};

const { categoryId, productId } = defineProps<Props>();

const { data: products } = await useFetch<TProduct[]>(
  `/api/product/${productId}/related?categoryId=${categoryId}`
);
</script>

<template>
  <div class="mb-16">
    <div class="container mx-auto">
      <h2 class="h2 mb-6 text-center xl:text-left">Related Products</h2>
      <ProductSlider :products="products" />
    </div>
  </div>
</template>
