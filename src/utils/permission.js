/*
 * @Author: yuyongxing
 * @Date: 2021-12-18 16:35:31
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 19:26:45
 * @Description:
 */
import router from '../router'
import store from '../store'
import NProgress from 'nprogress' // Progress 进度条
import {
  Message
} from 'element-ui'
import {
  getToken
} from './auth' // 验权

const whiteList = ['/login', '/download'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      if (store.state.menu.length === 0) {
        store.dispatch('GetUserInfo').then(res => { // 拉取用户信息
          next()
        }).catch(() => {
          Message.error('验证失败,请重新登录')
          store.dispatch('LogOut').then(() => {
            next({
              path: '/login'
            })
            location.reload()
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
