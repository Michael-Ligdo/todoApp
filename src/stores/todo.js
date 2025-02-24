import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  }),

  actions: {
    addTask(title) {
      this.tasks.push({ id: Date.now(), title, completed: false });
      this.saveTasks();
    },
    markAsDone(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.completed = true;
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },

  getters: {
    completedTasks: (state) => state.tasks.filter(task => task.completed),
    pendingTasks: (state) => state.tasks.filter(task => !task.completed),
  }
});
