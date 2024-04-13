<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import type { TCategory } from "@/types";

import { useMain } from "@/store/main";

const { setCategories } = useMain();

const { find } = useStrapi();

const { data } = await find("categories");

if (data && Array.isArray(data)) {
  setCategories(data as TCategory[]);
}
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
