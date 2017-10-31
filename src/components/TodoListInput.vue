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
      this.$emit('saveTask', this.task)
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
