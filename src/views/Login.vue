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
              <button @click="login(model.email,model.password)" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Login</button>
            </div>
            <div class="text-center mt--3 mb-3">
                <small>Don't have an account?</small> <a href="#" ><small>Sign up now</small></a>
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
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
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
           this.$router.push({
             path: `/info`,
             params:{email:this.model.email}
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
             message: 'EMAIL NOT STANDARD',
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
  }
};
</script>
<style></style>
