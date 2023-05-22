
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Tasks', component: () => import('@/views/TasksView.vue') },
    ]
})

export default router