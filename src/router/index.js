import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const TestRouter = () => import('../components/TestRouter')

const routes = [
  {
    path: '/todo/:id',
    name: 'todo',
    component: TestRouter
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
