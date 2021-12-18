<!--
 * @Author: yuyongxing
 * @Date: 2021-12-18 19:30:55
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 20:20:43
 * @Description:
-->
<template>
  <div
    class="app-wrapper"
  >
    <div class="sidebar-wrapper">
      <sidebar class="sidebar-container" />
    </div>
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, appMain, Sidebar } from '@/views/layout'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    appMain
  },
  computed: {
    sidebar() {
      return this.$store.states.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #eef1f6;
  &.hideSidebar {
    .sidebar-wrapper {
      transform: translate(-140px, 0);
      .sidebar-container {
        transform: translate(135px, 0);
      }
      &:hover {
        transform: translate(0, 0);
        .sidebar-container {
          transform: translate(0, 0);
        }
      }
    }
    .main-container {
      margin-left: 40px;
    }
  }
  .sidebar-wrapper {
    width: 190px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    transition: all 0.28s ease-out;
  }
  .sidebar-container {
    transition: all 0.28s ease-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #545c64;
    overflow-y: scroll;
  }
  .main-container {
    min-height: 100%;
    transition: all 0.28s ease-out;
    margin-left: 190px;
  }
}
</style>
