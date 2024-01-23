<template>
  <div>
    <!-- <v-card max-width="500" style="background-color:yellow; variant=variant"> -->
    <div class="text-content">
      <div style="text-align: center; font-size: 20px;">
        {{this.date}} {{ this.clock_available(this.time) }}
        <v-progress-circular indeterminate size="20" v-if="this.time == null"></v-progress-circular>
      </div>
      <!-- <div style="text-align: center; font-family: abnes; font-size: 20px;" v-if="this.time === null">
        <v-progress-circular indeterminate size="25"></v-progress-circular>
      </div>
      <div style="text-align: center; font-family: abnes; font-size: 20px;" v-else>
        {{ this.time }}
      </div> -->
    </div>
  <!-- </v-card> -->
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
    this.date = new Date().toISOString().split('T')[0].split('-').join('.')
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  watch: {
    time (val) {
      this.clock_available(val)
    }
  },
  methods: {
    clock_available (val) {
      if (val) {
        return val
      } else {
        return 'PROCESSING...'
      }
    }
  }
}
</script>

<style>
  .text-content {
    color: yellow;
  }
  @font-face{
    font-family: "abnes";
    src: url("../assets/fonts/abnes.ttf") format("truetype");
  }
</style>
