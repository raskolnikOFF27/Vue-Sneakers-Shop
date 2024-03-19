<script setup>
import { onMounted, ref, watch, reactive, provide } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'

const items = ref([])

const cart = ref([])

const drawerState = ref(false)

const totalPrice = cart.value.reduce((acc, item) => acc + item.price, 0)

const closeDrawer = () => {
  drawerState.value = false
}

const openDrawer = () => {
  drawerState.value = true
}

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://91e076eff4e58ce7.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://91e076eff4e58ce7.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://91e076eff4e58ce7.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://91e076eff4e58ce7.mokky.dev/sneakers`, {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
  console.log('Проект подгружен!')
})

watch(filters, fetchItems)

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})

const question = 5 !== '5'

console.log(question)

function outerFunction() {
  const x = 10
  function innerFunction() {
    const y = 20
    console.log(x + y)
  }
  innerFunction()
}
outerFunction()
</script>

<template>
  <Drawer v-if="drawerState" />
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex gap-4">
          <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
            <option value="title">По названию</option>
            <option value="price">По цене (Дешевые)</option>
            <option value="-price">По цене (Дорогие)</option>
          </select>

          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" alt="search" />
            <input
              @change="onChangeSearchInput"
              class="border rounded-md py-1.5 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>

      <div class="mt-10">
        <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
