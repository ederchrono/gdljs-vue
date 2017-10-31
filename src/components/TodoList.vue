<template>
  <section class="section">
    <div class="container">
      <h1 class="title">To do</h1>
      <h2 class="subtitle">
        Una simple app para hacer listas de tareas y
        mostrar las directivas más comunes de <strong>Vue.js</strong>
      </h2>
    </div>

    <todo-list-input @saveTask="addTask"/>

    <div class="tasks-list panel">
      <p class="panel-heading">
        Todas las tareas
      </p>
      <todo-list-item
        v-for="(item, index) in tasks"
        :key="index"
        :task="item"
        @toggle="toggleTask(item)"/>
    </div>

    <div class="tasks-list panel">
      <p class="panel-heading">
        Por hacer
      </p>
      <todo-list-item
        v-for="(item, index) in tasksTodo"
        :key="index"
        :task="item"
        @toggle="toggleTask(item)"/>
    </div>

    <div class="tasks-list panel">
      <p class="panel-heading">
        Completadas
      </p>
      <todo-list-item
        v-for="(item, index) in tasksDone"
        :key="index"
        :task="item"
        @toggle="toggleTask(item)"/>
    </div>

  </section>
</template>

<script>
import todoListInput from './TodoListInput'
import todoListItem from './TodoListItem'
export default {
  name: 'todoList',
  components:{
    todoListInput,
    todoListItem
  },

  data () {
    return {
      tasks: [
        {label: 'Tarea 1', done: false},
        {label: 'Tarea 2', done: false},
        {label: 'Tarea 3', done: true}
      ]
    }
  },

  computed: {
    tasksTodo () {
      return this.tasks.filter(item => !item.done)
    },
    tasksDone () {
      return this.tasks.filter(item => item.done)
    }
  },

  methods: {
    addTask (task) {
      this.tasks.push({
        label: task,
        done: false
      })
    },
    toggleTask(item) {
      item.done = !item.done
    }
  }
}
</script>

<style scoped>
.tasks-list {
  margin: 20px 0;
}
</style>
