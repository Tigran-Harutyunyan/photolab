<script setup lang="ts">
import type { TProduct } from "@/types";

import { useCart } from "@/store/cart";
const { addToCart } = useCart();

const route = useRoute();

const routeId = route.params.id;

const { data: product } = await useFetch<TProduct>(`/api/product/${routeId}`);

if (!product.value) {
  navigateTo("/");
}
</script>

<template>
  <div class="mb-16 mt-[160px] lg:mt-[110px]">
    <div class="container mx-auto" v-if="product">
      <div class="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
        <div
          class="lg:max-w-[40%] lg:min-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center"
        >
          <NuxtImg class="p-2 w-full sm:p-5" :src="product.image"> </NuxtImg>
        </div>
        <div
          class="flex flex-col flex-1 justify-center p-6 rounded-lg sm:p-10 lg:p-12 xl:p-20 bg-primary"
        >
          <h2 class="mb-2 h2 font-medium uppercase text-accent">
            {{ product.title }}
          </h2>

          <div class="mb-12">{{ product.description }}</div>

          <div class="flex flex-col gap-x-8 items-center xs:flex-row">
            <div class="mb-7 text-3xl font-semibold text-accent xs:mb-0">
              {{ `$${product.price}` }}
            </div>
            <button
              class="btn btn-accent"
              type="button"
              @click="addToCart(product, routeId)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        :categoryId="product?.categoryId"
        :productId="product?._id"
      />
    </div>
  </div>
</template>
