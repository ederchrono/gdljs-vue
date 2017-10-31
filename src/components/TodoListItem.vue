<template>
  <div class="panel-block">
    {{ task.label }}

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
  props: {
    task: {
      type: Object,
      required: true,
      validator: function (task) {
        // validate that the task has a label
        return task.label
      }
    }
  },

  computed: {
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
