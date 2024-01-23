<template>
  <div class="parent">
    <div class="v-container">
      <div class="video_container">
      <div class="welcome_video_text">PORTFOLIO</div>
      <div class="welcome_video_subtext">
        *THIS IS NON-PROFIT WEBSITE WHICH WAS CREATE BY JavaScript Programmer, Setthaphong "Seth" Songjaroen.<br/>
        PURPOSELY MADE FOR SELF-INTRODUCTION. AS YOU'RE SCROLL THROUGH YOU WOULD KNOW: <br/> 1. MY BRIEFLY BACKGROUNDS 2. WORKS/PROJECTS I'VE WORKED/BEEN WORKING FOR 3. MY STACKS
      </div>
        <video autoplay loop muted class="homepage_video">
          <source src="../assets/video/homepage_portfolio_video_playback.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="DateAndClock"><DateAndClock/></div>
    <div class="nav-btn">
      <div class="nav-btn-container">
        <!-- <div style="top: 20%; right: 10%;" class="nav-btn-line"></div>
        <div style="top: 30%; right: 10%;" class="nav-btn-line"></div>
        <div style="top: 40%; right: 10%;" class="nav-btn-line"></div> -->
        <!-- <v-btn class="nav-btn-item" style="right: 8%;" v-bind:color="Y_Scroll >= 0 && Y_Scroll < 713 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 509 ? 'white' : 'black'"  @click="scrollToVideo" text>Video</v-btn>
        <v-btn class="nav-btn-item" style="right: 6%; top: 26%;" v-bind:color="Y_Scroll >= 713 && Y_Scroll < 1552 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 509 ? 'white' : 'black'" @click="scrollToSecond" text>Backgrounds</v-btn>
        <v-btn class="nav-btn-item" style="right: 7.7%; top: 35.9%;" v-bind:color="Y_Scroll >= 1552 && Y_Scroll < 2455 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 509 ? 'white' : 'black'" @click="scrollToThird" text>Works</v-btn>
        <v-btn class="nav-btn-item" style="right: 7.5%; top: 45%" v-bind:color="Y_Scroll >= 2455 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 509 ? 'white' : 'black'" @click="scrollToForth" text>Stacks</v-btn> -->
        <v-btn v-bind:color="Y_Scroll >= 0 && Y_Scroll < 793 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 793 ? 'white' : 'black'" style="margin-right: 10px;" @click="scrollToVideo" text>Video</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 793 && Y_Scroll < 1552 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 793 ? 'white' : 'black'" style="margin-right: 10px" @click="scrollToSecond" text>Backgrounds</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 1552 && Y_Scroll < 2455 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 793 ? 'white' : 'black'" style="margin-right: 10px" @click="scrollToThird" text>Works</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 2455 ? 'yellow' : Y_Scroll >= 0 && Y_Scroll < 793 ? 'white' : 'black'" style="margin-right: 10px" @click="scrollToForth" text>Stacks</v-btn>
      </div>
    </div>
    <div class="Backgrounds">
      <div class="backgrounds_section_header">Backgrounds</div>
    </div>
    <div class="Works">
      <div class="works_section_header">Works</div>
    </div>
    <div class="Stacks">
      <div class="stacks_section_header">Stacks</div>
    </div>
  </div>
</template>

