<script setup lang="ts">
//const { data: products } = await useFetch("/api/products");
const { data: products } = await useLazyAsyncData(
  "products",
  () => $fetch(`/api/products`),
  { server: false }
);
</script>

<template>
  <div class="container mx-auto mb-16">
    <h2 class="h2 mb-6 text-center xl:text-left">Latest Products</h2>
    <ProductSlider :products="products" />
  </div>
</template>
