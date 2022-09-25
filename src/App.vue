<template>

  <transition name="fade">
    <div class="blackout" v-show="slideShow"  @click="toggleMenu"></div>
  </transition>
  <h1 class="title">
    Now on page : <br>{{store.state.showSection}}
  </h1>

  <transition name="slide">
    <div class="sideMenu" v-show="slideShow">
      <button class="close-btn" @click="toggleMenu">X</button>
      <h1>Menu</h1>
      <div>
        <p @click="toggleMenu" style="">
            <router-link to="/"><h2>Go Home</h2></router-link><br>
            <router-link to="/edu"><h2>My education</h2></router-link><br>
            <router-link to="/works"><h2>Served company</h2></router-link>
        </p>
      </div>
    </div>
  </transition>

  <h1 class="title"> Welcome to my Vue resume </h1>
  <div class="title" @click="toggleMenu">
    <div>
      <button @click="showMenu">click to see MORE</button>
    </div>
  </div>
  
  <div id="wrapper" :class="getClasses">
    <router-view></router-view>
  </div>

</template>

<script>
import { computed , ref } from '@vue/reactivity'
import { useStore } from 'vuex'

  export default {
    name: 'App',
    setup(){
      const store = useStore()
      const slideShow = ref(false)
      
      const toggleMenu = ()=>{
        slideShow.value=!slideShow.value
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
        toggleMenu
      }
    }
  }
</script>

<style scoped>
  .blackout{
    position: fixed;
    top:0;
    background-color: black;
    opacity: .6;
    height: 100%;
    width: 100%;    
    z-index: 98;
  }
  div#wrapper {
    
    width: 80vw;
    margin: 1px auto;
    border: 3px solid black;
    margin-top: 20px;
    /* overflow: scroll; */
    /* min-height: 90vh; */
    border-radius: 5em;
  }

  #wrapper.edu{
    border: 3px solid gray;
    /* min-height: 50vh; */
    padding-bottom: 10px;
  }

  #wrapper.wks{
    border: 3px solid rgb(80, 5, 5);
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

  .sideMenu > div{
    margin-top: 50px;
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
