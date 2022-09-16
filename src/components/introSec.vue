<template>
    <div id="intro">
        <img src="../assets/me.jpg">
        <div>
            <h3 @click="eventHandler">{{secName}}</h3>
            <p>Hi, my name is CHAO-AN MIU.</p>
            <p>I’m modest, amiable, persevering and responsible. I always took cautious and meticulous attitude to work.</p>
            <span><p>Phone: 0988-923-512. LINE: miau628 E-mail: miau_628@hotmail.com.</p></span>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { defineProps } from 'vue'
    const store = useStore()
    const props = defineProps({  
                    secName : { 
                        type : String,
                        default : "introSec header",
                    }   
                })
    const eventHandler = ()=>{
        store.commit("change",props.secName)
    }
</script>

<style scoped>
div#intro {
    width: auto;
    height: auto;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
}
div#intro > div {
    /* display: flex; */
    flex: auto; 
    /* flex-wrap: wrap; */
    flex-direction: column;
    display: flex;
    flex-direction: column; 
    align-items: top; 
    padding: 20px;
}

#intro > img{
    width: 35%;
    height: 10%;
    border-radius: 50%;
    padding: 10px;
}

#intro span p{
    font-size:20px; 
    color:red;
    margin-top: 20px;
}

 h3{
    font-size: 30px;  
  }
</style>
