<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import type { TCategory } from "@/types";

import { useMain } from "@/store/main";

const { setCategories } = useMain();

// const { data: categories } = await useFetch("/api/categories");

// if (categories.value && Array.isArray(categories.value)) {
//   setCategories(categories.value as TCategory[]);
// }
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
