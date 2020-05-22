<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <div v-if="ismobile && show" class="drawer-bg" @click="handleClickOutside" />
      <el-aside :class="classObj" width="200px">
        <Sidebar/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <Navbar />
        </el-header>
        <el-main style=" padding: 0">
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
export default {
  components: { Sidebar, Navbar, AppMain },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  mounted () {
    this.resizeHandler()
  },
  computed: {
    ...mapState(['show', 'ismobile']),
    classObj () {
      return {
        hideSidebar: !this.show,
        openSidebar: this.show,
        mobile: this.ismobile
      }
    }
  },
  methods: {
    ...mapMutations(['close', 'isMobile']),
    resizeHandler () {
      const w = document.body.getBoundingClientRect().width
      if (w < 996) {
        this.isMobile()
        this.close()
      } else {
      }
    },
    handleClickOutside () {
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  position: relative;

  .el-aside {
  transition: width .5s;
  }
  .mobile {
    position: fixed;
    z-index: 100;
    height: 100%;
  }
  .hideSidebar {
    transition: width .3s;
    width: 0 !important;
  }
  .openSidebar {
    transition: width .3s;
    width: 200px !important;
  }
  .drawer-bg {
    background: #000;
    opacity: .3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 99;
  }
}

</style>
