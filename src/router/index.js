import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword"
import SendForgotPasswordSuccess from "../views/SendForgotPasswordSuccess";
import SetNewPassword from "../views/SetNewPassword";
import SetForgotPasswordSuccess from "../views/SetForgotPasswordSuccess";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons },
      },
      {
        path: "/maps",
        name: "maps",
        components: { default: Maps },
      },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/tables",
        name: "tables",
        components: { default: Tables },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
      {
        path: "/forgotPassword",
        name: "forgotPassword",
        components: { default: ForgotPassword },
      },
      {
        path: "/sendForgotPasswordSuccess",
        name: "sendForgotPasswordSuccess",
        components: { default: SendForgotPasswordSuccess },
      },
      {
        path: "/setForgotPasswordSuccess",
        name: "setForgotPasswordSuccess",
        components: { default: SetForgotPasswordSuccess },
      },
      {
        path: "/setNewPassWord",
        name: "setNewPassWord",
        components: { default: SetNewPassword },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
