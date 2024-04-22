<script setup lang="ts">
import type { TProduct } from "@/types";

interface Props {
  products: TProduct[] | null;
}
const props = defineProps<Props>();
const { products } = toRefs(props);
const showSlider = ref(false);
</script>

<template>
  <Swiper
    v-if="products"
    :modules="[SwiperNavigation]"
    :loop="false"
    navigation
    @init="showSlider = true"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30,
      },
    }"
    class="productSlider mx-auto sm:max-w-[512px] lg:max-w-[734px] xl:max-w-[1410px]"
  >
    <SwiperSlide v-for="item in products" :key="item._id" v-show="showSlider">
      <Product :product="item" />
    </SwiperSlide>
  </Swiper>
</template>
