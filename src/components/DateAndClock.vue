<template>
  <div>
    <v-card style="background-color:white; padding:30px;">
    <div style="text-align: center; font-size: 30px;">{{this.date}}</div>
    <div style="text-align: center; font-size: 30px;" v-if="this.time === null">
      Current Time: <v-progress-circular indeterminate size="25"></v-progress-circular>
    </div>
    <div style="text-align: center; font-size: 30px;" v-else>
      Current Time: {{ this.time }}
    </div>
  </v-card>
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

</style>
