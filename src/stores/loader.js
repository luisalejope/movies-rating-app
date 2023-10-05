import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
  // DATA
  const loader = ref(false)

  // COMPUTED
  const getLoaderStatus = computed(() => loader.value)

  // METHODS
  function handlerLoader() {
    loader.value = !loader.value;
    
  }

  return { loader, getLoaderStatus, handlerLoader }
})