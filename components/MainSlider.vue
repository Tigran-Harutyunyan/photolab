<script setup lang="ts">
// TODO move special offers to mongoDB
const sliderData = [
  {
    id: 1,
    img: "/images/camera.png",
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    id: 2,
    img: "/images/camera.png",
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    id: 3,
    img: "/images/camera.png",
    preTitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];
</script>

<template>
  <Swiper
    class="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[10px] overflow-hidden drop-shadow-2xl"
    :modules="[SwiperPagination]"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
  >
    <SwiperSlide v-for="slide in sliderData" :key="slide.id">
      <div class="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
        <div class="w-full lg:flex-1">
          <div class="mb-1 text-center uppercase lg:text-left">
            {{ slide.preTitle }}
          </div>
          <div
            class="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20"
          >
            {{ slide.titlePart1 }}
            <br />
            {{ slide.titlePart2 }}
            <br />
            {{ slide.titlePart3 }}
          </div>
          <button
            class="hidden lg:flex mx-auto btn btn-accent lg:mx-0"
            type="button"
          >
            {{ slide.btnText }}
          </button>
        </div>

        <div class="flex-1">
          <img
            :alt="slide.preTitle"
            class="xl:absolute xl:-right-16 xl:-bottom-12"
            src="/images/camera.png"
          />
        </div>

        <button class="lg:hidden mx-auto btn btn-accent lg:mx-0" type="button">
          {{ slide.btnText }}
        </button>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
