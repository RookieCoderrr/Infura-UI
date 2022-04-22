<template>
  <div  >
    <div class="na " style=" height: 60px;background-color: white;;box-shadow:0px 5px 30px rgba(77, 86, 225, 0.05);">
      <div class="na-left ml-4" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Management
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>


    <div class="container-fluid" v-loading="loading" style="">
      <div class="row mt-3" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        <div class="col-3"  style=" " >
          My Project
          <img src="@/assets/addButton.png" @click.prevent="dialogFormVisible = true" style="height:25px;cursor: pointer">
          <el-dialog v-model="dialogFormVisible" title="Project Name" width="30%">
                <el-input v-model.trim="projectName" maxlength="10"  show-word-limit autocomplete="off" />
            <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createProject(projectName)"
        >Create</el-button
        >
      </span>
            </template>
          </el-dialog>
        </div>
      </div>
      <div class="row mt-3"   v-for="(item, index) in this.projectList"
           :key="index">
        <div class="col">
          <div class="card shadow border-0"  >
           <div class="row" style="height: 100px">
             <div class="col-3"  @click.prevent="toDashBoard(item['apikey'],'mainnet')" style="cursor: pointer">
                <div style="font-family: NucleoIcons;font-style: normal;font-weight: 500;font-size: 26px;height: 60px;display: flex;align-items: center; text-align: left;color:#1D2129 ">
                  <span class="ml-5">{{ item['name'] }}</span>
                </div>
               <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;display: flex;align-items: center; text-align: left;color: #4E5969;">

                 <span class="ml-5"> {{ item['date'] }} </span>
               </div>
             </div>
             <div class="col-3" style="">
               <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 50px;display: flex;align-items: center; text-align: left">
                 <span class="ml-4">Requests Today</span>
               </div>
               <div style="font-family: NucleoIcons; ;font-style: normal;font-weight: 600;font-size: 26px;height: 25px;display: flex;align-items: center; text-align: left;color: #548DF3;">

                 <span class="ml-4">{{item['request'] }}</span>
               </div>
             </div>
             <div class="col-6" style="">
               <div style="text-align: center; height: 100%;display: flex;align-items: center; justify-content:center;">
                 <el-button  @click.prevent="toInfo(item['apikey'])" style="color: white;background-color: #4D56E1;border-radius:2px; width: 200px;">Check Status</el-button>
                 <span class="ml-4"></span>
                 <el-button  @click.prevent="toSetting(item['apikey'])" style="color: white;background-color: #4D56E1; ;border-radius:2px; width: 200px">Settings</el-button>
               </div>

             </div>
           </div>
          </div>
        </div>
      </div>
      <div v-if="this.noProject" class="container-fluid">
        <div class="row">
          <div class="col">
            <div  style="width: 100%;height: 700px;display: flex;justify-content: center;align-items: center">
              <div style="width: 50%;">
                <div class="mb-2" style="margin-left: 50%">
                  <img src="@/assets/magnet.png">
                </div>
                <div style="text-align: center;font-size: 1.25rem;line-height: 1.75rem;padding-bottom: 1rem;font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace">
                  No Magnet projects available
                </div>
                <div style="text-align: center ;font-size: 0.9rem; color:grey;line-height: 1.75rem;padding-bottom: 1rem;font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace">
                  Create your first project to get started with Magnet
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
      dialogFormVisible:false,
      formLabelWidth : '140px',
      projectName:'',
      projectList:[],
      login:true,
      apikey:'',
      net:'',
      noProject:false,
      loading:true,
    };
  },
  created() {
    this.testLogin()
    if (this.login) {
      this.getProjectInfo(this.email)
    }
    // console.log(localStorage.getItem("email"),localStorage.getItem("token"))
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
          this.loading = false;
          if (this.projectList.length === 0 ) {
            this.noProject = true;
          }
        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          ElMessage({
            showClose: true,
            type: 'error',
            message: 'JWT TIME OUT ',
          })
          localStorage.setItem("login","false")
          this.loading = false;
          console.log("oh no")
          this.$router.push({
            path: `login`,

          });
        } else if (error.request) {
          this.loading = false;
          console.log(error.request);
          this.success = false
        } else {
          this.loading = false
          console.log('Error', error.message);
        }
      })
    },
    createProject(projectName){
      if (projectName === "") {
        ElMessage({
          showClose: true,
          type: 'error',
          message: 'Project Name cannot be empty',
        })
        return
      }
      axios({
        method: "patch",
        url: "/api/project/create",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: localStorage.getItem("email"),
          name: projectName,
          introduction:'',
        },
      }).then((res) => {
        this.dialogFormVisible = false

        if (res['data']['success'] === true) {
          console.log(res['data'])
          this.net = "mainnet"
          this.apikey= res['data']['data']['apikey']
          this.$router.push({
            path: `/dashboardv2/${this.net}/${this.apikey}`
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
    toInfo(apikey){
      this.$router.push({
        path: `/info/${apikey}`
      });
      console.log(apikey)
    },
    toSetting(apikey){
      this.$router.push({
        path: `/setting/${apikey}`
      });
      console.log(apikey)
    },
    toDashBoard(apikey,mainnet){
      this.$router.push({
        path: `/dashboardv2/${mainnet}/${apikey}`
      });
      console.log(apikey)
    }
  }
};
</script>
<style></style>
