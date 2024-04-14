<script setup lang="ts">
import type { TCategory, TProduct } from "@/types";

const route = useRoute();

const { data: products } = await useFetch<TProduct[] | null>(
  `/api/products/${route.params.categoryId}`
);

const { data: category } = await useFetch<TCategory | null>(
  `/api/category/${route.params.categoryId}`
);
</script>

<template>
  <div class="mb-16 mt-[160px] lg:mt-[110px]">
    <div class="container mx-auto">
      <div class="flex gap-x-[30px]">
        <CategoryNav />

        <main class="flex flex-col mx-auto">
          <div class="py-3 text-xl text-center uppercase lg:text-left w-[100%]">
            {{ category?.title }} cameras
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-4 gap-[15px] md:gap-[30px]"
          >
            <Product
              v-for="product in products"
              :key="product._id"
              :product="product"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
