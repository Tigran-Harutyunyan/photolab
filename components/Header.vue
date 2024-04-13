<script setup lang="ts">
import { FiMenu } from "@/components/ui/icons";
import { SlBag } from "@/components/ui/icons";
import { useCart } from "@/store/cart";

const { setIsOpen } = useCart();
const { isOpen, totalItems } = storeToRefs(useCart());

const catNavMobile = ref(false);
</script>

<template>
  <header class="fixed top-0 z-40 py-6 w-full bg-primary">
    <div class="container mx-auto">
      <div
        class="flex flex-row gap-5 justify-between mb-4 lg:items-center lg:mb-0"
      >
        <div
          class="text-3xl cursor-pointer xl:hidden"
          @click="catNavMobile = true"
        >
          <FiMenu />
        </div>

        <div
          :class="`${
            catNavMobile ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`"
        >
          <CategoryNavMobile @close="catNavMobile = false" />
        </div>

        <NuxtLink to="/">
          <div class="text-3xl font-semibold">
            PHOTO<span class="text-accent">LAB</span>
          </div>
        </NuxtLink>

        <div class="hidden w-full lg:flex lg:max-w-[734px]">
          <SearchForm />
        </div>

        <div class="flex items-center gap-x-[10px]">
          <div class="hidden uppercase xl:flex">Need help? 123 456 789</div>

          <div class="relative cursor-pointer" @click="setIsOpen(!isOpen)">
            <SlBag class="text-2xl" />

            <div
              class="bg-accent text-primary absolute min-w-[20px] min-h-[20px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracing-[-0.1em] px-[3px]"
            >
              {{ totalItems }}
            </div>
          </div>

          <div
            :class="`${
              isOpen ? 'right-0' : '-right-full'
            } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`"
          >
            <ClientOnly>
              <Cart />
            </ClientOnly>
          </div>
        </div>
      </div>

      <div class="lg:hidden">
        <SearchForm />
      </div>
    </div>
  </header>
</template>
