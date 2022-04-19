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
          <el-button size="small" @click.prevent="toInfo(this.projectInfo['apikey'])" style="background-color: white;color: grey;border-radius: 2px;font-weight: 40">General</el-button>
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
            <el-input type="number" v-model.number="inputPerSecond"  min="0" max="100" placeholder="0-100" clearable />
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
            <el-input type="number" v-model.number="inputPerDay" min="0" max="5000"  placeholder="0-5000" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button  @click.prevent=" setProjectLimitPerday(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
          </div>
        </div>
      </div>

      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Allowlists
      </div>
      <div class=" mt-3 ml-1 pl-4 pt-3 pb-3 card shadow border-0" style="background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <el-radio-group v-model="showRecord" style="margin-bottom: 10px" fill="#4D56E1">
          <el-radio-button label="contract"  >Contract Address</el-radio-button>
          <el-radio-button label="origin"  >Origins</el-radio-button>
          <el-radio-button label="apiRequest"  >Api Request Method</el-radio-button>
        </el-radio-group>
        <div v-if="this.showRecord==='apiRequest'" class="mt-2 mb-2"   style="display: flex;align-items: center;">
          <div  class="" style="display: inline-block;width: 56%;">
            <el-select
                v-model="value1"
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
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button @click.prevent="addApiRequest(this.projectId,this.value1)" style="background-color:#4D56E1;color: white ;width: 100px">Add</el-button>
          </div>
        </div>
        <div v-if="this.showRecord==='contract'" class="mt-2 mb-2"   style="display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 56%;">
            <el-input v-model="inputContract" placeholder="eg: 0xcd10d9f697230b04d9ebb8594a1ffe18fa95d9ad"  maxlength="42"  show-word-limit  clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button @click.prevent="addProjectContract(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Add</el-button>
          </div>
        </div>
        <div v-if="this.showRecord==='origin'" class="mt-2 mb-2"   style="display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 56%;">
            <el-input v-model="inputOrigin" placeholder="eg: 127.0.0.1" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button @click.prevent="addProjectOrigin(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Add</el-button>
          </div>
        </div>
        <div v-if="this.showRecord==='contract'">
          <div class="" v-for="(param, ind) in allowContract"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button @click.prevent="deleteProjectContract(this.projectId,param)" type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
            </div>

          </div>
        </div>
        <div v-if="this.showRecord==='origin'">
          <div class="" v-for="(param, ind) in origins"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button @click.prevent="deleteProjectOrigin(this.projectId,param)" type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
            </div>

          </div>

        </div>
        <div v-if="this.showRecord==='apiRequest'">
          <div class=" " v-for="(param, ind) in apiRequest"
               :key="ind" style="display: flex;align-items: center;">
            <div class="" style="display: inline-block; font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4E5969 " >
              {{ param }}
            </div>
            <div class="ml-4" style="display: inline-block;">
              <el-button @click.prevent="deleteProjectApiMethod(this.projectId,param)" type="text" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size: 14px;color:#4D56E1 ">Remove </el-button>
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
      origins:[],
      showRecord:"contract",
      apiRequest:[],
      value1:'',
      options:[
        {
          value:'GetActiveAddresses',
          label:'GetActiveAddresses'
        },{
          value:'GetAddressByAddress',
          label:'GetAddressByAddress'
        },{
          value:'GetAddressCount',
          label:'GetAddressCount'
        },{
          value:'GetAddressInfoByAddress',
          label:'GetAddressInfoByAddress'
        },{
          value:'GetAddressList',
          label:'GetAddressList'
        },
        {
          value:'GetApplicationLogByBlockHash',
          label:'GetApplicationLogByBlockHash'
        },
        {
          value:'GetApplicationLogByTransactionHash',
          label:'GetApplicationLogByTransactionHash'
        },
        {
          value:'GetAssetCount',
          label:'GetAssetCount'
        },
        {
          value:'GetAssetHoldersByContractHash',
          label:'GetAssetHoldersByContractHash'
        },
        {
          value:'GetAssetHoldersListByContractHash',
          label:'GetAssetHoldersListByContractHash'
        },
        {
          value:'GetAssetInfoByContractHash',
          label:'GetAssetInfoByContractHash'
        },
        {
          value:'GetAssetInfos',
          label:'GetAssetInfos'
        },
        {
          value:'GetAssetInfosByName',
          label:'GetAssetInfosByName'
        },
        {
          value:'GetAssetsHeldByAddress',
          label:'GetAssetsHeldByAddress'
        },{
          value:'GetAssetsHeldByContractHashAddress',
          label:'GetAssetsHeldByContractHashAddress'
        },{
          value:'GetBalanceByContractHashAddress',
          label:'GetBalanceByContractHashAddress'
        },{
          value:'GetBestBlockHash',
          label:'GetBestBlockHash'
        },





      ],
      projectList:[],
      value:'',
      projectInfo:{},
      projectId:this.$route.params.projectId,
      checked:false,
      inputPerSecond:0,
      inputPerDay:0,
      inputContract:'',
      inputOrigin:'',
      inputApiRequest:'',
      allowContract:[],
      login:true,
      isHashPattern: /^((0x)?)([0-9a-f]{40})$/,
    };
  },
  created() {
    this.testLogin()
    if(this.login) {
      this.getProjectInfo(this.email)
      this.getProjectInfoByProjectId(this.projectId)
    }

  },
  watch: {
    $route: "watchrouter",
    // checked:"setProjectSecret"
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
    watchrouter(){
      if(this.$route.name==="setting") {
        this.projectId = this.$route.params.projectId,
        this.getProjectInfo(this.email)
        this.getProjectInfoByProjectId(this.projectId)
      }

    },
   chooseButton(command){
      switch (command){
        case 'contract':
          console.log('Contract')
          return {
            background:"#4D56E1"
          }
        case 'origin':
          console.log('origin')
          return {
            background:"#4D56E1"
          }
        case 'apiRequest':
          console.log('apiRequest')
          return {
            background:"#4D56E1"
          }
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
            message: 'JWT TIME OUT ',
          })
          console.log("oh no")
          localStorage.setItem("login","false")
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
          this.allowContract = res['data']['data']['contractAddress']
          this.origins = res['data']['data']['origin']
          this.apiRequest = res['data']['data']['apiRequest']
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
      if (this.inputPerDay < 0 || this.inputPerDay > 5000) {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Limit per day range is 0- 5000 ',
        })
        return
      }
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
      if (this.inputPerSecond < 0 || this.inputPerSecond > 100) {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Limit per second range is 0- 100 ',
        })
        return
      }
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

    },
    addProjectContract(apiKey){
      if (!this.isHashPattern.test(this.inputContract)) {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Please enter standard contract hash',
        })
        return
      }
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/allowContract",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          contract: this.inputContract,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'set project allow contract successfully',
          })
        } else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }

      })

    },
    addApiRequest(apiKey,apiRequest){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/apiMethod",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          apiMethod: apiRequest,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'set project apiRequest successfully',
          })
        }
        else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }
      })

    },
    addProjectOrigin(apiKey){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/projectOrigin",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          origin: this.inputOrigin,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'set project origin successfully',
          })
        }
        else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }
      })

    },
    deleteProjectContract(apiKey,contract){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/deleteAllowContract",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          contract: contract,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'delete project allow contract successfully',
          })
        }
        else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }
      })

    },
    deleteProjectOrigin(apiKey,origin){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/deleteProjectOrigin",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          origin: origin,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'delete project origin successfully',
          })
        }
        else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }
      })

    },
    deleteProjectApiMethod(apiKey,apiMethod){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/deleteApiMethod",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apiKey,
          apiMethod: apiMethod,
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.getProjectInfoByProjectId(apiKey)
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'delete project apiMethod successfully',
          })
        }
        else {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'error',
            message: res['data']['data']['message'],
          })
        }
      })

    },

  },
};
</script>
<style>
</style>
