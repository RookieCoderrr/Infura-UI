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
import { Loader } from "google-maps";
const loader = new Loader("YOUR_API_KEY");
export default {
  data() {
    return {
      nav: null,
    };
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
