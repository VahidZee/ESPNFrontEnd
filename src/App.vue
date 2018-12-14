<template>
  <div id="app">
    <nav-bar background-image="url('./Images/bg36.jpeg')"></nav-bar>
    <router-view></router-view>
    <Footer background-image="url('./Images/bg36.jpeg')" ></Footer>
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