<script>
import DateAndClock from '../components/DateAndClock.vue'
export default {
  data () {
    return {
      Y_Scroll: 0,
      video_btn: 1,
      background_btn: 1,
      works_btn: 1,
      stacks_btn: 1
    }
  },
  components: {
    DateAndClock
  },
  methods: {
    scrollToVideo () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    scrollToSecond () {
      window.scrollTo({ top: 885, behavior: 'smooth' })
    },
    scrollToThird () {
      window.scrollTo({ top: 1770, behavior: 'smooth' })
    },
    scrollToForth () {
      window.scrollTo({ top: 2655, behavior: 'smooth' })
    },
    onScroll (e) {
      this.Y_Scroll = window.top.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    // window.addEventListener('keyup', function (event) {
    //   if (event.code === 'ArrowDown') {
    //     if (scrollY >= 0 && scrollY < 885) {
    //       window.scrollTo({ top: 885, behavior: 'smooth' })
    //     } else if (scrollY >= 885 && scrollY < 1770) {
    //       window.scrollTo({ top: 1770, behavior: 'smooth' })
    //     } else if (scrollY >= 1770 && scrollY < 2655) {
    //       window.scrollTo({ top: 2655, behavior: 'smooth' })
    //     } else if (scrollY >= 2655 && scrollY < 3540) {
    //       window.scrollTo({ top: 3540, behavior: 'smooth' })
    //     } else if (scrollY >= 3540) {
    //       window.scrollTo({ top: 3540, behavior: 'smooth' })
    //     }
    //   } else if (event.code === 'ArrowUp') {
    //     if (scrollY >= 2655 && scrollY <= 3540) {
    //       window.scrollTo({ top: 2655, behavior: 'smooth' })
    //     } else if (scrollY >= 1770 && scrollY <= 2655) {
    //       window.scrollTo({ top: 1770, behavior: 'smooth' })
    //     } else if (scrollY >= 885 && scrollY <= 1770) {
    //       window.scrollTo({ top: 885, behavior: 'smooth' })
    //     } else if (scrollY >= 0 && scrollY <= 885) {
    //       window.scrollTo({ top: 0, behavior: 'smooth' })
    //     }
    //   }
    // })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style scoped>
  .parent {
    scroll-behavior: smooth;
    height: 285;
    /* scroll-snap-type: y mandatory;
    overflow-y: scroll; */
  }
  .v-container {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .video_container {
    box-sizing: border-box;
    /* background-repeat: no-repeat; */
  }
  .welcome_video_text {
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    color: yellow;
    font-family: LEDLIGHT;
    font-size: 50px;
  }
  .welcome_video_subtext {
    -webkit-transform: translate(-56%,-52%);
    transform: translate(-56%, -52%);
    position: absolute;
    top: 56%;
    left: 52%;
    color: yellow;
    font-size: 10px;
  }
  .homepage_video {
    width: 100%;
    height: 95vh;
    object-fit: cover
  }
  .Backgrounds {
    position: static;
    margin-top: 95vh;
    background-color: white;
    display: block;
    width: 100%;
    height: 95vh;
    border: 0.5px solid;
    border-color: yellow;
    /* background-color: rgb(233, 214, 41); */
  }
  .backgrounds_section_header {
    text-transform: uppercase;
    position: absolute;
    top: 95vh;
    font-size: 100px;
  }
  .Works {
    position: static;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 95vh;
    border: 0.5px solid;
    border-color: yellow;
  }
  .works_section_header {
    text-transform: uppercase;
    position: absolute;
    top: 190vh;
    font-size: 100px;
  }
  .Stacks {
    position: static;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 95vh;
    border: 0.5px solid;
    border-color: yellow;
    border-right-width: 0;
    /* background-color: rgb(233, 214, 41); */
  }
  .stacks_section_header {
    text-transform: uppercase;
    position: absolute;
    top: 285vh;
    font-size: 100px;
  }
  .DateAndClock {
    position: absolute;
    left: 0;
    right: 0;
    top: 0%;
    padding: 20px;
    /* background: rgba(0, 0, 0, 0.5); */
    /* color: #f1f1f1; */
    /* width: 100%; */
  }
  .nav-btn {
    position: fixed;
    right: 0;
    top: 10%;
    padding: 20px;
    /* left: 50%; */
    /* right: 50%; */
    /* transform: translate(-50%, -50%); */
    /* right: 8%; */
  }
  .nav-btn-container {
    margin: 20px;
  }
  .nav-btn-item {
    position: fixed;
  }
  .nav-btn-line {
    position: fixed;
    border-left: 1px solid black;
    height: 50px;
  }
  /* keyframes */
  /* @keyframes yo {
    from {
      margin-left: 100%;
      width: 100%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  } */
  @font-face {
    font-family: 'LEDLIGHT';
    src: url('../assets/fonts/LEDLIGHT.otf');
  }
</style>
