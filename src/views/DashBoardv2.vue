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
            <div
              id="map"
              class="map-canvas"
              data-lat="40.748817"
              data-lng="-73.985428"
              style="height: 600px"
            ></div>
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
