<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/teste">teste</router-link>
    <router-link to="/fdsfsdfdsfsdf">404</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
   @import './src/assets/css/main.scss';

   #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
</style>
