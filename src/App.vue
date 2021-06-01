<template>
  <div id="nav">
    <!-- <div class="navBar">

    <router-link to="/index">首页</router-link> |
    <router-link to="/signIn">登录</router-link>|
    <router-link to="/vip">升级</router-link> |
    <router-link to="/store">商店</router-link>|
    <router-link to="/joinUs">加入我们</router-link> |
    <router-link to="/setings">个人中心</router-link>
    </div> -->
  </div>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navBar {
  position: fixed;
  width: 80px;
  min-height: 200px;
  top: 90px;
  right: 20px;
  background-color: pink;
  a {
    display: block;
  }
}
</style>
