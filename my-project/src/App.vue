<template>
  <div id="app">
    <HelloWorld
    v-for="todo in todos"
    :msg="todo"
    :key="todo.title"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      todos: [
        {
          title: 'Todo 1',
          done: false
        },
        {
          title: 'Todo 2',
          done: false
        },
        {
          title: 'Todo 3',
          done: false
        },
      ]
    }
    
  }
}
</script>

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
