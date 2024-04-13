<script setup lang="ts">
import type { ProductsResponse, ProductWithAttributes } from "@/types";

const route = useRoute();

const { find } = useStrapi();

const data = await find<ProductsResponse>(
  `products?populate=*&filters[categories][id][$eq]=${route.params.categoryId}`
);

const products = computed<ProductWithAttributes>(() => {
  if (!data) return null;
  return data.data;
});

const title = computed<string | null>(() => {
  return products.value
    ? products.value[0].attributes.categories.data[0].attributes.title
    : "";
});
</script>

<template>
  <div class="mb-16 mt-[160px] lg:mt-[110px]">
    <div class="container mx-auto">
      <div class="flex gap-x-[30px]">
        <CategoryNav />

        <main class="flex flex-col mx-auto">
          <div class="py-3 text-xl text-center uppercase lg:text-left w-[100%]">
            {{ title }} cameras
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-4 gap-[15px] md:gap-[30px]"
          >
            <Product
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
