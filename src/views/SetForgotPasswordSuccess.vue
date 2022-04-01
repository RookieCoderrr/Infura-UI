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
        <div class="card-body " style="height: 350px;width: 464px" >
          <div class="mt-3" style="text-align: center" >
            <img src="@/assets/success.png" style="width: 60px;height: 60px">
          </div>

          <div class="mt-2" style="text-align: center">
            <h2>Success</h2>
            <div class="mt-3"></div>
            <span style="align-items: flex-start; color: #86909C">
              You have successfully reset your password.
            </span>

          </div>
          <div class="mt-2"></div>
          <form role="form" style=" margin-left: 20px; margin-right: 24px">
            <div class="text-center mt-4">
              <base-button type="primary" class="my-4 " style="width: 99% ;height: 50px; background-color: #4D56E1">Login</base-button>
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
