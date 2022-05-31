import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import Homepage from "@/components/Homepage.vue";

const routes = [
  { path: "/login", name: "login", component: LoginPage },
  { path: "/welcome", name: "homepage", component: Homepage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
