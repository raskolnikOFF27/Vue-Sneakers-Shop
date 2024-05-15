import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import HomePage from './pages/Home.vue'
import FavoritesPage from './pages/Favorites.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/favorites', name: 'favorites', component: FavoritesPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
