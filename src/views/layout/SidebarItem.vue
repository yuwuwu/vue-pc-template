<template>
  <div class="sidebar">
    <div class="slde-bcak-log">
      <router-link to="/dashboard">
        <h3 class="logo">
          logo
        </h3>
      </router-link>
    </div>
    <template>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu
          v-for="item in menu"
          :key="item.id"
          :index="item.id"
        >
          <template slot="title">
            <i class="el-icon-location" />
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="child in item.subMenus"
            :key="child.id"
            class="liDom"
            :index="child.id"
          >
            <router-link
              class="menu-indent"
              :to="{path:child.href,query:{keep:'false'}}"
            >
              <span>{{ child.name }}</span>
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    menu: {
      type: Array
    }
  },
  data() {
    return {
      // itemArr: ["dade9aee35d24dedb490559e56d07e2b","d3210b7d15034fae9a9fb5f470161952","682c66b633664db18fc69441e70399a4","d2b3a425dee84e8fa76baa5ab5e0fd52","3a5a444a9b41461d8b5f3c820d5dc343","b0a94141fce74d8e8b37c1cdb72bea7b","1abcf1e9a22545159cc5863d54541226"]
    }
  },
  computed: {
    itemArr: function() {
      var arr = []
      for (var i = 0; i < this.menu.length; i++) {
        arr.push(this.menu[i].id)
      }
      return arr
    }
  },
  mounted() { },
  methods: {
    show() { }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

.el-menu{
 border: 0px solid #433 !important;
}
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

.sidebar {
  width: 190px;
  overflow: hidden;
}

.menu-indent span {
  padding-left: 32px;
}
</style>

