<template>
    <transition name="fade">
        <div id="works" v-if="show">
            <div>
                <h3 align="center">Working experience</h3>
                    <div v-for="(compny,index) of companies" :key="index"  @mouseover="mouseOver"  @mouseout="mouseOut">
                        <span>{{compny.name}}</span><span>{{compny.start}}~{{compny.end}}</span>
                    </div>
            </div>
        </div>
    </transition>
</template>
  
<script>
import store from '@/store'
export default {
    name: 'educaSec',
    props:{
        // secName : { 
        //     type : String,
        //     default : "educaSec header",
        // }
    },
    data(){
        return {
            show : 0,
            text_color:'black',
            companies:[
              {
                name:'American Megatreds',
                start:'2013/10',
                end:'2018/01'
              },
              {
                name:'PChome store',
                start:'2018/07',
                end:'2023/01'
              },
             
            ]
        }
    },
    mounted(){
        store.commit('showChange','Served company')
        setTimeout(()=>this.show=1,1)
    },
    methods:{
        mouseOver(event){
          // console.log(event)
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

  div#works > div  {
    /* display: flex; */
    flex: auto; 
    /* flex-wrap: wrap; */
    flex-direction: column;
    padding: 0 10px;
  }

  div#works > div > div {
    display: flex;
    flex:auto;
    /* flex-wrap: wrap; */
    flex-direction: row;
  }

  div#works span:nth-child(odd){
    width: 50%;
    text-align: left;
    flex:auto;
    font: bold;
    font-size: 30px; 
    
  }

  div#works span:nth-child(even){
    width: 50%;
    text-align: right;
    flex:auto;
    font-size: 25px; 
  }

  h3{
    font-size: 30px;  
  }

</style>
