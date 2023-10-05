import { createRouter, createWebHistory } from 'vue-router'
import HomeMovies from '../views/HomeMovies.vue'
import FavoriteList from '../views/FavoriteList.vue'
import MovieDetail from '../views/MovieDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home Movies',
      component: HomeMovies,
    },
    {
      path: '/favorites',
      name: 'Favorite List',
      component: FavoriteList,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: MovieDetail,
    },
  ]
})
export default router
