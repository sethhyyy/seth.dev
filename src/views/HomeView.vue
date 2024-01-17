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
    position: fixed;
    right: 0;
    /* background: rgba(0, 0, 0, 0.5); */
    /* color: #f1f1f1; */
    /* width: 100%; */
    /* right: 0px; */
    padding: 20px;
  }
</style>
