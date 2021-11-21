<template>
  <img alt="Vue logo" :src="logo" />
  <div class="logo"></div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
import logo  from "@/assets/logo.png"

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
      return {
          logo
      }
  }
})
</script>
<style scoped>
.logo {
    background-image: url(@/assets/logo.png);
    width: 200px;
    height: 200px;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
