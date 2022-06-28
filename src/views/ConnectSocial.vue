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
      <div class="card  shadow border-0" v-loading="loading"  element-loading-text="Signing up..." style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 430px;width: 464px" >
          <div class="LoginTitle" style=" margin-top:20px;margin-left:20px;font-weight: bold; font-size: 24px; color: #4E5969;">
            Connect Social
            <div style="border-bottom:2px solid #4D56E1; margin-top: 16px;width: 140px"></div>
          </div>
          <div class="mt-5"></div>
          <form role="form"  style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-3">
              <button @click.prevent="step1" type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1;border-radius:5px;border: none;color: white;font-weight: 700;font-size: 16px;font-style: normal">Connect twitter</button>
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
      loading:false,
    };
  },
  created() {
    this.autologin()
    this.step1()
  },
  methods: {
    step1() {
      axios({
        method: "post",
        url: "https://api.twitter.com/oauth/request_token",
        params: {
          oauth_callback: 'http://127.0.0.1:8081/connectSocial',
          oauth_consumer_key:'ju8ZQ3giwGIrQ5jdfBeFrpApb'
        },
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
      }).then((res) => {
        console.log(res)
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          this.loading = false
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
          })
        } else if (error.request) {
          this.loading = false
          console.log(error.request);
        } else {
          this.loading = false
          console.log('Error', error.message);
        }
      })
    },
    signUp(email,password) {
      if (this.model.password.length <=8 || this.model.password.length >= 20 ) {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Password must be 8-20 digits',
        })
        return
      } if (this.model.email.length === 0) {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Please enter email address',
        })
        return
      }
      this.loading = true
      axios({
        method: "post",
        url: "/api/auth/email/register",
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
          console.log(this.model.email)
          this.loading = false
          this.$router.push({
            path: `/sendEmailVerificationSuccess/${this.model.email}`
          });
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 403) {
          this.loading = false
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'REGISTRATION.USER_ALREADY_REGISTERED',
          })
        } else if (res['data']['success'] === false && res['data']['data']['status'] === 500) {
          this.loading = false
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'LOGIN.EMAIL_SENDED_RECENTLY',
          })
        } else {
          this.loading = false
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD',
          })
        }
      }).catch(function (error) {
        if (error.response && error.response.status === 400) {
          this.loading = false
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'EMAIL NOT STANDARD OR PASSWORD NOT STANDARD',
          })
        } else if (error.request) {
          this.loading = false
          console.log(error.request);
        } else {
          this.loading = false
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
