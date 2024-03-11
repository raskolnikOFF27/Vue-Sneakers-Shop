<script setup>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-40"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div class="flex flex-col gap-5 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dash"></div>
        <b>12990 руб.</b>
      </div>

      <div class="flex gap-2">
        <span>Налог НДС:</span>
        <div class="flex-1 border-b border-dash"></div>
        <b>1024 руб.</b>
      </div>

      <button
        disabled="true"
        class="mt-4 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
