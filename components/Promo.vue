<script setup lang="ts">
type Props = {
  text: string;
  image: string;
  imageStyles?: string;
};
const { text, image, imageStyles } = defineProps<Props>();
</script>

<template>
  <section
    class="grad flex-1 h-[250px] rounded-[10px] overflow-hidden relative p-6 min-h-[250px]"
  >
    <div class="flex flex-col max-w-[144px] h-full justify-center">
      <div class="text-[20px] uppercase font-medium leading-tight mb-4">
        {{ text }}
      </div>
      <NuxtLink class="uppercase text-accent" href="#"> Shop now </NuxtLink>
    </div>

    <img
      alt="Promo image"
      :class="`absolute z-20 ${imageStyles}`"
      :src="image"
    />
  </section>
</template>
