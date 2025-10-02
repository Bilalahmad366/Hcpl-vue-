<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Projects } from '@/core/constants/projects';
import { computed } from 'vue';

const route = useRoute();
const projectKey = route.params.project as string;

const project = computed<any>(() => {
  return Projects[projectKey.toLowerCase()] || null;
});
</script>

<template>
  <div v-if="project">
    <!-- Background Image & Overlay -->
    <img class="fixed top-0 left-0 w-full h-full object-cover -z-10" :src="project.src" alt="Background" />
    <div class="fixed inset-0 bg-black/60 -z-10" />

    <!-- Scrollable Content -->
    <div class="relative z-10 flex flex-col items-center text-center px-6 py-20 space-y-16">
      <!-- Animated Titles -->
      <div class="h-24 relative my-6">
        <h1 class="fade-loop text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          {{ project.titles[0] }}
        </h1>
        <h1 class="fade-loop-delay text-4xl md:text-6xl font-extrabold text-white tracking-wide absolute inset-0">
          {{ project.titles[1] }}
        </h1>
      </div>

      <!-- Description Section -->
      <div class="max-w-4xl bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-white fade-in">
        <p class="text-lg md:text-xl leading-relaxed">{{ project.description }}</p>
      </div>
    </div>

    <!-- Amenities & Features -->
    <section class="relative w-full py-16 bg-gray-50">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        <!-- Left Side - Text -->
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-wider">Amenities & Features</h2>
          <ul class="space-y-3 text-lg text-gray-700">
            <li v-for="(item, index) in project.amenities" :key="index" class="flex items-start">
              <span class="w-3 h-3 bg-black rounded-full mt-2 mr-3"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Right Side - Image -->
        <div>
          <img :src="project.src" alt="Project Image" class="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>

  </div>

  <!-- Project Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center text-2xl font-bold">
    Project not found 🚫
  </div>
</template>

<style scoped>
/* Fade-loop animation for first title */
@keyframes fadeLoop {
  0%, 50%, 100% { opacity: 0; }
  25%, 75% { opacity: 1; }
}
.fade-loop {
  animation: fadeLoop 10s infinite;
}

/* Fade-loop animation for second title (delayed) */
@keyframes fadeLoopDelay {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
.fade-loop-delay {
  animation: fadeLoopDelay 10s infinite;
}

/* Fade-in animation for description */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.fade-in {
  animation: fadeIn 0.9s ease-out forwards;
}
</style>
