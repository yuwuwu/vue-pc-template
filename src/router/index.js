/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 20:28:11
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Test from '../views/test/index.vue'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "主页", keepAlive: true },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: "登录", keepAlive: true },
    component: Login
  },
  {
    path: '/test',
    component: Layout,
    name: '测试页面1',
    children: [
      { path: 'test', meta: { title: "测试", keepAlive: false }, name: '测试页面2', component: Test }
    ]
  },
  {
    path: '/index',
    component: Layout,
    name: '测试页面2',
    children: [
      { path: 'index', meta: { title: "测试", keepAlive: false }, name: '测试页面2', component: Index }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫，修改页面标题为路由mate设置的值
router.beforeEach((to, from, next) => {
  document.title = to?.meta?.title ?? 'vue-pc-template'
  next()
})
export default router
