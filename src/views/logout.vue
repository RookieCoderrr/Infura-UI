<template>
  <div>
    <div class="na" style=" height: 60px">
      <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Account
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>
    <div class="container-fluid">
      <div class="row mt-3 ml-2" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        My Account
      </div>
      <div class=" mt-3 ml-1 pl-3 pt-3 pb-4 card shadow border-0" style="height: 50px;background-color: rgba(255,255,255,0.5);border-radius: 5px;">
          <div class="" style="font-family: 'PingFang SC';font-style: normal;font-weight: 400;font-size:14px;color: #1D2129; ">
            123456789@gmail.com
          </div>
      </div>
      <div class="row mt-4 ml-2" >
        <el-button style="background-color:#4D56E1;color: white ;width: 200px">Log Out</el-button>
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
      input:'',
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
