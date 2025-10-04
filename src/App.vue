<template>
    <div class="main-section antialiased relative font-nunito text-sm font-normal"
       >
        <component v-bind:is="appLayout"></component>
    </div>
</template>

<script lang="ts" setup>

import appLayout from '@/layouts/app-layout.vue';

import { useMeta } from '@/core/composables/use-meta';


// meta
useMeta({ title: 'HCPL' });

</script>
