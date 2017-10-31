<template>
  <form class="todo-form" @submit.prevent="saveTask">
    <label class="label">Tarea</label>

    <div class="field is-grouped">

      <div class="control task-input">
        <!--
          v-model sincroniza el input con la variable indicada
          -->
        <input
          class="input" type="text"
          placeholder="Comprar la leche"
          v-model="task"
          >
      </div>

      <div class="control">
        <button class="button is-link">Guardar</button>
      </div>

    </div>
  </form>
</template>

<script>
export default {
  name: 'todoInput',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    saveTask () {
      // Valida que el input no este vacío o con espacios
      const newTask = this.task.trim()
      if(!newTask){
        return
      }

      /*
      * $emit('evento') lanza un evento que puede ser escuchado por
      * el padre con @evento, nótese que tiene que ser
      * igual el string lanzado que el evento a escuchar
      */
      this.$emit('saveTask', newTask)
      this.task = ''
    }
  }
}
</script>


<style scoped>
.todo-form {
  margin-top: 40px;
}
.task-input {
  max-width: calc(100% - 100px);
}
</style>
