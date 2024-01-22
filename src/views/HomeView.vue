<template>
  <div class="parent">
    <div class="v-container">
      <div class="video_container">
        <video autoplay loop muted class="homepage_video">
          <source src="../assets/video/homepage_portfolio_video_playback.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <!-- <div class="DateAndClock"><DateAndClock/></div> -->
    <div class="nav-btn">
      <div class="nav-btn-container">
        <v-btn v-bind:color="Y_Scroll >= 0 && Y_Scroll < 713 ? 'yellow' : 'transparent'" style="margin-right: 10px;" @click="scrollToVideo">Video</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 713 && Y_Scroll < 1552 ? 'yellow' : 'transparent'" style="margin-right: 10px" @click="scrollToSecond">Backgrounds</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 1552 && Y_Scroll < 2455 ? 'yellow' : 'transparent'" style="margin-right: 10px" @click="scrollToThird">Works</v-btn>
        <v-btn v-bind:color="Y_Scroll >= 2455 ? 'yellow' : 'transparent'" style="margin-right: 10px" @click="scrollToForth">Stacks</v-btn>
      </div>
    </div>
    <div class="Backgrounds"><div>Backgrounds Section</div></div>
    <div class="Works"><div>Works Section (ยังไม่ทำ)</div></div>
    <div class="Stacks"><div>Stacks (ยังไม่ทำ)</div></div><div class="Works"><div>Works Section (ยังไม่ทำ)</div></div>
  </div>
</template>

<script>
// import DateAndClock from '../components/DateAndClock.vue'
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
  // components: {
  //   DateAndClock
  // },
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
  /* template {
    scroll-behavior: smooth;
    scroll-snap-stop: always;
  } */
  .parent {
    scroll-behavior: smooth;
    /* scroll-snap-type: y mandatory;
    overflow-y: scroll; */
    height: 380vh;
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
    /* background-color: rgb(233, 214, 41); */
    width: 100%;
    height: 95vh;
  }
  .Backgrounds-Topic {
    display: inline-block;
    margin: 50px 100px;
  }
  .Works {
    position: static;
    /* margin-top: 96vh; */
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 95vh;
  }.Stacks {
    position: static;
    background-color: rgb(255, 255, 255);
    /* background-color: rgb(233, 214, 41); */
    width: 100%;
    height: 95vh;
  }
  .DateAndClock {
    position: fixed;
    left: 0;
    right: 0;
    top: 5%;
    /* background: rgba(0, 0, 0, 0.5); */
    /* color: #f1f1f1; */
    /* width: 100%; */
    padding: 20px;
  }
  .nav-btn-container {
    margin: 20px;
  }
  .nav-btn {
    position: fixed;
    right: 0;
    /* left: 50%; */
    /* right: 50%; */
    /* transform: translate(-50%, -50%); */
    /* right: 8%; */
    top: 10%;
    padding: 20px;
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
</style>
