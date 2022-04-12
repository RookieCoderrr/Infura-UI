<template>
  <div>
    <div class="na" style=" height: 60px">
      <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Management
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>
    <div class="option mt-2" style="height: 45px;">
      <div class="left" style="height: 45px; width: 400px;float:left;display: flex;justify-content:center;align-items: center">
        <el-dropdown >
          <el-button size="small" style="background-color: white;color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
            Hello1<i class=" ml-1 el-icon-arrow-down"/>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Hello1</el-dropdown-item>
              <el-dropdown-item>Hello2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button-group class="ml-4">
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">General</el-button>
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">Setting</el-button>
        </el-button-group>
      </div>

    </div>


    <div class="container-fluid">
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        *Project Name
      </div>
      <div class="row mt-3 " style="">
        <div class="col-6">
          <el-input v-model="input" placeholder="Please input" clearable />
        </div>
        <div class="col-4">
          <el-button style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
        </div>
      </div>
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        *Keys
      </div>
      <div class=" mt-3 ml-1 pt-3 pb-3 card shadow border-0" style="height: 176px;background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div class="" style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C;">
            Project ID
          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            270LJF8QIIPCfMyVRtXJstMHQLM
          </div>
        </div>
        <div class=""   style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            Project Secret
          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            c900b77516044bd18fb921864dc38dcc
          </div>
        </div>
        <div class="" style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C;">
            Endpoints
          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            https://270LJF8QIIPCfMyVRtXJstMHQLM:c900b77516044bd18fb921864dc38dcc@eth2-beacon-mainnet.infura.io
          </div>
        </div>
        <div class="" style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">
          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: center;font-style: normal;font-weight: 500;font-size: 16px;color: #86909C;">

          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            https://270LJF8QIIPCfMyVRtXJstMHQLM:c900b77516044bd18fb921864dc38dcc@eth2-beacon-mainnet.infura.io
          </div>
        </div>
      </div>

      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Delete Project
      </div>
      <div class=" mt-3 ml-1 pl-4 pt-3 card shadow border-0" style="height: 114px;background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size:16px;color: #86909C">
          Any applications using this project’s keys will no longer be able to access the Magnet API. This can not be undone.
        </div>
        <div class="mt-3">
          <el-button style="background-color:#F53F3F;color: white ;width: 266px;border-radius: 2px;">Delete Project</el-button>
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
  created() {
    this.getProjectInfo(this.email)
    console.log(localStorage.getItem("email"),localStorage.getItem("token"))
  },
  mounted() {
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
