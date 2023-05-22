import { defineStore } from 'pinia'
import axiosInstance from '../services/api/axios'

const baseUrl = import.meta.env.VITE_APP_API_BASE

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [],

        getters: {
            getTasks(state) {
                return state.tasks
            }
        },
    }),

    actions: {
        async fetchTasks() {
            try {
                const data = await axiosInstance.get(`${baseUrl}/tasks/api/v1/tasks/`)
                this.tasks = data.data
            }
            catch (error) {
                console.log(error)
            }
        },

        async postTask(endpointUrl, dataObj) {
            try {
                const response = await axiosInstance.post(`${import.meta.env.VITE_APP_API_BASE}${endpointUrl}`, dataObj)
                this.fetchTasks()
                return response
            }
            catch (error) {
                console.log(error)
            }
        },

        async deleteTask(endpointUrl) {
            try {
                const response = await axiosInstance.delete(`${import.meta.env.VITE_APP_API_BASE}${endpointUrl}`)
                this.fetchTasks()
                return response
            }
            catch (error) {
                console.log(error)
            }
        }
    },
})
