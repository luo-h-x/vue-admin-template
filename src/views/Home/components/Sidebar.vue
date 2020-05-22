<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper" >
      <el-menu default-active="1" background-color="#304156"  text-color="#fffffc">
        <el-menu-item
          v-for="(value, index) in sidebar"
          :key="index"
          :index="value.title"
          @click="open(value.path)">
          <i :class="value.icon"></i>
          <span>{{value.title}}</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>数据</span>
          </template>
          <router-link to="/Data/Tree" style="display: block">
            <el-menu-item index="2-2">Tree树形控件</el-menu-item>
          </router-link>
          <router-link to="/Data/Table">
            <el-menu-item index="2-1">Table表格</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebar: [
        { title: '首页', icon: 'el-icon-menu', path: '/' },
        { title: 'From表单', icon: 'el-icon-s-order', path: '/From' },
        { title: 'Icon图标', icon: 'el-icon-document', path: '/Icon/index' },
        { title: '错误页面', icon: 'el-icon-error', path: '/error/404' }
      ]
    }
  },
  methods: {
    open (path) {
      if (this.$store.state.ismobile) {
        this.$store.commit('close')
      }
      this.$router.push({
        path,
        query: {
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style >
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }
</style>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  background: #304156;

  .el-scrollbar {
    height: 100%;

    a {
      color:#fffffc;
    }
  }
  .el-menu {
    border: none;
  }
}
</style>
