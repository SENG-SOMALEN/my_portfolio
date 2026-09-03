import { createRouter, createWebHistory } from 'vue-router'
import PortfolioLayout from '../Layouts/portfolio.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Project from '../pages/Project.vue'
import Skill from '../pages/Skill.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    {
      path: '/',
      component: PortfolioLayout,
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'about', name: 'About', component: About },
        { path: 'projects', name: 'Project', component: Project },
        { path: 'skills', name: 'Skill', component: Skill },
        { path: 'contact', name: 'Contact', component: Contact },
      ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router