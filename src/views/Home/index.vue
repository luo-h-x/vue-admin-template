<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <Sidebar/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <Navbar/>
        </el-header>
        <el-main style=" padding: 0">
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
export default {
  components: { Sidebar, Navbar, AppMain }
}
</script>

<style lang="scss" scoped>

</style>
