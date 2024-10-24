import { createRouter, createWebHistory } from "vue-router";
import { allRouter } from  "@/router/routes/allRouter.js";

const router = createRouter({
    history: createWebHistory(),
    routes: allRouter
})

export default router;