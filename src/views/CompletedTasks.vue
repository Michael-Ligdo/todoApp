<script setup>
import Table from '@/components/shared/BaseTable.vue'
import { useTaskStore } from '@/stores/todo'

const taskStore = useTaskStore()
</script>

<template>
  <section class="w-full max-w-[900px] mx-auto mt-[100px] p-6 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col md:flex-row gap-6 min-h-[500px]">
    
    <!-- Image Section -->
    <div class="w-full md:w-1/3 pr-5 border-r flex flex-col items-center justify-center text-center">
        <img src="/completed-imge.png" alt="Completed Tasks" class="w-[80%] max-w-[200px] mb-4">
        <p class="text-gray-700 font-semibold">🎉 Congratulations! You've completed your tasks! 🎉</p>
    </div>

    <div class="w-full md:w-2/3">
      <Table :items="taskStore.completedTasks" />
    </div>

  </section>
</template>
