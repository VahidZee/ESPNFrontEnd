<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
export default {
  name: 'app',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>

</style>
