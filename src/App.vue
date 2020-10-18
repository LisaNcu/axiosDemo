<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getData">点击测试</button>
    <router-view/>
  </div>
</template>

<script>
import {testApi} from './api/testA'

export default {
  name: 'App',
  methods: {
    async getData () {
      let data = await testApi()
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
