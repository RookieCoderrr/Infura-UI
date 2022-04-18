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
        <el-select v-model="value"  @change="selectProject(value)" class="ml-4" placeholder="Select" size="small" style="background-color: white;color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
          <el-option
              v-for="item in projectList"
              :key="item.name"
              :label="item.name"
              :value="item.apikey"
          />
        </el-select>
        <el-button-group class="ml-4">
          <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">General</el-button>
          <el-button size="small" @click.prevent="toSetting(this.projectInfo['apikey'])" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">Setting</el-button>
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
          <el-button @click.prevent="changeProjectName(this.projectId)" style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
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
            {{ projectInfo['apikey'] }}
          </div>
        </div>
        <div class=""   style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            Project Secret
          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            {{ projectInfo['apisecret'] }}
          </div>
        </div>
        <div class="" style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C;">
            Endpoints
          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            https://testnet.explorer.onegate.space/{{ projectInfo['apikey'] }}
          </div>
        </div>
        <div class="" style="height:44px;display: flex;align-items: center">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">
          </div>
          <div class="" style="display: inline-block;width: 15%;text-align: center;font-style: normal;font-weight: 500;font-size: 16px;color: #86909C;">

          </div>
          <div class="" style="display: inline-block;width: 83%;font-size: 16px;font-weight: 400;font-family: 'PingFang SC';color: #1D2129">
            https://explorer.onegate.space/{{ projectInfo['apikey'] }}
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
          <el-button @click.prevent=" dialogFormVisible = true" style="background-color:#F53F3F;color: white ;width: 266px;border-radius: 2px;">Delete Project</el-button>
          <el-dialog v-model="dialogFormVisible" title="Warning" width="30%">
            <span
            >Are you sure you want to delete your project?
Deleting will remove access to Infura for this project immediately.
This cannot be undone.</span
            >
            <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" style="background-color: red" @click.prevent="this.deleteProject(this.projectId)"
        >Delete</el-button
        >
      </span>
            </template>
          </el-dialog>
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
      projectInfo:{},
      projectId:this.$route.params.projectId,
      input:123,
      dialogFormVisible:false,
      projectList:[],
      value:'',
      login:true

    };
  },
  watch: {
    $route: "watchrouter",
  },

  created() {
    this.testLogin()
    if (this.login) {
      this.getProjectInfo(this.email)
      this.getProjectInfoByProjectId(this.projectId)
      // console.log(localStorage.getItem("email"),localStorage.getItem("token"))
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
    watchrouter(){
      if(this.$route.name==="info") {
        this.projectId = this.$route.params.projectId,
        this.getProjectInfo(this.email)
        this.getProjectInfoByProjectId(this.projectId)
      }

    },
    selectProject(projectId){
      this.$router.push({
        path: `/info/${projectId}`

      });
    },
    toSetting(projectId){
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
            message: 'JWT TIME OUT',
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
    changeProjectName(apikey){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/update",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apikey,
          name: this.input,
          introduction:'',
        },
      }).then((res) => {

        if (res['data']['success'] === true) {
          console.log(res)
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
    },
    deleteProject(apikey){
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/delete",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: this.email,
          apikey: apikey,
        },
      }).then((res) => {

        if (res['data']['success'] === true) {
          console.log(res)
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'Success',
          })
          localStorage.removeItem("apikey")
          localStorage.removeItem("net")
          this.$router.push({
            path: `/management`,

          });
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
  }
};
</script>
<style></style>
