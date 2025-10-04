<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Menu, X, Search } from 'lucide-vue-next';
import { projects } from '@/core/constants/headerData';
import { useRoute } from 'vue-router';

const isOpen = ref(false);
const isSearch = ref(false);
const scrolled = ref(false);

const route = useRoute();

// Scroll listener
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Logo based on route
const logoSrc = computed(() =>
  route.path === '/smart-homes' ? '/assets/SMARTHOMES.png' : '/assets/logo.png'
);

// Pagination / limited projects for overlay
const overlayProjects = computed(() => projects.slice(0, 9));
</script>

<template>
  <header
    :class="`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${scrolled ? 'bg-[#ffff] shadow-md' : 'bg-transparent'}`"
  >
    <nav class="px-6 lg:px-12 py-6 flex items-center justify-between transition-all duration-500">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img :src="logoSrc" alt="Eighteen" class="h-16 w-auto" />
      </a>

      <!-- Desktop Nav Links -->
      <div
        :class="`hidden lg:flex items-center space-x-8 font-semibold ${scrolled ? 'text-black' : 'text-white'}`"
      >
        <a href="/" class="hover:text-gray-300">Home</a>
        <a href="/smart-homes" class="hover:text-gray-300">Smart Homes</a>
        <a href="/contact" class="hover:text-gray-300">Contact Us</a>

        <a href="/booking">
          <button
            :class="`ml-4 px-5 py-2 border rounded hover:bg-white hover:text-black ${
              scrolled ? 'text-black border-black' : 'text-white border-white'
            }`"
          >
            Book Now
          </button>
        </a>

        <button @click="isOpen = true" class="ml-4 focus:outline-none lg:hidden">
          <Menu size="28" />
        </button>
        <button @click="isSearch = true" class="focus:outline-none">
          <Search size="26" />
        </button>
      </div>

      <!-- Mobile Icons -->
      <div class="lg:hidden flex items-center space-x-4 text-black">
        <button @click="isOpen = true" class=" focus:outline-none">
          <Menu size="28" />
        </button>
        <button @click="isSearch = true" class="focus:outline-none">
          <Search size="24" />
        </button>
      </div>
    </nav>

    <!-- Fullscreen Overlay Menu -->
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/95 text-white flex flex-col items-end pr-16 py-10 z-50"
        >
          <button @click="isOpen = false" class="text-white mb-6 lg:pr-9 ">
            <X size="32" />
          </button>

          <div class="flex flex-col text-right space-y-2 text-xl tracking-wide overflow-auto">
            <a href="/" class="hover:text-gray-400 lg:hidden">Home</a>
            <a href="/smart-homes" class="hover:text-gray-400 lg:hidden">Smart Homes</a>
            <a href="/contact" class="hover:text-gray-400 lg:hidden">Contact Us</a>

            <!-- <div class="flex flex-col space-y-2">
              <a
                v-for="project in overlayProjects"
                :key="project.href"
                :href="project.href"
                class="hover:text-gray-400 transition"
              >
                {{ project.title }} +
              </a>
            </div> -->

            <a href="/booking">
              <button class="mt-6 px-5 py-2 border lg:hidden border-white text-white rounded hover:bg-white hover:text-black transition">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </transition>
    </teleport>

    <!-- Search Overlay -->
    <teleport to="body">
      <transition name="slide-down">
        <div
          v-if="isSearch"
          class="fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-6 py-6 flex items-center space-x-4"
        >
          <input
            type="text"
            placeholder="Search..."
            autofocus
            class="flex-1 border-b border-gray-400 focus:outline-none text-lg px-2"
          />
          <Search size="26" class="text-gray-400" />
          <button @click="isSearch = false" class="text-gray-600 hover:text-black">
            <X size="26" />
          </button>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<style>
/* Vue transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-80px);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(-80px);
  opacity: 0;
}
</style>
