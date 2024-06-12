import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Blank from '../components/Blank.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/blank',
    name: 'Blank',
    // This route is for the blank page after login
    component: Blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
