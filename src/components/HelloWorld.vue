<template>
  <h1>{{ msg }}</h1>
  <ul>
    <li v-for="item in courses" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, defineProps } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    type Course = {
      id: number;
      name: string;
    };
    const courses = reactive<Course[]>([
      { id: 1, name: "name1" },
      { id: 2, name: "name2" },
    ]);
    return { count, courses };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
