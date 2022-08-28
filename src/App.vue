<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="wrapper">
    <MyResume/>
  </div>
</template>

<script>
  import MyResume from './components/MyResume.vue'

  export default {
    name: 'App',
    components: {
      MyResume
    }
  }
</script>

<style scoped>
  div#wrapper {
    width: 1050px;
    margin: 1px auto;
    border: 3px solid green;
  }
  
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
