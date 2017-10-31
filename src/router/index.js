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
      name: 'Welcome',
      component: MyWelcome
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
