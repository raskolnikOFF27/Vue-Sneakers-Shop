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
      class="bg-lime-500 p-3 w-full rounded-2xl text-white hover:bg-lime-600 transition active:bg-lime-700 flex text-center justify-center items-center"
      @click="closeDrawer"
    >
      <svg
        style="transform: rotate(180deg); margin-right: 5px"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
      >
        <path
          d="M1 7H14.7143"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Вернуться назад
    </button>
  </div>
</template>

<style lang="scss"></style>
