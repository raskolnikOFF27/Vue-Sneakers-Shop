import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const isDeviceMobile = computed(() => {
    return window.innerWidth <= 720
  })

  watchEffect(() => {
    window.addEventListener('resize', () => {
      isDeviceMobile.value = window.innerWidth <= 720
    })
  })

  return {
    isDeviceMobile
  }
})
