<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.state.login?this.$router.push('/index'):this.$router.push('/login')
  }
}
</script>
<style>
  @import url('./assets/css/base.css');
  html,body,#app{
    padding: 0;
    margin:0;
    width: 100%;
    height: 100%;
  }
</style>
