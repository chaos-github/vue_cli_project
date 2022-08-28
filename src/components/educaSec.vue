<template>
    <div id="education">
        <div>
            <h3 align="center">Education</h3>
                <div v-for="(school,index) of Education" :key="index">
                    <span>{{school.name}}</span><span>{{school.start}}~{{school.end}}</span>
                </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'educaSec',
    data(){
        return {
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
    methods:{
        Alert(){
            alert("this is QQQ")
        }
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div#education > div  {
    /* display: flex; */
    flex: auto; 
    /* flex-wrap: wrap; */
    flex-direction: column;
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
  div#education > div span:nth-child(even){
    width: 50%;
    text-align: right;
    flex:auto;
    font-size: 25px; 
  }

  h3{
    font-size: 30px;  
  }

</style>
