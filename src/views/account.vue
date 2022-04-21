<template>
  <div>
    <div class="na " style=" height: 60px;background-color: white;;box-shadow:0px 5px 30px rgba(77, 86, 225, 0.05);">
      <div class="na-left ml-4" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Account
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>
    <div class="container-fluid">
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        My Account
      </div>
      <div class=" mt-3 ml-1 pl-3 pt-3 pb-4 card shadow border-0" style="height: 50px;background-color: rgba(255,255,255,0.5);border-radius: 5px;">
          <div class="" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size:14px;color: #1D2129; ">
            {{ this.email }}
          </div>
      </div>
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Change Password
      </div>
      <div class=" mt-3 ml-1 pt-1 pb-1 card shadow border-0" style="height: 272px;background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div class=""   style="height:68px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 18%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            *Old Password
          </div>
          <div class="" style="display: inline-block;width: 35%;">
            <el-input
                v-model="inputOldPassword"
                type="password"
                placeholder="Please input old password"
                maxlength="20"
                minlength="8"
                show-password
            />
          </div>
        </div>
        <div class=""   style="height:68px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 18%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            *New Password
          </div>
          <div class="" style="display: inline-block;width: 35%;">
            <el-input
                v-model="inputNewPassword"
                type="password"
                placeholder="Please input new password"
                maxlength="20"
                minlength="8"
                show-password
            />
          </div>
        </div>
        <div class=""   style="height:68px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 18%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            *Confirm New Password
          </div>
          <div class="" style="display: inline-block;width: 35%;">
            <el-input
                v-model="inputConfirmPassword"
                type="password"
                placeholder="Please input confirm password"
                maxlength="20"
                minlength="8"
                show-password
            />
          </div>

        </div>
        <div class=""   style="height:68px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 24%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            <el-button @click.prevent="clear" style="width: 127px" >Cancel</el-button>
            <el-button @click.prevent="resetPassword(this.inputNewPassword,this.inputOldPassword)" style="background-color:#4D56E1;color: white ;width: 127px">Save</el-button>
          </div>

        </div>
      </div>


    </div>
  </div>
</template>
<script>

import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      nav: null,
      email:localStorage.getItem("email"),
      inputOldPassword:'',
      inputNewPassword:'',
      inputConfirmPassword:'',
      login:true,
    }
  },
  created() {
      this.testLogin()
      if(this.login){
        this.getProjectInfo(this.email)
      }

  },
  methods:{
    testLogin(){
      if (localStorage.getItem("login")==="false") {
        this.login = false
        this.$router.push({
          path: `/login`,
        });
      }
    },
    clear(){
      this.inputNewPassword = ''
      this.inputOldPassword = ''
      this.inputConfirmPassword = ''
    },
    getProjectInfo(email) {
      axios({
        method: "patch",
        url: "/api/project/list",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: email,
        },
      }).then((res) => {
        console.log(res)
        if (res['data']['success'] === true) {
          this.projectList = res['data']['data']
        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'JWT TIME OUT ',
          })
          localStorage.setItem("login","false")
          console.log("oh no")
          this.$router.push({
            path: `login`,

          });
        } else if (error.request) {
          console.log(error.request);
          this.success = false
        } else {
          console.log('Error', error.message);
        }
      })
    },
    resetPassword(newPassword,currentPassword){
      if (this.inputOldPassword.length < 8 ||this.inputOldPassword.length >20 ){
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Old password digits out of range (8-20)',
        })
        return
      }
      if (this.inputNewPassword.length < 8 ||this.inputNewPassword.length >20 ){
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'New password digits out of range (8-20)',
        })
        return
      }
      if (this.inputConfirmPassword != this.inputNewPassword ){
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'two enter password not the same',
        })
        return
      }
      axios({
        method: "post",
        url: "/api/auth/email/reset-password",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
        },
        data: {
          email: this.email,
          newPassword: newPassword,
          currentPassword:currentPassword,
        },
      }).then((res) => {
        console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'RESET_PASSWORD.PASSWORD_CHANGED',
          })
          localStorage.setItem("login","false")
          this.$router.push({
            path: `/login`,
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
  },
  mounted() {
  },
};
</script>
<style></style>
