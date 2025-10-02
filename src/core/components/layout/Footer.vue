<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="bg-[#1d4c6d] text-gray-300 pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      
      <!-- Column 1 - Office -->
      <div>
        <h3 class="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          HCPL Developers & Marketing
        </h3>
        <p class="text-sm leading-6">
          E-Block, Plot No:53-E, Central Avenue, Bahria Town Phase 6, Islamabad, Pakistan
        </p>
      </div>

      <!-- Column 2 - Contact -->
      <div>
        <h3 class="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          Contact Us
        </h3>
        <p class="text-sm leading-6">
          Phone: <span class="font-semibold">+92 331 7072470</span><br />
          Email:
          <a
            href="mailto:info@hcpldevelopers.com"
            class="hover:underline font-semibold"
          >
            info@hcpldevelopers.com
          </a><br />
          WhatsApp:
          <a
            href="https://wa.me/923317072470"
            target="_blank"
            class="hover:underline font-semibold"
          >
            +92 331 7072470
          </a>
        </p>
      </div>

      <!-- Column 3 - Info -->
      <div>
        <h3 class="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          Information
        </h3>
        <ul>
          <li>
            <a href="/privacy-policy" class="hover:underline text-sm font-medium">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions" class="hover:underline text-sm font-medium">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="border-t border-gray-600 mt-10 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Social Icons -->
      <div class="flex space-x-6 mb-4 md:mb-0">
        <a href="https://facebook.com/HCPLOfficial" target="_blank">
          <Icon icon="mdi:facebook" class="hover:text-white text-lg" />
        </a>
        <a href="https://twitter.com/HCPLOfficial" target="_blank">
          <Icon icon="mdi:twitter" class="hover:text-white text-lg" />
        </a>
        <a href="https://instagram.com/hcplofficial" target="_blank">
          <Icon icon="mdi:instagram" class="hover:text-white text-lg" />
        </a>
        <a href="https://linkedin.com/company/hcpl" target="_blank">
          <Icon icon="mdi:linkedin" class="hover:text-white text-lg" />
        </a>
        <a href="https://youtube.com/HCPLOfficial" target="_blank">
          <Icon icon="mdi:youtube" class="hover:text-white text-lg" />
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-400">
        © {{ new Date().getFullYear() }} HCPL Developers & Marketing. All rights reserved.
      </p>
    </div>
  </footer>
</template>
