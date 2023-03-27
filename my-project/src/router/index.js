import { createRouter, createWebHistory } from 'vue-router'
import ProjectBuilder from '../components/ProjectBuilder.vue'

const routes = [
  {
    path: '/',
    name: 'ProjectBuilder',
    component: ProjectBuilder,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router