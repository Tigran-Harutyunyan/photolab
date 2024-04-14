<script setup lang="ts">
import { FiX } from "@/components/ui/icons";
const emit = defineEmits(["close"]);

import { useMain } from "@/store/main";

const { categories } = storeToRefs(useMain());

const currentCategoryId = computed(() => {
  return useRoute().params?.categoryId;
});
</script>

<template>
  <div class="p-8 w-full h-full bg-primary">
    <div class="flex justify-end mb-8 cursor-pointer" @click="emit('close')">
      <FiX class="text-3xl" />
    </div>
    <div class="flex flex-col gap-y-8">
      <NuxtLink
        v-for="category in categories"
        :key="category._id"
        @click="emit('close')"
        class="font-medium uppercase"
        :class="{ 'text-accent': currentCategoryId === String(category._id) }"
        :to="`/category/${category._id}`"
      >
        {{ category?.title }} cameras
      </NuxtLink>
    </div>
  </div>
</template>
