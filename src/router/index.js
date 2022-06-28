import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import DashBoardv2 from "../views/DashBoardv2.vue";

import Login from "../views/Login.vue";
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
import Plan from "@/views/plan"
import ConnectSocial from "@/views/ConnectSocial";

const routes = [
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
        path: "/setNewPassWord/:email/:token",
        name: "setNewPassWord",
        components: { default: SetNewPassword },
      },
      {
        path: "/signUp",
        name: "signUp",
        components: { default: SignUp },
      },
      {
        path: "/sendEmailVerificationSuccess/:email",
        name: "sendEmailVerificationSuccess",
        components: { default: SendEmailVerificationSuccess },
      },
      {
        path: "/verifyEmailSuccess/:token",
        name: "verifyEmailSuccess",
        components: { default: VerifyEmailSuccess },
      },
      {
        path: "/connectSocial",
        name: "connectSocial",
        components: { default: ConnectSocial },
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboardv2",
    component: DashboardLayout,
    children: [

      {
        path: "/dashboardv2/:net/:projectId",
        name: "dashboardv2",
        components: { default: DashBoardv2 },
      },
      {
        path: "/management",
        name: "management",
        components: { default: Management },
      },
      {
        path: "/info/:projectId",
        name: "info",
        components: { default: Info },
      },
      {
        path: "/setting/:projectId",
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
      {
        path: "/plan",
        name: "plan",
        components: { default: Plan },
      },

    ],
  },

];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});
// router.beforeEach((to,from,next) =>{
//   //验证token,只有存在token的时候，才能跳转到内容页
//   console.log(to);
//   console.log(from);
//   let token = localStorage.getItem("token");
//   //console.log(token);
//   if(token || to.path === '/login' || to.path === '/signUp' || to.path === '/login' || to.path === '/forgotPassword'){
//     next();
//     console.log(token);
//   }else{
//     next("/login");
//   }
// })

export default router;
