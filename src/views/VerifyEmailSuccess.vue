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
        <div v-if="this.success" class="card-body " style="height: 350px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <img src="@/assets/success.png" style="width: 60px;height: 60px">
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Success</h2>
            <div class="mt-3"></div>
            <span style="align-items: flex-start; color: #86909C">
             Congratulations!
            </span>
            <div class="mt-2"></div>
            <span style="align-items: flex-start; color: #86909C">
             You have created an account.
            </span>
          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <button @click.prevent="toLogin()" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Get Start</button>
            </div>

          </form>
        </div>
        <div v-else class="card-body " style="height: 350px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <i class="el-icon-error" style="width: 60px;height: 60px"/>
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Failed</h2>
            <div class="mt-3"></div>
            <span style="align-items: flex-start; color: #86909C">
             Sorry
            </span>
            <div class="mt-2"></div>
            <span style="align-items: flex-start; color: #86909C">
             Your email verification code is invalid.
            </span>
          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <button @click.prevent="toLogin()" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Back</button>
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
     success:true,
    };
  },
  created() {
    this.autologin()
    this.verifyEmailToken(this.$route.params.token)
  },
  methods:{
    verifyEmailToken(token) {
      axios({
        method: "get",
        url: "/api/auth/email/verifyLogin/"+token,
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
            message: 'LOGIN.EMAIL_VERIFIED',
          })
          this.success = true
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 403) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'LOGIN.EMAIL_CODE_NOT_VALID',
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
    autologin(){
      console.log((localStorage.getItem("login")))
      if (localStorage.getItem("login")==="true") {
        this.$router.push({
          path: `/management`,
        });
      }
    }
  },

};
</script>
<style></style>
