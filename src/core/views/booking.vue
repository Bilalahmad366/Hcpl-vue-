<template>
  <div class="relative w-full min-h-screen">
    <!-- Background Video -->
    <video class="absolute top-0 left-0 w-full h-full object-cover -z-10" autoplay muted loop playsinline>
      <source src="https://eighteenpk.com/wp-content/uploads/2024/10/EighteenHousingSociety-June-2024.mp4"
        type="video/mp4" />
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 -z-10" />

    <!-- Scrollable Content -->
    <div class="relative z-10 flex flex-col items-center text-center text-white px-4 py-20">
      <!-- Heading -->
      <h2 class="text-4xl md:text-6xl font-bold italic mb-4">It’s happening</h2>
      <h3 class="text-2xl md:text-4xl font-extrabold mb-10">
        YOUR DREAM <span class="font-light">HOME AWAITS</span>
      </h3>

      <!-- Features -->
      <div class="flex flex-col md:flex-row gap-8 mb-16">
        <div class="flex flex-col items-center">
          <p class="font-bold text-lg">10 MINS</p>
          <p class="text-sm">FROM AIRPORT</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="font-bold text-lg">ACTIVE</p>
          <p class="text-sm">COMMUNITY</p>
        </div>

        <div class="flex flex-col items-center">
          <p class="font-bold text-lg">18 Hole</p>
          <p class="text-sm">GOLF COURSE</p>
        </div>
      </div>

      <!-- Form -->
      <div class="w-full max-w-5xl bg-white-dark/55 backdrop-blur-lg rounded-xl p-6">
        <RegisterInterest />
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { useMeta } from '../composables/use-meta';
import RegisterInterest from '@/core/components/RegisterInterest.vue';
useMeta({ title: 'booking' });
</script>
