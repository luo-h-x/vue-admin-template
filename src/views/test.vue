<template>
<div>
  <!-- 动态生成侧边栏 -->
  <!-- <el-menu  background-color="#304156"  text-color="#fffffc">
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
            @click="open(value.path)">
            {{item.title}}
          </el-menu-item>
        </el-submenu>
    </div>
  </el-menu> -->
  <!-- 登录 -->
  <!-- <div style="overflow: hidden; height: 100%;">
    <div class="container" @mouseenter="spani" @mouseleave="spanl">
    <h3>欢迎登录</h3>
    <el-form ref="form" label-width="80px" :model="form" >
      <el-form-item
        label="用户名"
        prop="name"
        :rules="{ required: true, message: '请输入用户名', trigger: 'blur' }"
      >
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
    </el-form>
    <el-alert
      title="用户名: admin 密码: any"
      type="info"
      close-text="知道了">
    </el-alert>
    <span :class="{'in': isIn, 'out': isOut}" ref="animate"></span>
    </div>
  </div> -->
</div>
</template>

<!-- 动态生成侧边栏 -->
<!-- <script>
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
</script> -->

<!-- 登录 -->
<!-- <script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: 'admin',
        password: '123'
      },
      passwordType: 'password',
      isOut: true,
      isIn: false,
      inx: '',
      iny: ''
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    ...mapMutations(['setLogin']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios({
            method: 'post',
            url: '/api/login',
            data: {
              name: this.form.name,
              password: this.form.password
            }
          }).then(res => {
            if (res.data.status === 200) {
              this.setLogin(this.form.name)
              this.$message({
                message: res.data.message,
                type: 'success',
                duration: 600
              })
              this.$router.push('/')
            } else {
              this.$message({
                message: '用户名或密码错误！！ ',
                type: 'error',
                duration: 1000
              })
            }
          })
        } else {
          this.$message({
            message: '用户名或密码错误！！ ',
            type: 'error',
            duration: 1000
          })
        }
      })
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    spani (e) {
      if (this.isOut) {
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isIn = true
        this.isOut = false
      }
    },
    spanl (e) {
      if (this.isIn) {
        this.inx = e.clientX - e.target.offsetLeft
        this.iny = e.clientY - e.target.offsetTop

        const el = this.$refs.animate
        el.style.left = this.inx + 'px'
        el.style.top = this.iny + 'px'

        this.isOut = true
        this.isIn = false
      }
    }
  }
}
</script>
<style>
.in{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: #ededed;
    transform: translate(-50%,-50%);
    /* 使用in动画，持续0.5s,缓出的时间函数，停留在最后一帧 */
    animation: in 0.5s ease-out forwards;
    z-index:-1;
  }

  .out{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1300px;
    height: 1300px;
    border-radius: 50%;
    background: #ededed;
    transform: translate(-50%,-50%);
    animation: out 0.5s ease-out forwards;
    z-index:-1;
  }

  @keyframes in{
    0%{
        width: 0;
        height: 0;
    }
    100%{
        width: 1300px;
        height: 1300px;
    }
  }
  @keyframes out{
    0%{
        width: 1300px;
        height: 1300px;
    }
    100%{
        width: 0;
        height: 0;
    }
  }

</style> -->
