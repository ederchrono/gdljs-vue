<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Mis tareas</h1>
      <h2 class="subtitle">
        Una simple app para hacer listas de tareas y
        mostrar las directivas más comunes de <strong>Vue.js</strong>
      </h2>
    </div>

    <!--
      Cuando el evento sea lanzado con $emit desde el
      componente hijo, la función addTask será llamada con
      el payload correspondiente
     -->
    <todo-list-input @saveTask="addTask"/>

    <div class="tasks-list panel">
      <p class="panel-heading">
        Todas las tareas
      </p>
      <!--
        Todo elemento creado con v-for
        debe tener un key único
        -->
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
      <!-- esta lista se llena con un computed prop -->
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
      <!-- esta también se llena con un computed prop -->
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

  /*
  * Los componentes que están disponibles para usarse
  * en el template
  */
  components:{
    todoListInput,
    todoListItem
  },

  /*
  * data siempre es una funcion que regresa un objeto
  * con el estado inicial de la app
  */
  data () {
    return {
      tasks: [
        {label: 'Tarea 1', done: false},
        {label: 'Tarea 2', done: false},
        {label: 'Tarea 3', done: true}
      ]
    }
  },

  /*
  * Los métodos computed son usados para evitar
  * duplicar la 'data', normalmente son transformaciones de
  * las propiedades de un componente, y se recalculan sólo
  * cuando alguna de sus propiedades cambia.
  */
  computed: {
    tasksTodo () {
      return this.tasks.filter(item => !item.done)
    },
    tasksDone () {
      return this.tasks.filter(item => item.done)
    }
  },

  /*
  * Las funciones disponibles tanto para el template como
  * para otras funciones
  */
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
/*
* los scoped styles ayudan a mantener encapsulados los
* estilos sin peligro de que afecten otros componentes
*/
.tasks-list {
  margin: 20px 0;
}
</style>
