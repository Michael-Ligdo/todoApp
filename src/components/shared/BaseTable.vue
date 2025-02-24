<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Mark as Done</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="border-b">
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              :class="{ 'line-through text-gray-500': item.completed }"
            >
              {{ item.title }}
            </td>
            <td class="px-6 py-4 text-green-500 font-bold">
              <p
                v-if="!item.completed"
                @click="markAsDone(item.id)"
                class="cursor-pointer"
              >
                Mark as Done
              </p>
              <span v-else>Done</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
  markAsDone: Function,
});
</script>
