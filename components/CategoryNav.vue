<script setup lang="ts">
import { useMain } from "@/store/main";

const { categories } = storeToRefs(useMain());

const currentCategoryId = computed(() => {
  return useRoute().params?.categoryId;
});
</script>

<template>
  <aside class="hidden xl:flex h-[auto]">
    <div
      class="bg-primary flex flex-col w-[286px] rounded-[10px] overflow-hidden"
    >
      <div
        class="flex justify-center items-center py-4 font-semibold uppercase bg-accent text-primary"
      >
        Browse Categories
      </div>

      <div class="flex flex-col gap-y-6 p-6">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          class="uppercase cursor-pointer"
          :class="{ 'text-accent': currentCategoryId === String(category._id) }"
          :to="`/category/${category._id}`"
        >
          {{ category?.title }}
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>
