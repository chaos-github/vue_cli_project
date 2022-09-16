<template>
  <div id="myResume">
    <h2 align="center" v-once @click="emitEvent">{{welcomeMessage}}</h2>
    <p align="center" >{{today}}</p>
    <introSec secName="Introduction"/>
    <educaSec secName="Education"/>
  </div>
</template>

<script>
  import introSec from './introSec.vue'
  import educaSec from './educaSec.vue'
  export default {
    name: 'MyResume',
    components:{
      introSec,
      educaSec
    },  
    data(){
      return {
        welcomeMessage : "Hello Vue resume" ,
        today : 'Today is '+new Date(new Date().getTime())
      }
    },
    methods:{
      emitEvent(){
        this.$emit("header-event")
      }
    },
    mounted(){
      // setInterval(()=>{
      //   this.today = 'Today is '+new Date(new Date().getTime())
      // },1000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #myResume, #myResume > div {
    font-size : 24px;
    background-color: rgb(255, 251, 0);
    padding: 5px 5px 5px 5px;
    border: 3px solid black;
  }
  #myResume > div {
    margin-top: 5px;
  }
  
  body {
    /* align-content: center; */
    /* height: fit-content; */
    /* margin: 1px; */
    background-color: rgb(235, 234, 228);
    padding: 5px 5px 5px 5px; 
  }
  

</style>
