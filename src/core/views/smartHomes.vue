<script lang="ts" setup>

interface SmartHome {
  id: number;
  title: string;
  image: string;
}

const smartHomesData: SmartHome[] = [
  {
    id: 1,
    title: 'Studio Apartment',
    image: '/assets/images/smart Homes/Studio apartment building.jpg',
  },
  {
    id: 2,
    title: 'One Bed Apartment',
    image: '/assets/images/smart Homes/Artboard 7.jpg',
  },
  {
    id: 3,
    title: 'Two Bed Apartment',
    image: '/assets/images/smart Homes/Artboard 9.jpg',
  },
];
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Background Video -->
    <div class="relative w-full h-[100vh]">
      <video
        class="absolute top-0 left-0 w-full h-full object-cover object-bottom brightness-90"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/assets/videos/smartHomes.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/40" />
    </div>

    <!-- Smart Homes Section -->
    <section class="relative w-full py-20 bg-gray-50">
      <div class="mx-auto px-6 max-w-7xl">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Explore Our Smart Homes
        </h2>

        <!-- Dynamic Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="home in smartHomesData"
            :key="home.id"
            class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl"
          >
            <!-- Content -->
            <div class="p-6 flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800">
                  {{ home.title }}
                </h3>
              </div>
            </div>

            <!-- Image -->
            <div class="h-64 w-full overflow-hidden relative">
              <img
                :src="home.image"
                :alt="home.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
