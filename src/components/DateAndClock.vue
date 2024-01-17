<template>
  <div>
    <div style="font-family: abnes; color: yellow;">
    <!-- <v-card max-width="500" style="background-color:yellow; font-family:abnes;" variant=variant> -->
      <div style="text-align: center; font-size: 20px;">{{this.date}}</div>
      <div style="text-align: center; font-size: 20px;" v-if="this.time === null">
        <v-progress-circular indeterminate size="25"></v-progress-circular>
      </div>
      <div style="text-align: center; font-size: 20px;" v-else>
        {{ this.time }}
      </div>
    <!-- </v-card> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      interval: null,
      time: null,
      date: null
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  created () {
    this.date = new Date().toISOString().split('T')[0].split('-').join(' ')
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }
}
</script>

<style>
  @font-face{
    font-family: "abnes";
    src: url("../assets/fonts/abnes.ttf") format("truetype");
  }
</style>
