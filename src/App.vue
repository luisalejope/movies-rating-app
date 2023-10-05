<script setup>
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLoaderStore } from '@/stores/loader';

import GenericLoader from '@/components/global/GenericLoader.vue';
import NavBar from '@/components/NavBar.vue'


// STORES
const loadStore = useLoaderStore();

const { getLoaderStatus } = storeToRefs(loadStore);

</script>

<template>
  <div id="poc-container" class="mb-xl">
    <NavBar />
    <RouterView />
    <GenericLoader v-show="getLoaderStatus" />
  </div>
</template>

<style scoped>
#poc-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>