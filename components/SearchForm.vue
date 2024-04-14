<script setup lang="ts">
import { FiSearch } from "@/components/ui/icons";

const searchTerm = ref();

const route = useRoute();

const handleSubmit = () => {
  if (searchTerm.value?.length > 0) {
    navigateTo(`/search?query=${searchTerm.value}`);
  } else {
    navigateTo("/");
  }
};

onMounted(() => {
  const search = new URLSearchParams(location?.search);
  if (search.has("query")) {
    searchTerm.value = search.get("query");
  }
});

watch(
  () => route.fullPath,
  () => {
    const search = new URLSearchParams(location?.search);
    if (search.has("query")) {
      searchTerm.value = search.get("query");
    } else {
      searchTerm.value = "";
    }
  }
);
</script>

<template>
  <form class="relative w-full" @submit.prevent="handleSubmit">
    <input
      class="input max-h-[40px]"
      placeholder="search for a product..."
      type="text"
      v-model="searchTerm"
    />
    <button
      class="absolute top-0 right-0 px-5 rounded-tl-none rounded-bl-none btn btn-accent max-h-[40px]"
      type="submit"
    >
      <FiSearch class="text-xl" />
    </button>
  </form>
</template>
