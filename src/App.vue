<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="title">
    <router-link to="/">Go Home</router-link><br>
    Now on page : <br>{{store.state.showSection}}
  </div>
  
  <h1 class="title"> Welcome to my Vue resume </h1>
  <div class="title">
    Click to see MORE!!<br>
    <router-link to="/edu">My education</router-link><br><router-link to="/works">Served company</router-link>
  </div>
  
  <div id="wrapper" :class="getClasses">
    <router-view></router-view>
    <!-- <MyResume @header-event="eventHandler"/> -->
    <!-- {{store.state.showSection}} -->
  </div>
</template>

<script>
  // import MyResume from './components/MyResume.vue'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

  export default {
    name: 'App',
    // components: {
    //   MyResume
    // },
    setup(){
      const store = useStore()
      const eventHandler = ()=>{
        alert(store.state.showSection)
      }

      const getClasses = computed(()=>{
        return {
          'edu' : (store.state.showSection == 'My education'),
          'wks' : (store.state.showSection == 'Served company'),
        }
      })
      return {
        store,
        getClasses,
        eventHandler
      }
    }
  }
</script>

<style scoped>
  div#wrapper {
    width: 1050px;
    margin: 1px auto;
    border: 3px solid green;
    /* min-height: 90vh; */
  }

  #wrapper.edu{
    border: 3px solid yellow;
    min-height: 50vh;
  }

  #wrapper.wks{
    border: 3px solid red;
    min-height: 50vh;
  }

  .title {
    text-align: center;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity .6s;
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
