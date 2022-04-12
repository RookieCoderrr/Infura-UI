<template>
  <div>
    <div class="na ml-4" style=" height: 60px">
      <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Management
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>


    <div class="container-fluid" style="">
      <div class="row mt-3" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        <div class="col-3"  style=" " >
          My Project
          <img src="@/assets/addButton.png" style="height:30px">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow border-0">
           <div class="row" style="height: 100px">
             <div class="col-3" style="">
                <div style="font-family: NucleoIcons;font-style: normal;font-weight: 600;font-size: 26px;height: 60px;display: flex;align-items: center; text-align: left;color:#1D2129 ">
                  <span class="ml-5">Project 1</span>
                </div>
               <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 16px;display: flex;align-items: center; text-align: left;color: #4E5969;">

                 <span class="ml-5"> March 6, 2022 Created</span>
               </div>
             </div>
             <div class="col-3" style="">
               <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 50px;display: flex;align-items: center; text-align: left">
                 <span class="ml-4">Requests Today</span>
               </div>
               <div style="font-family: NucleoIcons; ;font-style: normal;font-weight: 600;font-size: 26px;height: 25px;display: flex;align-items: center; text-align: left;color: #548DF3;">

                 <span class="ml-4"> 200</span>
               </div>
             </div>
             <div class="col-6" style="">
               <div style="text-align: center; height: 100%;display: flex;align-items: center; justify-content:center;">
                 <el-button  style="color: white;background-color: #4D56E1;border-radius:2px; width: 200px;">Check Status</el-button>
                 <span class="ml-4"></span>
                 <el-button  style="color: white;background-color: #4D56E1; ;border-radius:2px; width: 200px">Settings</el-button>
               </div>

             </div>
           </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow border-0">
            <div class="row" style="height: 100px">
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons;font-style: normal;font-weight: 600;font-size: 26px;height: 60px;display: flex;align-items: center; text-align: left;color:#1D2129 ">
                  <span class="ml-5">Project 2</span>
                </div>
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 16px;display: flex;align-items: center; text-align: left;color: #4E5969;">

                  <span class="ml-5"> March 6, 2022 Created</span>
                </div>
              </div>
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 50px;display: flex;align-items: center; text-align: left">
                  <span class="ml-4">Requests Today</span>
                </div>
                <div style="font-family: NucleoIcons; ;font-style: normal;font-weight: 600;font-size: 26px;height: 25px;display: flex;align-items: center; text-align: left;color: #548DF3;">

                  <span class="ml-4"> 305</span>
                </div>
              </div>
              <div class="col-6" style="">
                <div style="text-align: center; height: 100%;display: flex;align-items: center; justify-content:center;">
                  <el-button  style="color: white;background-color: #4D56E1;border-radius:2px; width: 200px;">Check Status</el-button>
                  <span class="ml-4"></span>
                  <el-button  style="color: white;background-color: #4D56E1; ;border-radius:2px; width: 200px">Settings</el-button>
                </div>

              </div>
            </div>
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
    };
  },
  mounted() {
    this.getProjectInfo(this.email)
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
        console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'Success',
          })
        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'no no no no no ',
          })
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
    }
  }
};
</script>
<style></style>
