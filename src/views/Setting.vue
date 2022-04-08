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
        Requirements
      </div>
      <div class=" mt-3 ml-1 pl-3 pt-3 pb-4 card shadow border-0" style="height: 50px;background-color: rgba(255,255,255,0.5);border-radius: 5px;">
          <div class="" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size:14px;color: #1D2129; ">
            <el-checkbox v-model="checked"></el-checkbox> <span class="ml-1">Project Secret Required</span>
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
            <el-input v-model="input" placeholder="" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
          </div>
        </div>
        <div class=""   style="height:76px;display: flex;align-items: center;">
          <div class="" style="display: inline-block;width: 2%;text-align: center;">

          </div>
          <div class="" style="display: inline-block;width: 24%;text-align: left;font-style: normal;font-weight: 400;font-size: 16px;color: #86909C; ">
            Per Day Total Requests
          </div>
          <div class="" style="display: inline-block;width: 30%;">
            <el-input v-model="input" placeholder="" clearable />
          </div>
          <div class="ml-2" style="display: inline-block;width: 44%;">
            <el-button style="background-color:#4D56E1;color: white ;width: 100px">Save</el-button>
          </div>
        </div>
      </div>

      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Allowlists
      </div>
      <div class=" mt-3 ml-1 pl-4 pt-3 card shadow border-0" style="background-color: rgba(255,255,255,0.5);box-shadow: 0px 5px 30px rgba(77, 86, 225, 0.0);border-radius: 5px;">
        <div style="">
          <div style="display: inline-block">
            <el-button size="small" @click="changeTab('contract')"  style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Contract Address</el-button>
          </div>
          <div style="display: inline-block">
            <el-button size="small"  @click="changeTab('origin')" label="origin" style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Origins</el-button>
          </div>
          <div style="display: inline-block">
            <el-button size="small" @click="changeTab('apiRequest')" style="background-color: white;color: #4E5969;border-radius: 2px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;font-size: 14px">Api Request Method</el-button>
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
import { Loader } from "google-maps";
const loader = new Loader("YOUR_API_KEY");
export default {
  data() {
    return {
      nav: null,
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
      ]
    };
  },
  methods:{
    changeTab(value) {
      this.showRecord = value
    }
  },
  mounted() {
    loader.load().then(function (google) {
      // Regular Map
      const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      };
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      const marker = new google.maps.Marker({
        position: myLatlng,
        title: "Regular Map!",
      });
      marker.setMap(map);
    });
  },
};
</script>
<style></style>
