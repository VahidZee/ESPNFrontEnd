<template>
  <div id="app">
    <nav-bar background-image="url('./Images/bg36.jpeg')"></nav-bar>
    <transition name="component-fade" mode="out-in">
      <router-view
      ></router-view>
    </transition>
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

<style scoped>
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
