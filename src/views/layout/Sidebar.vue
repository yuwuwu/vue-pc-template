<!--
 * @Author: yuyongxing
 * @Date: 2021-12-18 19:36:03
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 20:12:11
 * @Description:
-->
<template>
  <div class="sidebar-box">
    <sidebar-item :menu="menu" />
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
</style>
