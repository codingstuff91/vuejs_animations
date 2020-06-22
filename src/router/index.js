import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fade from '@/components/Fadetransition.vue';
import Gsap from '@/components/GsapAnimations.vue';
import Stagger from '@/components/StaggerAnimation.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fade',
    name: 'fade',
    component : Fade
  },
  {
    path: '/gsap',
    name: 'gsap',
    component : Gsap
  },
  {
    path: '/stagger',
    name: 'stagger',
    component : Stagger
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
