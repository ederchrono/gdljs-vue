<template>
  <form class="todo-form" @submit.prevent="saveTask">
    <label class="label">Tarea</label>

    <div class="field is-grouped">

      <div class="control">
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
      // validate that the input is not empty
      const newTask = this.task.trim()
      if(!newTask){
        return
      }

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
</style>
