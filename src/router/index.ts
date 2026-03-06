import BookmarksPage from '@/pages/BookmarksPage.vue'
import HomePage from '@/pages/HomePage.vue'
import MoviesPage from '@/pages/MoviesPage.vue'
import TvPage from '@/pages/TvPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', component: HomePage, path: '/' },
    { name: 'movies', component: MoviesPage, path: '/movies' },
    { name: 'tvseries', component: TvPage, path: '/tvseries' },
    { name: 'bookmarks', component: BookmarksPage, path: '/bookmarks' },
  ],
})

export default router
