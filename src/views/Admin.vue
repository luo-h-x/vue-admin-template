<template>
  <div class="container">
    <div class="head-frame">
      <span>Your roles:</span>
      <div class="head-img" style="">
      </div>
    </div>
    <div class="info-container">
      <span>您好: {{username}}</span>
      <span> Make a little progress every day.</span>
    </div>
    <div class="hare">
      <img src="../assets/hare.gif" >
    </div>
    <a href="https://github.com/luo-h-x/vue-admin-template"
      target="_blank" aria-label="View source on Github"
      class="github-corner"
      style="position: absolute; top: 0px; border: 0px; right: 0px;">
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        aria-hidden="true"
        style="fill: rgb(64, 201, 198); color: rgb(255, 255, 255);">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path data-v-09fe1acc="" d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.getters.username
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  padding: 20px;
  background: #e3ad98;
  min-height: calc(100vh - 60px);

  .head-frame {
    width: 150px;
    height: 150px;
    float: left;
    border-radius: 50%;
    box-shadow: inset 0 0 0 5px rgba(0,0,0,.05);
    position: relative;
    text-align: center;
    line-height: 150px;

    .head-img {
      width: 100%;
      height: 100%;
      background-image: url('../assets/timg.gif');
      background-position: 50%;
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: 0;
      transform-origin: 100% 50%;
      transition: all .5s ease-in-out;

      &:hover {
        transform: rotate(-90deg);
      }
    }
  }

  .info-container {
    margin-left: 200px;
    height: 200px;
    line-height: 150px;
    position: relative;

    span {
      position: absolute;
      top: 10px;

      &:first-child {
        font-size: 36px;
        line-height: 36px;
        color: #212121;
      }
    }
  }

  .hare img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}
@media (max-width: 750px) {
  .info-container {
    display: none;
  }
  .container .hare img {
    display: block;
    width: 90%;
    margin: 0 auto;
    }

}
</style>
