<!--
 * @Author: yuyongxing
 * @Date: 2021-12-18 19:34:18
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 20:21:55
 * @Description:
-->
<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in"
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Main'
//   computed: {
//     key() {
//       return this.$route.name !== undefined
//         ? this.$route.name + +new Date()
//         : this.$route + +new Date()
//     }
//   }
}
</script>
<style lang="scss" scoped>
.app-main{
    margin-left: 10px;
    background-color: #fff;
}
</style>
