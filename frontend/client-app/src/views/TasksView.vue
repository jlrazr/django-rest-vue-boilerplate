<template>
  <div class="container mx-auto">
    <div class="new-task flex">
      <form class="bg-gray-700 py-4 px-4 mb-2 container">
        <input type="text" name="title" id="title" placeholder="Enter the title here" v-model="title" required
          class="text-gray-700 my-2">
        <input type="textarea" v-model="description" name="description" id="description"
          placeholder="Enter the description here" class="text-gray-700 my-2 mx-2" />
        <button class="text-gray-100 my-2" @click="createTasks">Create new Task</button>
      </form>
    </div>
    <div v-for="task in tasks" :key="task.id" class="task bg-gray-700 py-4 px-4 mb-2">
      <h3 class="text-gray-100 my-2">{{ task.title }}</h3>
      <p class="text-gray-100 my-2">{{ task.description }}</p>
      <label class="text-gray-100 my-2" :for="task.title">Complete task</label>
      <input type="checkbox" name="completed" :id="task.title"
        @click="store.deleteTask(`/tasks/api/v1/tasks/${task.id}/`)" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

const store = useTasksStore()
const tasks = computed(() => store.tasks)
const title = ref("")
const description = ref("")
const createTasks = () => {
  const newTaskData = {
    "title": title.value,
    "description": description.value,
    "completed": false
  }

  store.postTask('/tasks/api/v1/tasks/', newTaskData)
  title.value = ""
  description.value = ""
}

onMounted(() => {
  store.fetchTasks()
})
</script>

<style scoped lang="scss">
.task {
  display: block;
  border: 1px solid rgb(175, 175, 175);
  border-radius: 8px;

  h3 {
    font-size: 24px;
  }
}
</style>
