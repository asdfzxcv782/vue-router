<template>
  <div id="app"> 
    <div>Welcome</div>
    <router-view/>
  </div>
</template>

<script>


export default {
  props: {
    status: String
  },
  //name: 'app',
  /*components: {
    home
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10%;
}
</style>
