<template>
  <div class="navbar">
    <div class="hamburger" @click="toggle">
      <svg
        :class="{'is-active':this.$store.state.show}"
        class="svg"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
      >
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
      </svg>
    </div>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
          <span  class="no-redirect">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <div class="right-menu">
      <el-dropdown  trigger="click">
        <div >
          <img src="../../../assets/cat.gif" alt="">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu >
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/luo-h-x/vue-admin-template">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout" >
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    toggle () {
      this.$store.state.show = !this.$store.state.show
    },
    logout () {
      sessionStorage.removeItem('loginusername')
      this.$router.push('/Login')
    },
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)

      matched = [{ path: '/', meta: { title: '首页' } }].concat(matched)

      this.levelList = matched.filter(item => item.meta && item.meta.title)
    },
    handleLink (path) {
      this.$router.push(path.path).catch((e) => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 10px;

    .el-dropdown {
      margin-top: 10px;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: white;
        margin-right: 10px;
      }
    }
  }

  .hamburger {
    width: 40px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    float: left;
    cursor: pointer;
    padding: 0 10px;
    transition: background .3s;

    .svg {
      width: 25px;
      height: 25px;
      vertical-align: middle
    }
    &:hover {
      background: rgba(0, 0, 0, .025)
    }

    .is-active {
      transform: rotate(180deg);
    }
  }

  .el-breadcrumb {
    display: inline-block;
    font-size: 16px;
    line-height: 60px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }

}
</style>
<style>
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateY(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
