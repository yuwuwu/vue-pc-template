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
          children: [

          ]
        },
        {
          id: '2',
          name: '一级路由',
          icon: "c",
          children: [
            {
              id: '22',
              name: '二级路由1',
              href: "11",
              children: [
              ]

            },
            {
              id: '22',
              name: '二级路由2',
              children: [
                {
                  id: '22',
                  name: '三级路由',
                  href: '/index/index'

                }
              ]

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
