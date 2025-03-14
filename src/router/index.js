import { createRouter, createWebHistory } from 'vue-router';
import ComicWallView from '../views/ComicWallView.vue';
import GalleryView from '../views/GalleryView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/comic-wall',
    name: 'comic-wall',
    component: ComicWallView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes,
});

export default router;
