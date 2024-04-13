<script setup lang="ts">
import type { TProduct } from "@/types";

interface Props {
  products: TProduct[];
}
const { products } = defineProps<Props>();
</script>

<template>
  <Swiper
    v-if="products"
    :modules="[SwiperPagination, SwiperNavigation]"
    :loop="false"
    navigation
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }"
    class="productSlider mx-auto sm:max-w-[512px] lg:max-w-[734px] xl:max-w-[1410px]"
  >
    <SwiperSlide v-for="item in products" :key="item.id">
      <Product :product="item" />
    </SwiperSlide>
  </Swiper>
</template>
