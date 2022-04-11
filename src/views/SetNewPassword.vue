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
      <div v-if="this.success" class="card  shadow border-0" style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 500px;width: 464px" >
          <div class="LoginTitle" style=" margin-top:20px;margin-left:20px;font-weight: bold; font-size: 24px; color: #4E5969;">
            Forgot Password
            <div style="border-bottom:2px solid #4D56E1; margin-top: 16px;width: 140px"></div>
          </div>
          <div class="mt-5"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="" style="height: 50px" >
              <img src="@/assets/user.svg"> <span style="font-size: 15px">{{this.$route.params.email}}</span>
            </div>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="New Password"
              type="password"
              v-model="model.newPassWord"
              style="height: 50px"
            >
            </base-input>
            <div class="mt-4"></div>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Confirm New Password"
              type="password"
              v-model="model.password"
              style="height: 50px"
            >
            </base-input>

            <div class="text-center mt-5">
              <button @click="resetPassword(this.$route.params.email,this.model.newPassWord,this.$route.params.token)" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Reset Password</button>
            </div>

          </form>
        </div>
      </div>
      <div v-else class="card  shadow border-0" style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 500px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <img src="@/assets/success.png" style="width: 60px;height: 60px">
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Failed</h2>
            <div class="mt-3"></div>
            <span style="align-items: flex-start; color: #86909C">
             Sorry
            </span>
            <div class="mt-2"></div>
            <span style="align-items: flex-start; color: #86909C">
             Your forgot password verification code is invalid.
            </span>
          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <button @click="toLogin" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Get Start</button>
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
      success:false,
      model: {
        newPassWord: "",
        password: "",
      },
    };
  },
  created() {
    this.verifyForgotPasswordToken(this.$route.params.token)
    console.log(this.$route.params.email,this.model.newPassWord,this.$route.params.token)
  },
  methods:{
    verifyForgotPasswordToken(token) {
      axios({
        method: "get",
        url: "http://127.0.0.1:3000/auth/email/verifyForgotPassword/"+token,
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
      }).then((res) => {
        console.log(token)
        console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'EMAIL_VERIFIED',
          })
          this.success = true
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 403) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'FORGOTPASSWORD.EMAIL_CODE_NOT_VALID',
          })
          this.success = false
        } else {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'ERROR',
          })
          this.success = false
        }
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
          })
          this.success = false
        } else if (error.request) {
          console.log(error.request);
          this.success = false
        } else {
          console.log('Error', error.message);
          this.success = false
        }
      })
    },
    toLogin() {
      this.$router.push({
        path: `/login`,
      });
    },
    resetPassword(email,newPassword,newPasswordToken){
      axios({
        method: "post",
        url: "http://127.0.0.1:3000/auth/email/reset-password",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
        data: {
          email: email,
          newPassword: newPassword,
          newPasswordToken:newPasswordToken,
        },
      }).then((res) => {
        console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'RESET_PASSWORD.PASSWORD_CHANGED',
          })
          this.$router.push({
            path: `login`,
          });
        } else if (res['data']['success'] === false) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'RESET_PASSWORD.CHANGE_PASSWORD_ERROR',
          })
        } else {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'ERROR',
          })
        }
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'RESET_PASSWORD.CHANGE_PASSWORD_ERROR',
          })
          this.success = false
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
