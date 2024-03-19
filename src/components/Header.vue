<script setup>
const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }}</b>
      </li>
      <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li>
      <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/profile.svg" alt="Cart" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
