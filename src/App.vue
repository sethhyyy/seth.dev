<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(0, 0, 0)"
      dark
    >
      <Transition appear>
        <h2 style="font-family: Misa;">Seth.dev</h2>
      </Transition>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <DateAndClock center></DateAndClock>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="toHomePage"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        text
        @click="toAboutPage"
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        text
        @click="toStuffsImInterestedIn"
      >
        <span class="mr-2">Interesting Stuff</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import router from '@/router'
import DateAndClock from './components/DateAndClock.vue'
export default {
  name: 'App',
  data () {
  },
  components: {
    DateAndClock
  },
  methods: {
    toHomePage () {
      router.push('/').catch(function () { return {} })
    },
    toAboutPage () {
      router.push('/about').catch(function () { return {} })
    },
    toStuffsImInterestedIn () {
      router.push('/interesting').catch(function () { return {} })
    }
  }
}

</script>
<style>
  @font-face {
    font-family: 'Misa';
    src: url('../src/assets/fonts/13_Misa.TTF');
  }
</style>
