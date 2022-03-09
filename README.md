<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:44
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-03-09 10:04:30
 * @Description: 
-->
基于vue2.x+element2.15 的后台项目模板，只提供最基本的项目框架，内部已经配置好css预编译工具、路由、vuex
# vue-pc-template

环境基于 vue: 2.6.11,vue/cli: 4.5.13, node:v12.13.1

## Project setup
```
npm install
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve
yarn run serve
```

### Compiles and minifies for production
```
npm run build
yarn run build
```

### Lints and fixes files
```
npm run lint
```

### 项目结构
```
|-- demo
    |-- .DS_Store
    |-- .browserslistrc
    |-- .env.development             测试环境配置项
    |-- .env.production              正式环境配置项
    |-- .eslintignore                eslint过滤
    |-- .eslintrc.js                 eslint
    |-- .gitignore                   git过滤
    |-- README.md                    readme
    |-- babel.config.js              babel配置项
    |-- package-lock.json            npm锁包文件
    |-- package.json                 package
    |-- vue.config.js                配置文件
    |-- yarn.lock                    yarn锁包
    |-- public    
    |   |-- favicon.ico              打包后的服务器icon
    |   |-- index.html               打包后的页面主入口文件框架
    |-- src
        |-- App.vue                  vue主入口
        |-- main.js                  main
        |-- api                      api模块，管理接口请求
        |   |-- public.js
        |-- assets                   静态文件，主要存放img
        |   |-- logo.png
        |-- components               组件
        |   |-- HelloWorld.vue
        |-- router                   路由
        |   |-- index.js
        |-- store                    vuex
        |   |-- index.js
        |-- utils                    工具类
        |   |-- common.css           公共css
        |   |-- http.js              封装axios拦截器
        |   |-- rem.js               rem适配
        |   |-- utils.js             各种工具方法
        |-- views                    页面
            |-- Home.vue
            |-- login.vue

```

