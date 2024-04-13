<script setup lang="ts">
import type { TProduct } from "@/types";
import type { ProductsResponse } from "@/types";

type Props = {
  categoryTitle: string | undefined;
  productId: string;
};

const { categoryTitle, productId } = defineProps<Props>();

const { find } = useStrapi();

const data = await find<ProductsResponse>(
  `products?populate=*&filters[categories][title]=${categoryTitle}`
);

const products = computed(() => {
  return data?.data && productId
    ? data.data.filter((item: TProduct) => item.id != productId)
    : [];
});
</script>

<template>
  <div class="mb-16">
    <div class="container mx-auto">
      <h2 class="h2 mb-6 text-center xl:text-left">Related Products</h2>
      <ProductSlider :products="products" />
    </div>
  </div>
</template>
