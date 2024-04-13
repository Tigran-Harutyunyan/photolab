<script setup lang="ts">
import { useRoute } from "vue-router";

const getQueryParams = () => {
  return location?.search
    ? new URLSearchParams(location.search).get("query")
    : "";
};

let searchTerm = getQueryParams();

const route = useRoute();

const { find } = useStrapi();

const products = ref();

const getData = async () => {
  const { data } = await find(
    `products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  if (data && Array.isArray(data)) {
    products.value = data;
  }
};

getData();

const searchResults = computed(() => {
  return products.value?.length > 0
    ? `${products.value?.length} results for ${searchTerm}`
    : `no results found for ${searchTerm}`;
});

watch(
  () => route?.fullPath,
  async () => {
    searchTerm = getQueryParams();
    getData();
  }
);
</script>

<template>
  <div class="mt-[160px] lg:mt-[110px]">
    <div class="container mx-auto">
      <div class="flex gap-x-[30px] justify-center mb-7">
        <CategoryNav />

        <div class="w-[100%]">
          <div class="py-3 text-xl text-center uppercase lg:text-left">
            {{ searchResults }}
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-[30px]"
          >
            <div class="mb-5" v-for="product in products">
              <Product :key="product.id" :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
