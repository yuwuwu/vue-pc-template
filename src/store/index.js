import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/public'
import { getToken, setToken, removeToken } from '@/utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    menu: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    }
  },
  actions: {
    // 登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        var obj = {
          username: userInfo.username,
          password: userInfo.password
        }
        if (obj.username === 'admin' && obj.password === 'admin') {
          setToken('admin')
          resolve(true)
        } else {
          login(obj).then(response => {
            if (response.data.code === 1) {
              commit('SET_NAME', response.data.data.user.name)
              setToken(response.data.data.JSESSIONID)
              resolve(response)
            } else {
              resolve()
            }
          }).catch(error => {
            reject(error)
          })
        }
      })
    },
    // 获取用户信息
    GetUserInfo({ commit, userInfo }) {
      //   return new Promise((resolve, reject) => {
      //     getUserInfo().then(response => {
      //       const data = response.data
      //       sessionStorage.setItem('menu', JSON.stringify(data.data))
      //       commit('SET_MENU', data.data)
      //       commit('SET_NAME', localStorage.getItem('name'))
      //       resolve(response)
      //     }).catch(error => {
      //       reject(error)
      //     })
      //   })

      var arr = [
        {
          id: '1',
          name: '测试1',
          icon: 'tech',
          subMenus: [
            {
              id: '12',
              name: '测试页面1',
              href: '/test/test'

            }
          ]
        },
        {
          id: '2',
          name: '测试2',
          icon: 'tech',
          subMenus: [
            {
              id: '22',
              name: '测试页面2',
              href: '/index/index'

            }
          ]
        }
      ]
      commit('SET_MENU', arr)
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout().then(() => {
        this.state.app.visitedViews = []
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_MENU', [])
        removeToken()
        resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    }
  },
  modules: {
  }
})
