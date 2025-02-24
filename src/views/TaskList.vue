<script setup>
import Table from "@/components/shared/BaseTable.vue";
import { ref } from "vue";
import { useTaskStore } from "@/stores/todo";

// Use Pinia store
const taskStore = useTaskStore();
const newTask = ref("");

// Function to add a new task
const addTask = () => {
  if (newTask.value.trim() !== "") {
    taskStore.addTask(newTask.value.trim());
    newTask.value = "";
  }
};
</script>

<template>
  <section
    class="w-full max-w-[900px] mx-auto mt-[100px] p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col md:flex-row gap-6 min-h-[500px]"
  >
    <!-- Form Section -->
    <div class="w-full md:w-1/3 pr-5 border-r">
      <form @submit.prevent="addTask">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="taskName"
          >
            Task Name
          </label>
          <input
            v-model="newTask"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="taskName"
            type="text"
            placeholder="Enter task name"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            :disabled="!newTask.trim()"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>

    <!-- Task Table Section -->
    <div class="w-full md:w-2/3">
      <Table :items="taskStore.tasks" :markAsDone="taskStore.markAsDone" />
    </div>
  </section>
</template>
