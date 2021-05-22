import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const TestRouter = () => import('../components/TestRouter')

const routes = [
  {
    path: '/:id',
    name: 'TestRouter',
    component: TestRouter
  }
]

const router = new VueRouter({
  routes
})

export default router
