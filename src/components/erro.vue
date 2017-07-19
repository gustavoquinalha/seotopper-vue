<template>
  <div id="app">
    Erro
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'erro'
}
</script>

<style scoped>
#app {

  margin-top: 60px;
}
</style>
