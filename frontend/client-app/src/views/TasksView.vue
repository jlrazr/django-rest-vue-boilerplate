<template>
  <h2>Tasks Page</h2>

  <div class="new-task">
    <input type="text" name="title" id="title" placeholder="Enter the title here" v-model="title">
    <p>Your title is: {{ title }}</p>
    <input type="textarea" v-model="description" name="description" id="description"
      placeholder="Enter the description here" />
    <!-- <button @click="store.postTask('/tasks/api/v1/tasks/', newTaskData)">Create new Task</button> -->
    <button @click="createTasks">Create new Task</button>
  </div>
  <div v-for="task in tasks" :key="task.id" class="task-container">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <label :for="task.title">Complete task</label>
    <input type="checkbox" name="completed" :id="task.title"
      @click="store.deleteTask(`/tasks/api/v1/tasks/${task.id}/`)" />
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
.task-container {
  border: 1px solid rgb(175, 175, 175);
  border-radius: 8px;
  margin: 10px;
  padding: 10px;

  h3 {
    font-size: 24px;
  }
}
</style>
