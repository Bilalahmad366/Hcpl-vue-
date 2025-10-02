<template>
    <div>
        <AppHeader />
        <div class="animation">
            <router-view></router-view>
        </div>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/core/components/layout/Header.vue';
import AppFooter from '@/core/components/layout/Footer.vue';


</script>

<style scoped></style>
