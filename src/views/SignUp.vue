<template>
  <div class="row justify-content-center">
    <div class="col-6" style="">
      <div style="height: 100% ;padding-top: 20%">
        <span class="" style="%; font-size: 55px;color: #4B56E9;" >
          Distributed RPC
        </span>
        <span class="" style="font-size: 55px; color: #4B56E9">
          Service Plateform on
        </span>
        <span class="" style="font-weight: bold;font-size: 55px; color: #4B56E9">Neo Network</span>
      </div>
    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-5 " >
      <div class="card  shadow border-0" style="background: rgba(255, 255, 255, 0.1)" >
        <div class="card-body " style="height: 430px;width: 464px" >
          <div class="LoginTitle" style=" margin-top:20px;margin-left:20px;font-weight: bold; font-size: 24px; color: #4E5969;">
            Sign Up
            <div style="border-bottom:2px solid #4D56E1; margin-top: 16px;width: 140px"></div>
          </div>
          <div class="mt-5"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email address"
              addon-left-icon="ni ni-email-83"
              v-model="model.email"
              style="height: 50px"
            >
            </base-input>
            <div class="mt-4"></div>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="model.password"
              style="height: 50px"
            >
            </base-input>

            <div class="text-center mt-3">
              <base-button type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1">Sign Up</base-button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
<style></style>
