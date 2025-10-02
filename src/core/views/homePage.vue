<script lang="ts" setup>
import { ref, computed } from 'vue';
import { projects } from '@/core/constants/projects';

// const ITEMS_PER_PAGE = 6;

// Pagination state
// const currentPage = ref(1);
// const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

// const handlePage = (page: number) => {
//   if (page < 1) page = 1;
//   if (page > totalPages) page = totalPages;
//   currentPage.value = page;
// };

// Computed current projects
// const startIndex = computed(() => (currentPage.value - 1) * ITEMS_PER_PAGE);
// const currentProjects = computed(() =>
//   projects.slice(startIndex.value, startIndex.value + ITEMS_PER_PAGE)
// );
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="relative w-full h-screen">
      <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/assets/videos/homeVideo.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/40" />

      <div
        class="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4"
      >
        <h1 class="text-3xl md:text-5xl font-bold tracking-wide">
          A PLACE TO REFLECT
        </h1>
        <h2 class="text-2xl md:text-4xl font-light mt-2">A PLACE TO RELATE</h2>
      </div>
    </div>

    <!-- Projects Section -->
    <section class="relative w-full py-20 bg-gray-50">
      <div class="mx-auto px-6 max-w-7xl">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Explore Projects
        </h2>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="home in projects"
            :key="home.title"
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl"
          >
            <!-- Image -->
            <div class="h-64 w-full overflow-hidden relative">
              <img
                :src="home.src"
                :alt="home.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col justify-between h-64">
              <div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800">
                  {{ home.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">{{ home.description }}</p>
              </div>
              <a
                :href="home.href"
                class="mt-auto w-full text-center bg-[#1d4c6d] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#153a54] transition"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <!-- <div class="flex justify-center items-center">
          <ul
            class="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mt-10 mb-4"
          >
            <li>
              <button
                @click="handlePage(1)"
                class="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
              >
                First
              </button>
            </li>
            <li>
              <button
                @click="handlePage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                Prev
              </button>
            </li>

            <li
              v-for="page in totalPages"
              :key="page"
            >
              <button
                @click="handlePage(page)"
                :class="[
                  'flex justify-center font-semibold px-3.5 py-2 rounded transition border-2',
                  currentPage === page
                    ? 'text-primary border-primary dark:border-primary dark:text-white-light'
                    : 'text-dark border-white-light dark:border-[#191e3a] hover:text-primary dark:hover:border-primary dark:hover:text-white-light'
                ]"
              >
                {{ page }}
              </button>
            </li>

            <li>
              <button
                @click="handlePage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </li>
            <li>
              <button
                @click="handlePage(totalPages)"
                class="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
              >
                Last
              </button>
            </li>
          </ul>
        </div> -->
      </div>
    </section>

  </div>
</template>
