<template>
  <div class="min-h-screen relative">
    <!-- Background Video -->
    <div class="relative w-full h-[100vh]">
      <video class="absolute top-0 left-0 w-full h-full object-cover object-bottom brightness-90" autoplay muted loop
        playsinline>
        <source src="/assets/videos/smartHomes.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/40" />
    </div>

  
    <!-- Smart Homes Section -->
    <smartHomeListing />
  </div>
</template>
<script lang="ts" setup>
import { useMeta } from '../composables/use-meta';
import smartHomeListing from '../components/smartHomeListing.vue';
useMeta({ title: 'Smart Homes' });


</script>
