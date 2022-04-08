import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";
import DashBoardv2 from "../views/DashBoardv2.vue";
import Profile from "../views/UserProfile.vue";
import Tables from "../views/Tables.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword"
import SendForgotPasswordSuccess from "../views/SendForgotPasswordSuccess";
import SetNewPassword from "../views/SetNewPassword";
import SetForgotPasswordSuccess from "../views/SetForgotPasswordSuccess";
import SignUp from "../views/SignUp";
import SendEmailVerificationSuccess from "@/views/SendEmailVerificationSuccess";
import VerifyEmailSuccess from "@/views/VerifyEmailSuccess";
import Management from "../views/Management";
import Info from "@/views/Info";
import Setting from "@/views/Setting";
import Account from "@/views/account";
import Bill from "@/views/bill";
import Logout from "@/views/logout";

const routes = [
  {
    path: "/",
    redirect: "/dashboardv2",
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
        path: "/dashboardv2",
        name: "dashboardv2",
        components: { default: DashBoardv2 },
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
      {
        path: "/management",
        name: "management",
        components: { default: Management },
      },
      {
        path: "/info",
        name: "info",
        components: { default: Info },
      },
      {
        path: "/setting",
        name: "setting",
        components: { default: Setting },
      },
      {
        path: "/account",
        name: "account",
        components: { default: Account },
      },
      {
        path: "/bill",
        name: "bill",
        components: { default: Bill },
      },
      {
        path: "/logout",
        name: "logout",
        components: { default: Logout },
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
      {
        path: "/signUp",
        name: "signUp",
        components: { default: SignUp },
      },
      {
        path: "/sendEmailVerificationSuccess",
        name: "sendEmailVerificationSuccess",
        components: { default: SendEmailVerificationSuccess },
      },
      {
        path: "/verifyEmailSuccess",
        name: "verifyEmailSuccess",
        components: { default: VerifyEmailSuccess },
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
