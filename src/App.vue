<template>
  <img alt="Vue logo" :src="logo" />
  <div :class="$style.logo"></div>
  <a href="###">cobyte</a>
  <input placeholder="请输入姓名" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "comps/HelloWorld.vue";
import logo from "@/assets/logo.png";
import "./App.module.css";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    fetch("/api-dev/user/list")
      .then((res) => res.json())
      .then((r) => console.log(r));
    return {
      logo,
    };
  },
});
</script>
<style module>
.logo {
  background-image: url(@/assets/logo.png);
  width: 200px;
  height: 200px;
}
</style>
<style scoped lang="scss">
$link-color: red;
a {
  color: $link-color;
}
::placeholder {
  color: $link-color;
}
</style>
