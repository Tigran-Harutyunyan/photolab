<script setup lang="ts">
import MainSlider from "./MainSlider.vue";
import Promo from "./Promo.vue";

import { PromoImg1, PromoImg2 } from "../public/images";
</script>

<template>
  <section class="mb-[30px]">
    <div class="container mx-auto">
      <div class="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
        <CategoryNav />

        <div class="w-full max-w-lg lg:max-w-[734px] mx-auto">
          <MainSlider />
        </div>

        <section
          class="flex flex-col lg:flex-row xl:flex-col gap-y-[30px] gap-x-[30px] w-full mx-auto h-[auto] lg:max-w-[734px] sm:max-w-[512px]"
        >
          <Promo
            :image="PromoImg1"
            imageStyles="top-3 -right-1"
            text="Save 35% all dslr cameras"
          />

          <Promo
            :image="PromoImg2"
            imageStyles="top-3 -right-4"
            text="Save 25% mirrorless cameras"
          />
        </section>
      </div>
    </div>
  </section>
</template>
