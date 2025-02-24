import { createRouter, createWebHistory } from 'vue-router'
import TaskList  from '../views/TaskList.vue'
import CompletedTasks  from '../views/CompletedTasks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'taskLists',
      component: TaskList,
    },
    {
      path: '/completed',
      name: 'completedTasks',
      component: CompletedTasks,
    },
    
  ],
})

export default router
