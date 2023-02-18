import { storeToRefs } from "pinia"
import { createWebHistory, createRouter } from "vue-router"
import AuthForm from "@/pages/AuthForm.vue"
import TheTasks from "@/pages/TheTasks.vue"
import useAuthStore from "@/store/authStore"

const routes = [
  {
    path: "/tasks",
    name: "tasks",
    component: TheTasks,
    props: true,
    meta: { requiresAuth: true },
  },

  {
    path: "/auth",
    name: "auth-form",
    component: AuthForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { logged } = storeToRefs(useAuthStore())
  if (!logged.value && to.meta.requiresAuth) next("/auth")
  else next()
})

export default router
