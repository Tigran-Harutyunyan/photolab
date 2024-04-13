<script setup lang="ts">
import type { ProductsResponse } from "@/types";
const { find } = useStrapi();

const response = await find<ProductsResponse>(
  "products?populate=*&filters[isNew]=true"
);
</script>

<template>
  <div class="container mx-auto mb-16">
    <h2 class="h2 mb-6 text-center xl:text-left">Latest Products</h2>
    <ProductSlider :products="response?.data" />
  </div>
</template>
