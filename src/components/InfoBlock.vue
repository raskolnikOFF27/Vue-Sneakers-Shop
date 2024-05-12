<script setup>
import { inject } from 'vue'
const { closeDrawer } = inject('cartActions')

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String
})
</script>

<template>
  <div class="flex flex-col items-center text-center max-w-xs mx-auto">
    <img height="120" width="120" :src="props.imageUrl" alt="Cart is empty" />
    <h2 class="mt-4 text-2xl font-medium">{{ props.title }}</h2>
    <p class="text-gray-400 mb-2">{{ props.description }}</p>

    <button
      class="bg-lime-500 p-3 w-full rounded-2xl text-white hover:bg-lime-600 transition active:bg-lime-700 flex text-center justify-center"
      @click="closeDrawer"
    >
      Вернуться назад
    </button>
  </div>
</template>

<style lang="scss"></style>
