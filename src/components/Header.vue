<script setup>
import { useMainStore } from '../stores/MainStore.js'

const mainStore = useMainStore()

const { isDeviceMobile } = mainStore

const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8 header">
    <router-link to="/" class="flex items-center gap-4">
      <!-- <img src="/logo.png" alt="Logo" class="w-10" /> -->
      <div class="header__text">
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </router-link>

    <ul class="flex items-center gap-10 header__list" v-auto-animate>
      <router-link
        to="/favorites"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/heart.svg" alt="Cart" />
        <span v-if="isDeviceMobile">Закладки</span>
      </router-link>

      <router-link
        to="/profile"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/profile.svg" alt="Cart" />
        <span v-if="isDeviceMobile">Профиль</span>
      </router-link>

      <li
        v-auto-animate
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b v-if="isDeviceMobile">{{ totalPrice + ' руб.' }}</b>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
@media screen and (max-width: 1200px) {
  .header {
    flex-direction: column;
    align-items: flex-end;

    a {
      margin-bottom: 10px;
    }

    .header__list {
      justify-content: flex-end;

      align-items: center;
      a {
        margin-bottom: 0px;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .header__text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
