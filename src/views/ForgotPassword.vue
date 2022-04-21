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
      <div class="card  shadow border-0" v-loading="loading"  element-loading-text="Verifying..." style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 350px;width: 464px" >
          <div class="LoginTitle" style=" margin-top:20px;margin-left:20px;font-weight: bold; font-size: 24px; color: #4E5969;">
            Forgot Password
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
            <div class="text-center mt-4">
              <button @click.prevent="sendForgotPassword(this.model.email)" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Reset Password</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
      },
      loading :false,
    };
  },
  created() {
    this.autologin()
  },
  methods:{
    sendForgotPassword(email) {
      this.loading = true
      axios({
        method: "get",
        url: "/api/auth/email/forgot-password/"+email,
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
      }).then((res) => {
        console.log(email)
        console.log(res)
        if (res['data']['success'] === true) {
          this.loading = false,
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'LOGIN.EMAIL_RESENT',
          })
          this.$router.push({
            name: `sendForgotPasswordSuccess`,
          });
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 500) {
          this.loading = false,
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'RESET_PASSWORD.EMAIL_SENDED_RECENTLY',
          })
        }else if (res['data']['success'] === false && res['data']['data']['status'] === 404) {
          this.loading = false,
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'LOGIN.USER_NOT_FOUND',
          })
        } else {
          this.loading = false,
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'ERROR',
          })
        }
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          this.loading = false,
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
          })
        } else if (error.request) {
          this.loading = false,
          console.log(error.request);
        } else {
          this.loading = false,
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
