<template>
  <div>
    <div class="na " style=" height: 60px;background-color: white;;box-shadow:0px 5px 30px rgba(77, 86, 225, 0.05);">
      <div class="na-left ml-4" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
        <img src="@/assets/shortLogo.svg">
      </div>
      <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
        Acount / Bill
      </div>
    </div>
    <div style="margin:0;padding:0; width:100%;height:2px;background-color:whitesmoke;overflow:hidden;"></div>


    <div class="container-fluid" style="">
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow border-0">
            <div class="row" style="height: 100px">
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons;font-style: normal;font-weight: 400;font-size: 14px;height: 60px;display: flex;align-items: center; text-align: left;color:#4E5969 ">
                  <span class="ml-5">Data&Time</span>
                </div>
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 16px;display: flex;align-items: center; text-align: left;color: #4E5969;">

                  <span class="ml-5"> March 27, 2022 10:10:10</span>
                </div>
              </div>
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 50px;display: flex;align-items: center; text-align: left">
                  <span class="ml-4">Cost</span>
                </div>
                <div style="font-family: NucleoIcons; ;font-style: normal;font-weight: 500;font-size: 26px;height: 25px;display: flex;align-items: center; text-align: left;color: #548DF3;">

                  <span class="ml-4">15 NEO</span>
                </div>
              </div>
              <div class="col-6" style="">
                <div style="text-align: center; height: 100%;display: flex;align-items: center; justify-content:center; font-size: 16px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;">
                  <a href="https://explorer.onegate.space/" style="color: #4E5969"> View txid on explorer <i class="el-icon-link"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="card shadow border-0">
            <div class="row" style="height: 100px">
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons;font-style: normal;font-weight: 400;font-size: 14px;height: 60px;display: flex;align-items: center; text-align: left;color:#4E5969 ">
                  <span class="ml-5">Data&Time</span>
                </div>
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 16px;display: flex;align-items: center; text-align: left;color: #4E5969;">

                  <span class="ml-5"> March 27, 2022 10:10:10</span>
                </div>
              </div>
              <div class="col-3" style="">
                <div style="font-family: NucleoIcons; font-style: normal;font-weight: 400;font-size: 14px;height: 50px;display: flex;align-items: center; text-align: left">
                  <span class="ml-4">Cost</span>
                </div>
                <div style="font-family: NucleoIcons; ;font-style: normal;font-weight: 500;font-size: 26px;height: 25px;display: flex;align-items: center; text-align: left;color: #548DF3;">

                  <span class="ml-4"> 5 NEO</span>
                </div>
              </div>
              <div class="col-6" style="">
                <div style="text-align: center; height: 100%;display: flex;align-items: center; justify-content:center; font-size: 16px;font-weight: 400;font-family: 'PingFang SC';font-style: normal;">
                  <a href="https://explorer.onegate.space/" style="color: #4E5969"> View txid on explorer <i class="el-icon-link"></i></a>
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
export default {
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
  },
};
</script>
<style>
a:hover{
  color: #4D56E1!important;
}
</style>
