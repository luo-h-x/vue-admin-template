<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper" >
      <el-menu :default-active="title" background-color="#304156"  text-color="#fffffc">
        <div v-for="(value, index) in sidebar" :key="index">
          <el-menu-item
            v-if="!value.children"
            :index="value.title"
            @click="open(value.path)">
            <i :class="value.icon"></i>
            <span>{{value.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="value.title">
            <template slot="title">
              <i :class="value.icon"></i>
              <span>{{value.title}}</span>
            </template>
            <el-menu-item
              v-for="(item, len) in value.children"
              :key="len"
              :index="item.title"
              @click="open(item.path)">
              {{item.title}}
            </el-menu-item>
          </el-submenu>
        </div>
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
        { title: '错误页面', icon: 'el-icon-error', path: '/error/404' },
        {
          title: '数据',
          icon: 'el-icon-s-data',
          children:
          [
            { title: 'Tree树形控件', icon: 'el-icon-error', path: '/Data/Tree' },
            { title: 'Table表格', icon: 'el-icon-error', path: '/Data/Table' }
          ]
        }
      ],
      title: null
    }
  },
  watch: {
    $route () {
      this.getTitle()
    }
  },
  created () {
    this.getTitle()
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
    },
    getTitle () {
      this.title = this.$route.meta.title
      // console.log(this.title)
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
