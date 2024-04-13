<script setup lang="ts">
import FiSearch from "@/components/ui/icons/FiSearch.vue";

const searchTerm = ref();

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
