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
        <div class="card-body " style="height: 550px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <img src="@/assets/info.png" style="width: 60px;height: 60px">
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Verify your Account</h2>
            <span style="align-items: flex-start; color: #86909C; size: 14px">
              A verification email was sent to
            </span>
            <div style="align-items: flex-start; color: #86909C; size: 14px">
              {{this.email}}
            </div>
            <div class="mt-3 mb-3" style="text-align: center" >
              <img src="@/assets/email.png" style="width: 100px;height: 100px">
            </div>
            <div  style="align-items: flex-start; color: #86909C; width:80%;margin-left: 10%">
              Please check your email and confirm your account by clicking the verification link.
            </div>
          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <button @click="reSend(this.email)" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Resend</button>
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
      email:''
    };
  },
  created() {
    this.getRouterData()
  },
  methods: {
    getRouterData() {
      this.email = this.$route.params.email
      console.log('email', this.email)
    },
    reSend(email) {
      axios({
        method: "get",
        url: "http://127.0.0.1:3000/auth/email/resend-verification/register/"+email,
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
      }).then((res) => {
        console.log(email)
        console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'LOGIN.EMAIL_RESENT',
          })
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 500) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'LOGIN.EMAIL_SENDED_RECENTLY',
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
            message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
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
