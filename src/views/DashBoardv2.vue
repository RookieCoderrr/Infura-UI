<template>
  <div>
    <div class="na" style=" height: 60px">
      <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Dashboard
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:1px;background-color:whitesmoke;overflow:hidden;"></div>
    <div class="option" style="height: 45px;">
      <div class="left" style="height: 45px; width: 25%;;display: inline-block;text-align:center;justify-content: center;align-items: center">
        <el-dropdown >
          <el-button size="small" style="background-color: white;color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
            Mainnet<i class=" ml-1 el-icon-arrow-down"/>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Mainnet</el-dropdown-item>
              <el-dropdown-item>Testnet</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span class="ml-2" ></span>
        <el-dropdown  >
          <el-button  size="small" style="background-color: white;color:#4D56E1;border-radius: 2px;font-weight: 40;font-family:'PingFang SC';font-style: normal;font-size: 14px; ">
            All projects<i class=" ml-1 el-icon-arrow-down"/>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>1</el-dropdown-item>
              <el-dropdown-item>2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="mid" style="height: 45px; width: 55%;display: inline-block">
        <el-button-group class="ml-4">
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">7 days</el-button>
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">30 days</el-button>
        </el-button-group>
        <span class="ml-3"></span>
        <el-date-picker
            size="small"
            v-model="value2"
            type="daterange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
        />

      </div>
      <div class="right" style="height: 45px; width: 20%;display: inline-block;text-align:center;">
        <el-button size="small" style="background-color: white;border-radius: 2px;font-weight: 40"><i class="el-icon-setting mr-1" ></i>Project Settings</el-button>
      </div>
    </div>


    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card shadow border-0">
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
      login:true,
    };
  },
  created() {
    this.testLogin()
    if (this.login) {
      this.getProjectInfo(this.email)
    }

  },
  mounted() {
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
