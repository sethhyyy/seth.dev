<template>
  <div>
    <video autoplay loop muted id="homepage_video">
      <source src="../assets/video/homepage_portfolio_video_playback.mp4" type="video/mp4">
    </video>
    <div class="content">
      <DateAndClock/>
    </div>
  </div>
</template>

<script>
import DateAndClock from '../components/DateAndClock.vue'
export default {
  components: {
    DateAndClock
  }
}
</script>
<style scoped>
  #homepage_video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 1%;
    transform: translate(-50%,0);
    /* position: fixed;
    right: 0;
    padding: 20px; */
  }
</style>
