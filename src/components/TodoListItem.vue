<template>
  <div class="panel-block">

    {{ task.label }}

    <!--
      la diferencia entre 'class' y ':class' es que al primero
      se le asigna literalmente el string y al segundo se le
      asigna el valor de la variable. El resultado es la
      concatenación de ambas.
      -->
    <div
      class="button toggle-button"
      :class="toggleButtonClasses"
      @click="toggle">
      {{ toggleButtonText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoListItem',
  /*
  * propiedades recibidas desde el padre,
  * NO deben ser mutadas por el hijo.
  */
  props: {
    task: {
      type: Object,
      required: true,
      validator: function (task) {
        // valida que la tarea tenga un label
        return task.label
      }
    }
  },

  computed: {
    /*
    * classes de css pueden ser manejadas como objetos
    * que dependan de propiedades o data.
    */
    toggleButtonClasses () {
      return {
        'is-danger': this.task.done,
        'is-info': !this.task.done
      }
    },
    toggleButtonText () {
      return this.task.done ? 'deshacer': 'completar'
    }
  },

  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.panel-block {
  position: relative;
}
.toggle-button {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
