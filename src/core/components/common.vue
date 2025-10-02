<template>
    <div>

        <section>

            <section v-if="isHome" class="bg-gray-50 py-16 px-6 md:px-10 lg:px-16">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 leading-snug">
                            New Off-Plan Properties <br />
                            in Dubai
                        </h2>
                        <p class="mt-6 text-lg text-gray-600">
                            Off-plan properties are those developments which are still in the planning or
                            the construction stages. Purchasing an off-plan property in Dubai (the UAE)
                            comes with certain advantages as many real estate developers in the United
                            Arab Emirates offer special promotions in the early phases, such as generous
                            post-handover payment plans.
                        </p>
                    </div>

                    <section class="bg-gray-50 py-12 px-6 md:px-12">
                        <div class="max-w-4xl mx-auto flex flex-col items-center space-y-10">
                            <div class="flex flex-row md:flex-row items-center justify-center gap-12">

                                <!-- Feature 1 -->
                                <div class="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-lime-700">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 21h18M3 10h18M3 6h18M7 10v11m10-11v11M7 6V3m10 3V3" />
                                    </svg>
                                    <span class="mt-3 text-lg font-medium text-gray-800">Brand
                                        New<br />Projects</span>
                                </div>

                                <!-- Feature 2 -->
                                <div class="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-lime-700">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M18.364 5.636a9 9 0 11-12.728 12.728A9 9 0 0118.364 5.636zM12 8.25v7.5m-3.75-3.75h7.5" />
                                    </svg>
                                    <span class="mt-3 text-lg font-medium text-gray-800">Full<br />Support</span>
                                </div>

                                <!-- Feature 3 -->
                                <div class="flex flex-col items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-14 h-14 text-lime-700">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" />
                                    </svg>
                                    <span class="mt-3 text-lg font-medium text-gray-800">Priority<br />Booking</span>
                                </div>

                            </div>

                            <!-- Button -->
                            <router-link to="/projects/off-plan">
                                <button
                                    class="bg-lime-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-lime-800 transition">
                                    Find Your Off-Plan Property in Dubai
                                </button>
                            </router-link>
                        </div>
                    </section>
                </div>
            </section>


            <section v-else class="bg-white py-16 px-6 md:px-10 lg:px-16">
                <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">
                            How to Buy an Off-Plan Property in Dubai?
                        </h2>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            When buying off-plan property directly from a developer in Dubai you get a lot of
                            benefits. Most of the real estate developers have special offers like DLD waiver
                            or free property management.
                        </p>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            For the past decade, off-plan apartments in Dubai have become very popular among
                            buyer and investors both local and foreign.
                        </p>
                        <p class="text-gray-600 leading-relaxed mb-4">
                            Off-plan property comes at much lower price than ready property and usually has
                            special payment plans with installments instead of upfront payment.
                        </p>
                    </div>

                    <!-- ✅ Right Video -->
                    <div class="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/mVMErl1p1rc"
                            title="YouTube video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </section>


        </section>


        <section class="bg-gray-50 py-16 px-6 md:px-10 lg:px-16">
            <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                <div v-for="(item, index) in propTypes" :key="index"
                    class="relative bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition hover:shadow-xl hover:scale-[1.02] duration-300">
                    <router-link :to="item.link">

                        <img :src="item.image" alt="category"
                            class="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />

                        <div class="flex items-center justify-between p-4">
                            <h3 class="text-gray-800 font-semibold text-lg">
                                {{ item.title }}
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-sky-500 group-hover:translate-x-1 transition" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <section>
            <BrandedResedency />
        </section>

        <section class="bg-gray-50 pt-6 px-6 md:px-10 lg:px-16">
            <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                <div v-for="(item, index) in categories" :key="index"
                    class="relative bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition hover:shadow-xl hover:scale-[1.02] duration-300">
                    <router-link :to="item.link">

                        <img :src="item.image" alt="category"
                            class="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />

                        <div class="flex items-center justify-between p-4">
                            <h3 class="text-gray-800 font-semibold text-lg">
                                {{ item.title }}
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-sky-500 group-hover:translate-x-1 transition" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>


        <div>
            <div class="bg-gray-50 pt-16 px-6 md:px-10 lg:px-16">
                <h1 class="text-4xl font-semibold tracking-tight text-gray-800 mb-6">
                    Best Real Estate Areas in Dubai
                </h1>
            </div>
            <BestPropertiesListing />
        </div>

        <section>
            <EmaarProperties />
        </section>
        <section>
            <HomeVideos />
        </section>
    </div>
</template>
<script setup lang="ts">
import { categories, propTypes } from '@/core/views/composables/useHome';
import BestPropertiesListing from '@/core/components/BestPropertiesListing.vue';
import BrandedResedency from '@/core/components/BrandedResedencyComponent.vue';
import EmaarProperties from '@/core/components/EmaarPropertiesComponent.vue';
import HomeVideos from '@/core/components/homeVideos.vue';
defineProps({
    isHome: {
        type: Boolean,
        default: false
    }
})


</script>