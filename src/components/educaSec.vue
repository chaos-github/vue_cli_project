<template>
  <transition name="fade">
    <div id="education" v-if="show">
        <div>
            <h3 align="center">Educations</h3>
                <div v-for="(school,index) of Education" :key="index" :data-key="index"  @mouseover="mouseOver"  @mouseout="mouseOut">
                    <span :data-key="index">{{school.name}}</span><span :data-key="index">{{school.start}}~{{school.end}}</span>
                </div>
        </div>
        <swiper :showWhich="getNowon"/>
        {{getNowon}}
    </div>
  </transition> 
</template>
  
<script>
import swiper from './swiper.vue'
import store from '@/store'
export default {
    name: 'educaSec',
    props:{
        // secName : { 
        //     type : String,
        //     default : "educaSec header",
        // }
    },
    components:{
      swiper
    },
    data(){
        return {
            selected : "0",
            show : 0,
            text_color:'black',
            Education:{
              highSchool:{
                name:'Nanhu senior highschool',
                start:'2003/09',
                end:'2006/07'
              },
              University:{
                name:'Fujen Catholic Unerversity',
                start:'2006/09',
                end:'2010/07'
              },
              masterDegree:{
                name:'National ChunCheng Unerversity',
                start:'2010/09',
                end:'2012/07'
              }
            }
        }
    },
    computed:{
      getNowon(){
        return this.selected
      }
    },
    mounted(){
        store.commit('showChange','My education')
        setTimeout(()=>this.show=1,1)
    },
    methods:{
        mouseOver(event){
          this.selected = event.srcElement.dataset.key
          console.log( this.selected )
          event.srcElement.parentNode.style.color="green"
        },
        mouseOut(event){
          event.srcElement.parentNode.style.color="black"
        },
      
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#education{
  height: auto;
  width:auto;
}

div#education > div  {
    /* display: flex; */
    flex: auto; 
    /* flex-wrap: wrap; */
    flex-direction: column;
    padding: 0 10px;
  }



  div#education > div > div {
    display: flex;
    flex:auto;
    /* flex-wrap: wrap; */
    flex-direction: row;
  }

  
  div#education span:nth-child(odd){
    width: 50%;
    text-align: left;
    flex:auto;
    font: bold;
    font-size: 30px; 
    
  }
  div#education span:nth-child(even){
    width: 50%;
    text-align: right;
    flex:auto;
    font-size: 25px; 
  }

  h3{
    font-size: 30px;  
  }

</style>
