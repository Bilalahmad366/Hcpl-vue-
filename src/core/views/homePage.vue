<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="relative w-full h-screen">
      <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop playsinline>
        <source src="/assets/videos/homeVideo.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/40" />

      <div class="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <h1 class="text-3xl md:text-5xl font-bold tracking-wide">
          A PLACE TO REFLECT
        </h1>
        <h2 class="text-2xl md:text-4xl font-light mt-2">A PLACE TO RELATE</h2>
      </div>
    </div>
    <!-- about Us  -->
    <section>
      <aboutUs />
    </section>
    <!-- Projects Section -->
    <section class="relative w-full py-20 bg-gray-50">
      <div class="mx-auto px-6 max-w-7xl">
        <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
          Explore Projects
        </h2>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="home in projects" :key="home.title"
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl">
            <!-- Image -->
            <div class="h-64 w-full overflow-hidden relative">
              <img :src="home.src" :alt="home.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col justify-between h-64">
              <div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800">
                  {{ home.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">{{ home.description }}</p>
              </div>
              <a :href="home.href"
                class="mt-auto w-full text-center bg-[#1d4c6d] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#153a54] transition">
                Discover More
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>

  </div>
</template>
<script lang="ts" setup>
import { useMeta } from '../composables/use-meta';
import { projects } from '@/core/constants/projects';
import aboutUs from '../components/aboutUs.vue';
useMeta({ title: 'Home Page' });


</script>