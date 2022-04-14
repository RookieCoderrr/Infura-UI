<template>
  <div class="row justify-content-center">
    <div class="col-6" style="">
      <div style="height: 100% ;padding-top: 20%">
        <span class="" style="%; font-size: 55px;color: #4B56E9;" >
          Distributed RPC
        </span>
        <span class="" style="font-size: 55px; color: #4B56E9">
          Service Plateform on
        </span>
        <span class="" style="font-weight: bold;font-size: 55px; color: #4B56E9">Neo Network</span>
      </div>
    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-5 " >
      <div class="card  shadow border-0" style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 540px;width: 464px" >
          <div class="LoginTitle" style=" margin-top:20px;margin-left:20px;font-weight: bold; font-size: 24px; color: #4E5969;">
            Email Login
            <div style="border-bottom:2px solid #4D56E1; margin-top: 16px;width: 140px"></div>
          </div>
          <div class="mt-5"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email address"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
              style="height: 50px"
            >
            </base-input>
            <div class="mt-4"></div>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
              style="height: 50px"
            >
            </base-input>
            <div class="mt-5"></div>
            <div class="row">
              <div class="col-6">
                <input type="checkbox" id="checkbox" v-model="checked">
                <label  for="checkbox" style="margin-left: 10px; font-size: 14px ;color: #4E5969" >Remember me</label>
              </div>
              <div class="col-6">
                <router-link to="/forgotPassword" style="float: right;"><small>Forgot password?</small></router-link>
              </div>
            </div>
            <div class="text-center mt-5">
              <button @click.prevent="login(model.email,model.password)" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Login</button>
            </div>
            <div class="text-center mt--3 mb-3">
                <small>Don't have an account?</small> <router-link to="/signup" ><small>Sign up now</small></router-link>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {ElMessage} from 'element-plus'
let Base64 = require('js-base64').Base64
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
        login :"false",
      },
      checked:false,
    };
  },
  mounted() {
    let username = localStorage.getItem("email");
    if (username) {
      this.model.email = localStorage.getItem("email");
    }
    let password = localStorage.getItem("password")
    if (password){
      this.model.password = Base64.decode(localStorage.getItem("password"));// base64解密
      this.checked = true
    }
  },
  created() {
    this.autologin()
  },
  methods: {
    login(email,password) {
      axios({
        method: "post",
        url: "/api/auth/email/login",
        data: {
          email: email,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
      }).then((res) => {
         console.log(res)
         if (res['data']['success'] === true) {
           if (this.checked) {
             let passwordCode = Base64.encode(this.model.password); // base64加密
             localStorage.setItem("email", this.model.email);
             localStorage.setItem("login", "true");
             localStorage.setItem("password", passwordCode);
           } else {
             localStorage.setItem("email", this.model.email);
             localStorage.setItem("login", "true");
             localStorage.removeItem("password");
           }
           let token = res['data']['data']['token']['access_token']
           let email = res['data']['data']['user']['email']
           localStorage.setItem("token",token)
           localStorage.setItem("email",email)
           this.$router.push({
             path: `/management`,
           });
         } else if (res['data']['success'] === false && res['data']['data']['status'] === 403) {
           ElMessage({
             showClose: true,
             type: 'error',
             message: 'LOGIN.EMAIL_NOT_VERIFIED',
           })
         }else if (res['data']['success'] === false && res['data']['data']['status'] === 401) {
           ElMessage({
             showClose: true,
             type: 'error',
             message: 'LOGIN.PASSWORD_NOT_VALID',
           })
         } else if (res['data']['success'] === false && res['data']['data']['status'] === 404) {
           ElMessage({
             showClose: true,
             type: 'error',
             message: 'LOGIN.USER_NOT_FOUND',
           })
         } else {
           ElMessage({
             showClose: true,
             type: 'error',
             message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
           })
         }
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD',
          })
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      })
    },
    autologin(){
      console.log((localStorage.getItem("login")))
      if (localStorage.getItem("login")==="true") {
        this.$router.push({
          path: `/management`,
        });
      }
    }
  }
};
</script>
<style></style>
