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
        <div class="card-body " style="height: 350px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <img src="@/assets/success.png" style="width: 60px;height: 60px">
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Success</h2>
            <span style="align-items: flex-start; color: #86909C">
              If your email address registered in Megnet,
            </span>
            <div></div>
            <span style="align-items: flex-start; color: #86909C">
              you will get a reset email now.
            </span>
          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <button @click.prevent="toLogin" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Back Home</button>
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
        password: "",
      },
    };
  },
  methods:{
    toLogin() {
      this.$router.push({
        path: `/login`,
      });
    },
    sendForgotPassword(email) {
      axios({
        method: "get",
        url: "http://127.0.0.1:3000/auth/email/forgot-password/"+email,
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
            message: 'RESET_PASSWORD.EMAIL_SENDED_RECENTLY',
          })
        }else if (res['data']['success'] === false && res['data']['data']['status'] === 404) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'LOGIN.USER_NOT_FOUND',
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
