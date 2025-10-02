<template>
  <!-- Hero Section with Background Image -->
  <div class="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('https://eighteenpk.com/wp-content/themes/iodigital_eighteen/web/img/bg/bg.jpg')">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/65 backdrop-blur-sm" />

    <!-- Content -->
    <div class="relative z-10 w-full py-16">
      <h1 class="text-5xl md:text-6xl font-extrabold text-white text-center mt-16 mb-12 drop-shadow-lg">
        Contact Us
      </h1>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 lg:px-20 mx-auto">
        <!-- Left Side (Info Cards) -->
        <div class="space-y-4">
          <!-- Sales -->
          <div class="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
            <h2 class="flex items-center text-2xl font-bold mb-2">
              <Icon icon="lucide:phone" class="text-lime-400 mr-3" /> Sales
            </h2>
            <p>
              <Icon icon="lucide:mail" class="inline mr-2" /> info@thehcpl.com
            </p>
            <p>+92 331 7072470</p>
          </div>

          <!-- Customer Service -->
          <div class="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
            <h2 class="flex items-center text-2xl font-bold mb-2">
              <Icon icon="lucide:users" class="text-lime-400 mr-3" /> Customer Service
            </h2>
            <p>
              <Icon icon="lucide:mail" class="inline mr-2" /> crm@thehcpl.com
            </p>
          </div>

          <!-- Human Resources -->
          <div class="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
            <h2 class="flex items-center text-2xl font-bold mb-2">
              <Icon icon="lucide:users" class="text-lime-400 mr-3" /> Human Resources
            </h2>
            <p>
              <Icon icon="lucide:mail" class="inline mr-2" /> careers@thehcpl.com
            </p>
          </div>

          <!-- Corporate Office -->
          <div class="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
            <h2 class="flex items-center text-2xl font-bold mb-2">
              <Icon icon="lucide:map-pin" class="text-lime-400 mr-3" /> Corporate Office
            </h2>
            <p>E-Block, Plot No:53-E, Central Avenue, Bahria Town Phase 6 Road, National Police Foundation 0-9
              Islamabad, 46000</p>
          </div>
        </div>

        <!-- Right Side (Map) -->
        <div
          class="w-full h-full bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.348169388373!2d72.96477411500932!3d33.64078598074392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9f3a1b5c37fb%3A0x5c54a8d946b6e4b2!2sHCPL%20Developers%20%26%20Marketing!5e0!3m2!1sen!2s!4v1701612345678!5m2!1sen!2s"
            width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- Additional Offices -->
      <div class="flex flex-col lg:flex-row gap-6 my-4 w-full px-2 lg:px-20 mx-auto">
        <!-- Karachi Office -->
        <div class="p-6 flex-1 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
          <h2 class="text-2xl font-bold mb-2">Karachi</h2>
          <p>Plot No. 2-C, 1st Floor, Muslim Commercial, Khayaban-e-Ittehad, DHA – Phase 6, Karachi</p>
        </div>

        <!-- Lahore Office -->
        <div class="p-6 flex-1 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 text-white">
          <h2 class="text-2xl font-bold mb-2">Lahore</h2>
          <p>46-A, XX Block, Khayaban-e-Iqbal Road, DHA – Phase 3, Lahore</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Register Interest Section -->
  <section class="relative bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://eighteenpk.com//wp-content/uploads/2021/07/villa_why-1.jpg')">
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Left Content -->
      <div class="text-white space-y-4">
        <h4 class="uppercase tracking-widest text-sm font-semibold">
          Pakistan`s First Lifestyle Destination
        </h4>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Register Your Interest Now
        </h1>
        <p class="text-gray-200 max-w-lg">
          Be part of Eighteen’s vision. Share your details and our team will connect with you soon.
        </p>
      </div>

      <!-- Right Form -->
      <div class="bg-white-dark/55 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full">
        <RegisterInterest />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import RegisterInterest from '@/core/components/RegisterInterest.vue';
import { Icon } from '@iconify/vue';
import { useMeta } from '../composables/use-meta';
useMeta({ title: 'Contact Us' });
</script>