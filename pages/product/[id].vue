<script setup lang="ts">
import type { ProductsResponse, ProductWithAttributes } from "@/types";

import { useCart } from "@/store/cart";
const { addToCart } = useCart();

const route = useRoute();

const { find } = useStrapi();

const data = await find<ProductsResponse>(
  `products?populate=*&filters[id][$eq]=${route.params.id}`
);

if (data?.data.length === 0) {
  navigateTo("/");
}

const product = computed<ProductWithAttributes>(() => {
  if (!data) return null;
  return data.data[0];
});

const categoryTitle = computed(() => {
  return product.value?.attributes.categories.data[0].attributes.title;
});

const apiUrl = useRuntimeConfig().public.apiUrl;
</script>

<template>
  <div class="mb-16 mt-[160px] lg:mt-[110px]">
    <div class="container mx-auto">
      <div
        v-if="product"
        class="flex flex-col lg:flex-row gap-[30px] mb-[30px]"
      >
        <div
          class="lg:max-w-[40%] lg:min-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center"
        >
          <NuxtImg
            :alt="product && product?.attributes?.image.data.attributes.name"
            class="p-2 w-full sm:p-5"
            :src="`${apiUrl}${product.attributes?.image.data.attributes.url}`"
          >
          </NuxtImg>
        </div>
        <div
          class="flex flex-col flex-1 justify-center p-6 rounded-lg sm:p-10 lg:p-12 xl:p-20 bg-primary"
        >
          <div class="mb-2 text-lg font-medium uppercase text-accent">
            {{ product?.attributes.categories.data[0].attributes.title }}
            cameras
          </div>

          <div class="mb-4 h2">{{ product?.attributes.title }}</div>

          <div class="mb-12">{{ product?.attributes.description }}</div>

          <div class="flex flex-col gap-x-8 items-center xs:flex-row">
            <div class="mb-7 text-3xl font-semibold text-accent xs:mb-0">
              {{ `$${product?.attributes.price}` }}
            </div>
            <button
              class="btn btn-accent"
              type="button"
              @click="addToCart(product, route.params.id)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        :categoryTitle="categoryTitle"
        :productId="route.params?.id"
      />
    </div>
  </div>
</template>
