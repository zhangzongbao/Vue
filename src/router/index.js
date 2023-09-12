import {createWebHashHistory, createWebHistory,createRouter} from 'vue-router'
import Home from "@/page/Home.vue";
import Add from  '../components/Add.vue'
import Edit from  '../components/Edit.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/add',
        component: Add
    },
    {
        path: '/edit',
        component: Edit
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;