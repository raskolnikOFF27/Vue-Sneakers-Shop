<script setup>
import { inject } from 'vue'
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
const { closeDrawer } = inject('cartActions')
const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
  cartButtonDisabled: Boolean,
  isCreatingOrder: Boolean
})

const emit = defineEmits(['createOrder'])
</script>

<template>
  <div @click="closeDrawer" class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-40"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div class="flex flex-col gap-5 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dash"></div>
        <b>{{ props.totalPrice + ' ₽' }}</b>
      </div>

      <div class="flex gap-2">
        <span>Налог НДС:</span>
        <div class="flex-1 border-b border-dash"></div>
        <b>{{ props.vatPrice + ' ₽' }}</b>
      </div>

      <button
        :disabled="cartButtonDisabled"
        class="mt-4 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300"
        @click="() => emit('createOrder')"
      >
        {{ !isCreatingOrder ? 'Оформить заказ' : 'Загрузка...' }}
      </button>
    </div>
  </div>
</template>
