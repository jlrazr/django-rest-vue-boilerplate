import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
    state: () => ({
        counter: 0
    }),

    actions: {
        incrementBy(amount) {
            this.counter += amount
            console.log(this.counter)
        }
    },
})
