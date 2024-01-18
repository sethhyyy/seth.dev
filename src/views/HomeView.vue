<template>
  <div class="parent">
    <div class="v-container">
      <div class="video_container">
        <video autoplay loop muted class="homepage_video">
          <source src="../assets/video/homepage_portfolio_video_playback.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="DateAndClock">
      <DateAndClock/>
    </div>
    <div class="nav-btn">
      <div class="nav-btn-container">
        <v-btn style="margin-right: 10px" @click="scrollToVideo" outlined>Video</v-btn>
        <v-btn style="margin-right: 10px" @click="scrollToSecond" outlined>About</v-btn>
        <v-btn style="margin-right: 10px" @click="scrollToThird" outlined>Works</v-btn>
      </div>
    </div>
    <div class="About">
      <div>About Section (ยังไม่ทำ)</div>
    </div>
    <div class="Works">
      <div>Works Section (ยังไม่ทำ)</div>
    </div>
  </div>
</template>

<script>
import DateAndClock from '../components/DateAndClock.vue'
export default {
  components: {
    DateAndClock
  },
  methods: {
    scrollToVideo () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    scrollToSecond () {
      window.scrollTo({ top: 932, behavior: 'smooth' })
    },
    scrollToThird () {
      window.scrollTo({ top: 1864, behavior: 'smooth' })
    }
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
    height: 500vh;
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
    height: 100vh;
    object-fit: cover
  }
  .About {
    position: static;
    margin-top: 100vh;
    background-color: rgb(233, 214, 41);
    width: 100%;
    height: 100vh;
  }
  .Works {
    position: static;
    /* margin-top: 96vh; */
    background-color: gray;
    width: 100%;
    height: 100vh;
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
