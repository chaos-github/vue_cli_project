<template>
    <v-swiper
        :scrollbar="{
            hide: true,
        }"
        :modules="modules"
        class="mySwiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide><img src="../assets/NHUSH.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/FJU.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/CCU.jpg"></swiper-slide>
    </v-swiper>
   
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { watch } from "vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/scrollbar";
  // import "./style.css";
  // import required modules
  import { Scrollbar } from "swiper";
  
  export default {
    props:[
        "showWhich"
    ],
    components: {
      "vSwiper":Swiper,
      SwiperSlide,
    },
    setup(props,target) {
        console.log(props,target)
        let swiperInstance = null
        watch(()=>props.showWhich, (newNum, oldNum) => {
            console.log(
            "props 資料 showWhich 的監控",
            "新：" + newNum + "，舊：" + oldNum
            );
            swiperInstance.slideTo(newNum)
        });
        const onSwiper = (swiper) => {
          swiperInstance = swiper
          target.emit("showContent")
          console.log(swiper);
        };
        const onSlideChange = (event) => {
            target.emit("update:showWhich", event.activeIndex)
            console.log('slide change',event.activeIndex);
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Scrollbar],
        };
    },
  };
</script>
  
<style>
  .swiper {
    width: 90%;
    height: 300px;
    padding: 0 10px;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
</style>  