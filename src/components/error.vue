<template>
  <div class="container">
      <h2>Error</h2>
      <h1>{{status}}</h1>
      <p>empty</p>
      <b-button variant="outline-primary" href="/demo/main">Back To Home</b-button>
    </div>
</template>

<script>


export default {
  //name: 'app',
  /*components: {
    home
  }*/
}
</script>

<style scoped>

h2 h1 p {
  margin: 40px 0 0;
}
/*body {
  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  height: 100vh;
  background: linear-gradient(125deg, #6a89cc, #b8e994);
}*/

/*.container {
  color: #343434;
  position: absolute;
  width: 100%;
  top: 100%;
  transform: translateY(-50%);
  text-align: center;
}*/


</style>