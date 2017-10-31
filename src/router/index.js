import Vue from 'vue'
import Router from 'vue-router'
import MyWelcome from '@/components/MyWelcome'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bienvenido',
      component: MyWelcome
    },
    {
      path: '/todo',
      name: 'Mis tareas',
      component: TodoList
    }
  ]
})
