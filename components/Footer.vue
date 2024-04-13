<script setup lang="ts">
import FaFacebook from "@/components/ui/icons/FaFacebook.vue";
import FaInstagram from "@/components/ui/icons/FaInstagram.vue";
import FaTwitter from "@/components/ui/icons/FaTwitter.vue";
import FaYoutube from "@/components/ui/icons/FaYoutube.vue";
</script>

<template>
  <footer class="pt-16 bg-primary">
    <div class="container mx-auto">
      <div class="text-center">
        <h2 class="mb-6 font-semibold uppercase h2">
          Subscribe to our newsletter
        </h2>
        <p class="text-white/70">
          Be the first to get the latest news about trends, promotions and much
          more!
        </p>
      </div>

      <form
        class="flex flex-col gap-5 mx-auto my-14 w-full max-w-3xl sm:flex-row"
      >
        <input class="input" placeholder="Your email address" type="text" />
        <button class="btn btn-accent min-w-[150px]" type="button">Join</button>
      </form>

      <div
        class="flex gap-x-6 mx-auto mb-9 max-w-max text-base capitalize text-white/60"
      >
        <a class="transition-all hover-text-white" href="#"> Returns Policy </a>
        <a class="transition-all hover-text-white" href="#">
          Track Your Order
        </a>
        <a class="transition-all hover-text-white" href="#">
          Shipping & delivery
        </a>
      </div>

      <div class="flex gap-x-6 mx-auto mb-16 max-w-max text-lg">
        <a class="transition-all hover-text-white" href="#">
          <FaYoutube />
        </a>
        <a class="transition-all hover-text-white" href="#">
          <FaInstagram />
        </a>
        <a class="transition-all hover-text-white" href="#">
          <FaTwitter />
        </a>
        <a class="transition-all hover-text-white" href="#">
          <FaFacebook />
        </a>
      </div>
    </div>

    <div class="py-10 border-t border-t-white/10">
      <div class="container mx-auto">
        <div class="text-sm text-center text-white/60">
          Copyright &copy; Photolab 2024. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
