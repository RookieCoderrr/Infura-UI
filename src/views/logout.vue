<template>
  <div>
    <div class="na" style=" height: 60px">
      <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
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
      <div class="row mt-4 ml-2" >
        <el-button @click.prevent="logout" style="background-color:#4D56E1;color: white ;width: 200px">Log Out</el-button>
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
    };
  },
  methods:{
    getProjectInfo(email) {
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/list",
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
        if (res['data']['success'] === true) {
          console.log(res)
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
    logout(){
      localStorage.setItem("login","false")
      console.log("oh no")
      this.$router.push({
        path: `login`,

      });
    },
  },
  mounted() {

  },
};
</script>
<style></style>
