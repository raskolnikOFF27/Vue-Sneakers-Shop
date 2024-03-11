<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})

const onClickAdd = () => {
  alert('Добавить в корзину!')
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
      :isAdded="true"
      :onClickAdd="onClickAdd"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>
