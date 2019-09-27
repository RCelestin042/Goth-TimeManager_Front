<template>
  <div id="app">
    <!--    <Login />-->
    <!--    <Employee />-->
    <router-view />
    <GeneralFooter />
  </div>
</template>

<script>
import GeneralFooter from "./components/GeneralFooter";
// import GeneralHeader from "./components/GeneralHeader";
// import Login from "./components/Login";
// import Employee from "./components/Employee";

export default {
  name: "app",
  components: {
    GeneralFooter
    // GeneralHeader,
    // Login,
    // Employee
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
