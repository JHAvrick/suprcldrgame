import { createApp } from 'vue'
import './style.css'
import { createWebHistory, createRouter } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

// import Home from './components/Home.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'

const routes = [
  { path: '/', component: PrivacyPolicy },
  { path: '/privacypolicy', component: PrivacyPolicy },
]

export const router = createRouter({
  history: createWebHistory('/suprcldrgame/'),
  routes,
})

const app = createApp(App);

app.use(MotionPlugin)
app.use(router)
app.mount('#app')