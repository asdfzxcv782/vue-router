<template>
  <div class="home">
    <b-row class="justify-content-md-center">
            <b-col ></b-col>
            <b-col  cols="4">
              <b-button variant="outline-primary" href="/demo/logout">Logout</b-button>
            </b-col>
    </b-row>
    <h1>Name: {{ name }}</h1>
    <h2>Roles: {{roles}}</h2>
    <b-button variant="outline-primary" v-on:click="getos">Get OS</b-button>
    <div v-if="ossucess">
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <!--<b-col  col lg="1">OsName:</b-col> -->
            <b-col  cols="2">OsName:</b-col>
            <b-col  class="text-primary text-left">{{ getmyos.osname }}</b-col>
            <!-- <b-col  col lg="1">Host:</b-col> -->
          </b-row>
          <b-row class="justify-content-md-center">
            <b-col  cols="2">Host:</b-col>
            <b-col  class="text-primary text-left">{{ getmyos.host }}</b-col>
          </b-row>
        </b-container>
      <!-- <p>OsName: {{ getmyos.osname }}</p>
      <p>Host: {{ getmyos.host }}</p> -->
    </div>
    <div v-else-if="oserror">
      <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col  col lg="2" class="text-right">Error:</b-col>
            <b-col  col lg="4" class="text-danger text-left">{{ getmyos.osname }}</b-col>
          </b-row>
      </b-container>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
     return {
                name: null,
                roles:null,
                ossucess:false,
                oserror:false,
                getmyos:{
                  osname:null,
                  host:null
                },
                
            }
  },
  name: 'home',
  props: {
    msg: String
  },
  mounted(){
            axios
                .get("http://192.168.1.119:8081/demo/user")
                .then(response => (this.name = response.data.name,
                  this.roles = response.data.roles[0].authority
                ))
  },
   methods:{
     getos(){
       axios.get("http://192.168.1.119:8081/demo/os")
                .then((response) => {
                  console.log(response);
                  this.ossucess = true;
                  this.getmyos.osname = response.data.name
                  this.getmyos.host = response.data.host
                }).catch((error) =>{
                  if(error.response.status === 403){
                    this.oserror = true;
                    this.osstatus = 'error'
                    this.getmyos.osname = 'Insufficient permissions'
                  }
                  console.log(error.response);
                })
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
