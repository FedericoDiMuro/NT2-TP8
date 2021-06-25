<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Trabajo Práctico Nro8</h1>
      <br>
      
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  #app {

  }

  h1 {
    color: rgb(5 36 68);
  }
  
  .jumbotron {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
</style>
