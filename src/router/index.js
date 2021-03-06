import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const MainComp = () => import('../components/MainComp')

const routes = [
  {
    path: '/todo/:id',
    name: 'todo',
    component: MainComp
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
