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
        <el-select v-model="value"  @change="selectProject(value)"  class="ml-4" placeholder="Select" size="small" style="background-color: white;color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
          <el-option
              v-for="item in projectList"
              :key="item.name"
              :label="item.name"
              :value="item.apikey"
          />
        </el-select>
        <el-button-group class="ml-4">
          <el-button size="small" @click.prevent="toInfo(this.projectInfo['apikey'])" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">General</el-button>
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">Setting</el-button>
        </el-button-group>
      </div>

    </div>


    <div class="container-fluid">
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Requirements
      </div>
      <div class=" mt-3 ml-1 pl-3 pt-3 pb-4 card shadow border-0" style="height: 50px;background-color: rgba(255,255,255,0.5);border-radius: 5px;">
          <div class="" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size:14px;color: #1D2129; ">
            <el-checkbox v-model="checked" @change="this.setProjectSecret"></el-checkbox> <span class="ml-1">Project Secret Required</span>
          </div>
      </div>
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Requests Settings
      </div>
      <div class=" mt-3 ml-1 pt-1 pb-1 card shadow border-0" style="height: 152px;background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div class=""   style="height:76px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 24%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            Per Second Requests Rate-limiting
          </div>
          <div class="" style="display: inline-block;width: 30%;">
            <el-input type="number" v-model.number="inputPerSecond" placeholder="" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button @click.prevent=" setProjectLimitPerSecond(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
          </div>
        </div>
        <div class=""   style="height:76px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 24%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            Per Day Total Requests
          </div>
          <div class="" style="display: inline-block;width: 30%;">
            <el-input type="number" v-model.number="inputPerDay" placeholder="" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button  @click.prevent=" setProjectLimitPerday(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
          </div>
        </div>
      </div>

      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Allowlists
      </div>
      <div class=" mt-3 ml-1 pl-4 pt-3 card shadow border-0" style="background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div style="">
          <div style="display: inline-block">
            <el-button size="small" @click.prevent="changeTab('contract')"  style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Contract Address</el-button>
          </div>
          <div style="display: inline-block">
            <el-button size="small"  @click.prevent="changeTab('origin')" label="origin" style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Origins</el-button>
          </div>
          <div style="display: inline-block">
            <el-button size="small" @click.prevent="changeTab('apiRequest')" style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Api Request Method</el-button>
          </div>

        </div>
        <div class="mt-2 mb-2"   style="display: flex;align-items: center;">
          <div v-if="this.showRecord==='apiRequest'" class="" style="display: inline-block;width: 56%;">
            <el-select
                v-model="value1"
                multiple
                placeholder="Select"
                style="width: 100%"
            >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </div>
          <div v-else class="" style="display: inline-block;width: 56%;">
            <el-input v-model="input" placeholder="" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button style="background-color:#4D56E1;color: white ;width: 100px">Add</el-button>
          </div>
        </div>
        <div v-if="this.showRecord==='contract'">
          <div class="mt-2 mb-2" v-for="(param, ind) in contract"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
            </div>

          </div>
        </div>
        <div v-if="this.showRecord==='origin'">
          <div class="mt-2 mb-2" v-for="(param, ind) in origins"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
            </div>

          </div>

        </div>
        <div v-if="this.showRecord==='apiRequest'">
          <div class="mt-2 mb-2" v-for="(param, ind) in apiRequest"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
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
      contract:["0xhHHq1ouoHJHLJLJY8797hkhIUIHJ","0xd2a4cff31913016155e38e474a2c06d08be276cf","0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"],
      origins:["127.0.0.1","localhost"],
      showRecord:"contract",
      apiRequest:["getBlockCount","getBlockInfoByBlockHash","getCommittee","getAccount","getContractHash"],
      value1:[],
      options:[
        {
          value:'getBlockCount',
          label:'getBlockCount'
        },{
          value:'getBlockInfoByBlockHash',
          label:'getBlockInfoByBlockHash'
        },{
          value:'getCommittee',
          label:'getCommittee'
        },{
          value:'getAccount',
          label:'getAccount'
        },{
          value:'getContractHash',
          label:'getContractHash'
        }
      ],
      projectList:[],
      value:'',
      projectInfo:{},
      projectId:this.$route.params.projectId,
      checked:false,
      inputPerSecond:0,
      inputPerDay:0,
    };
  },
  created() {
    this.getProjectInfo(this.email)
    this.getProjectInfoByProjectId(this.projectId)
  },
  watch: {
    $route: "watchrouter",
    // checked:"setProjectSecret"
  },
  methods:{
    watchrouter(){
      if(this.$route.name==="setting") {
        this.projectId = this.$route.params.projectId,
        this.getProjectInfo(this.email)
        this.getProjectInfoByProjectId(this.projectId)
      }

    },
    setProjectSecret() {
        axios({
          method: "patch",
          url: "http://127.0.0.1:3000/project/enableProjectSecret",
          headers: {
            "Content-Type": "application/json",
            withCredentials: " true",
            crossDomain: "true",
            'Authorization':'Bearer ' + localStorage.getItem("token")
          },
          data: {
            email: this.email,
            apikey: this.projectId,
            enable: this.checked,
          },
        }).then((res) => {
          if (this.checked){
            ElMessage({
              showClose: true,
              type: 'success',
              message: 'Enable Project Secret Successfully ',
            })
            console.log(res)
          } else {
            ElMessage({
              showClose: true,
              type: 'success',
              message: ' Disable Project Secret Successfully',
            })
          }

        },)

    },
    changeTab(value) {
      this.showRecord = value
    },
    toInfo(projectId){
      this.$router.push({
        path: `/info/${projectId}`

      });
    },

    selectProject(projectId){
      this.$router.push({
        path: `/setting/${projectId}`

      });
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
        // console.log(res)
        if (res['data']['success'] === true) {
          this.projectList = res['data']['data']
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
    },
    getProjectInfoByProjectId(apiKey) {
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/listByProjectId",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.projectInfo = res['data']['data']
          this.input = res['data']['data']['name']
          this.value = res['data']['data']['name']
          this.checked = res['data']['data']['secretrequired']
          this.inputPerSecond = res['data']['data']['limitpersecond']
          this.inputPerDay = res['data']['data']['limitperday']
          console.log(this.projectInfo)

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
    },
    setProjectLimitPerday(apiKey){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/limitPerday",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          limitPerday: this.inputPerDay,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
            console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'set project limitPerDay successfully',
          })
        }
      })

    },
    setProjectLimitPerSecond(apiKey){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/limitPerSecond",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          limitPerSecond: this.inputPerSecond,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'set project limitPerSecond successfully',
          })
        }
      })

    }

  },
};
</script>
<style></style>
