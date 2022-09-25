<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <transition name="fade">
    <div class="blackout" v-show="slideShow"  @click="closeMenu"></div>
  </transition>
  <div class="title">
    Now on page : <br>{{store.state.showSection}}
  </div>

  <transition name="slide">
    <div class="sideMenu" v-show="slideShow">
      <button class="close-btn" @click="closeMenu">X</button>
      <h1>Menu</h1>
      <p>
          <router-link to="/">Go Home</router-link><br>
          <router-link to="/edu">My education</router-link><br>
          <router-link to="/works">Served company</router-link>
      </p>
      
    </div>
  </transition>

  <h1 class="title"> Welcome to my Vue resume </h1>
  <div class="title" @click="showMenu">
    <div>
      <button @click="showMenu">click to see MORE</button>
    </div>
  </div>
  
  <div id="wrapper" :class="getClasses">
    <router-view></router-view>
    <!-- <MyResume @header-event="eventHandler"/> -->
    <!-- {{store.state.showSection}} -->
  </div>
</template>

<script>
  // import MyResume from './components/MyResume.vue'
import { computed , ref } from '@vue/reactivity'
import { useStore } from 'vuex'

  export default {
    name: 'App',
    // components: {
    //   MyResume
    // },
    setup(){
      const store = useStore()
      const slideShow = ref(false)
      const eventHandler = ()=>{
        alert(store.state.showSection)
      }
      const showMenu = ()=>{
        slideShow.value=true
         //alert(slideShow.value)
      }
      const closeMenu = ()=>{
        slideShow.value=false
         //alert(slideShow.value)
      }
      const getClasses = computed(()=>{
        return {
          'edu' : (store.state.showSection == 'My education'),
          'wks' : (store.state.showSection == 'Served company'),
        }
      })
      return {
        store,
        slideShow,
        getClasses,
        showMenu,
        closeMenu,
        eventHandler
      }
    }
  }
</script>

<style scoped>
  .blackout{
    position: fixed;
    background-color: black;
    opacity: .6;
    height: 100%;
    width: 100%;    
    z-index: 98;
  }
  div#wrapper {
    
    width: 80vw;
    margin: 1px auto;
    border: 3px solid green;
    margin-top: 20px;
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

  .sideMenu {
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 30vw;
    text-align: center;
    background-color: rgb(250, 250, 250);
    z-index: 99;
  }

  .menuBtn {
    position: fixed;
    top:0px;
    left:0px;
    margin: 1em;
  }

  button {
    padding: .5em 1em;
    border-radius: 3em;
    font-size: 1.1em;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    left: -100%;
  }

  .slide-enter-to,
  .slide-leave-from {
    left: 0;
  }

  .slide-enter-active,
  .slide-leave-active{
    transition: all .6s;
  }

  .close-btn {
    border: none;
    font-weight: bold;
    font-size: 2em;
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
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
