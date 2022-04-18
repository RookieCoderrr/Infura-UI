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
    <div v-if="this.$route.params.projectId !== 'Noprojects'" class="option" style="height: 45px;">
      <div class="left" style="height: 45px; width: 25%;;display: inline-block;text-align:center;justify-content: center;align-items: center">
        <el-select v-model="netValue"  @change="changeNet(netValue,projectValue)"  class="ml-4" placeholder="Select" size="small" style="background-color: white;width: 100px; color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
          <el-option
              v-for="item in netList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
        <el-select v-model="projectValue"  @change="changeProject(netValue,projectValue)" class="ml-4" placeholder="Select" size="small" style="background-color: white;width: 100px; color:#4D56E1;border-radius: 2px;font-weight: 40 ;font-family:'PingFang SC';font-style: normal;font-size: 14px">
          <el-option
              v-for="item in projectList"
              :key="item.name"
              :label="item.name"
              :value="item.apikey"
          />
        </el-select>
      </div>
      <div class="mid" style="height: 45px; width: 55%;display: inline-block">
        <el-button-group class="ml-4">
          <el-button @click.prevent="changePeriod(7)" size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">7 days</el-button>
          <el-button @click.prevent="changePeriod(30)" size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">30 days</el-button>
        </el-button-group>
        <span class="ml-3"></span>
        <el-date-picker
            size="small"
            type="daterange"
            :unlink-panels="true"
            v-model="date"
            value-format="yyyy-MM-dd"
            range-separator="-"
            start-placeholder="Start Time"
            end-placeholder="End Time"

        />

      </div>
      <div class="right" style="height: 45px; width: 20%;display: inline-block;text-align:center;">
        <el-button @click.prevent="toSetting(this.projectValue)" size="small" style="background-color: white;border-radius: 2px;font-weight: 40"><i class="el-icon-setting mr-1" ></i>Project Settings</el-button>
      </div>
    </div>


    <div v-if="this.$route.params.projectId !== 'Noprojects'" class="container-fluid">
      <div class="row mt-3 mb-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
       Request Volume
      </div>
      <div class="row">
        <div class="col">
          <div class="card shadow border-0">
            <statics-chart :key="refresh" :email="this.email" :apikey="this.projectValue" :net='this.netValue' :start="this.start" :end="this.end"></statics-chart>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.$route.params.projectId == 'Noprojects'" class="container-fluid">
      <div class="row mt-3 mb-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Request Volume
      </div>
      <div class="row">
        <div class="col">
          <div class="card shadow border-0">
            <div>
              No Magnet projects available
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
import StaticsChart from "@/views/Tables/StaticsChart";


export default {
  components:{
    StaticsChart,
  },
  data() {
    return {
      curDate:'',
      nav: null,
      email:localStorage.getItem("email"),
      login:true,
      projectValue:this.$route.params.projectId,
      records:[],
      day:1,
      net:'mainnet',
      netList:[
        {
          value:'mainnet',
          label:'Mainnet',
        },
        {
          value:'testnet',
          label:'Testnet',
        }
      ],
      projectList:[
      ],
      netValue:this.$route.params.net,
      start:new Date().getTime() - 7*86400000,
      end: new Date().getTime(),
      refresh:true,
      date:[],
      selectDate:'',
    };
  },
  created() {
    localStorage.setItem("net",this.$route.params.net )
    localStorage.setItem("apikey",this.$route.params.projectId )
    this.testLogin()
    if (this.login) {
      this.getProjectInfo(this.email)
      // this.getProjectStatic(this.email,this.projectId,"mainnet",1650211200000,1650297600000)
    }

  },
  mounted() {
  },
  watch:{
    $route: "watchrouter",
    date: "watchdate",
  },
  methods:{
    toSetting(projectId){
      this.$router.push({
        path: `/setting/${projectId}`

      });
    },
    changeNet(netValue,projectValue){
      localStorage.setItem("net",this.netValue)
      localStorage.setItem("apikey",this.projectValue)
      this.$router.push({
        path: `/dashboardv2/${netValue}/${projectValue}`
      });
    },

    changeProject(netValue,projectValue) {
      localStorage.setItem("apikey",this.projectValue)
      localStorage.setItem("net",this.netValue)
      console.log(localStorage.getItem("apikey"))
      this.$router.push({
        path: `/dashboardv2/${netValue}/${projectValue}`
      });
    },
    watchrouter(){
      if(this.$route.name==="dashboardv2") {
        this.testLogin()
        if (this.login) {
          this.getProjectInfo(this.email)
          this.refresh = !this.refresh
        }
      }

    },
    watchdate() {
      this.start = this.date[0].getTime()
      this.end = this.date[1].getTime()+86400000
      this.refresh = !this.refresh
    },
    testLogin(){
      if (localStorage.getItem("login")==="false") {
        this.login = false
        this.$router.push({
          path: `/login`,
        });
      }
    },
    changePeriod(time){
      this.start = new Date().getTime() - time*86400000
      this.refresh = !this.refresh

    },
    refreshChart(){
      this.refresh = !this.refresh
    },
    refreshChartProject(){
      this.refresh = !this.refresh
      this.$route.params.projectId = this.projectValue
      console.log(this.$route.params.projectId)

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
    getProjectStatic(email,apikey,net,start,end) {
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/project/rpcRecords",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data: {
          email: email,
          apikey:apikey,
          net:net,
          start:start,
          end:end,

        },
      }).then((res) => {
        console.log(res)
        this.records = res['data']['data']['results']
        this.day  = (end -start ) / 86400

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
