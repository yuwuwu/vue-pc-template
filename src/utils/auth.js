/*
 * @Author: yuyongxing
 * @Date: 2021-12-18 16:54:16
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 16:55:54
 * @Description:
 */
const TokenKey = 'sessionId'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // return localStorage.setItem(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  // return localStorage.removeItem(TokenKey)
  return localStorage.removeItem(TokenKey)
}
