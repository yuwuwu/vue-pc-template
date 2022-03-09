<!--
 * @Author: yuyongxing
 * @Date: 2021-12-18 19:36:08
 * @LastEditors: yuyongxing
 * @LastEditTime: 2022-01-24 22:26:37
 * @Description:
-->
<template>
  <div class="sidebar">
    <template v-if="!hasChild(item)">
      <template slot="title">
        <i class="el-icon-location" />
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        :index="item.path"
      >
        <router-link
          class="menu-indent"
          :to="{path:item.href,query:{keep:'false'}}"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu
        :index="item.id"
      >
        <template slot="title">
          <i
            v-if="item.icon"
            class="el-icon-location"
          />
          <span>{{ item.name }}</span>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
        />
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: {
      type: Object
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
    hasChild(item) {
      if (item.children && item.children.length > 0) {
        return true
      }
      return false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.sidebar {
  width: 190px;
  overflow: hidden;
}

</style>

