<!--
 * @Author: yuyongxing
 * @Date: 2021-12-18 19:36:03
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-01-24 22:00:35
 * @Description:
-->
<template>
  <div class="sidebar-box">
    <div class="slde-bcak-log">
      <router-link to="/dashboard">
        <h3 class="logo">
          logo
        </h3>
      </router-link>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sidebar-item
        v-for="(item,index) in menu"
        :key="index"
        :item="item"
      />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    menu() {
      return this.$store.state.menu
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.slde-bcak-log {
  width: 100%;
  height: 50px;
  background-color: #545c64;

  .logo {
    text-align: center;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #eee;
    line-height: 50px;
  }
}

</style>
