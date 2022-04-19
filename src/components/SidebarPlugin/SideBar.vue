<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light "
    id="sidenav-main"
    style="background-color:#4D56E1;box-shadow: 4px 0px 10px 0px rgba(77, 86, 225, 0.3);width: 250px;
"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
<!--      <router-link class="navbar-brand" to="/">-->
<!--        <img :src="logo" class="navbar-brand-img" alt="..." />-->
<!--      </router-link>-->
      <div class="mt-5" style="">
        <div  @click.prevent="changeAvater" style="width:60px;display: inline-block;cursor: pointer"><img :src="avater_url" style="width: 100%"></div>
        <div class="ml-3" style="color:white; font-size: 27px;font-weight: 500; font-style: normal; font-family: 'PingFang SC';vertical-align:middle;display: inline-block ">Hi,</div>
      </div>

      <div class="mt-3" style="font-size: 24px;font-weight: 500; font-style: normal; font-family: 'PingFang SC'; color: white;">
        {{ this.nickName }}

        <el-popover v-model:visible="visible" placement="right" :width="160" >
          <el-input v-model="setNickName"  maxlength="10"  show-word-limit autocomplete="off"  placeholder="nickname" style="" />
          <div style="text-align: right; margin-top: 5px">
            <el-button size="small" type="text" @click="visible = false" style="color:#4D56E1"
            >cancel</el-button
            >
            <el-button size="small" type="primary"  @click="setUserNickName(this.email,setNickName)" style="background-color:#4D56E1!important;border-color: #4D56E1"
            >change</el-button
            >
          </div>
          <template #reference>
            <i class="el-icon-edit" @click.prevent=" visible = true" :append-to-body='true' style="size: 10px;cursor: pointer" />
          </template>
        </el-popover>

      </div>
      <div class="mt-2" style="font-size: 15px;font-weight: 400; font-style: normal; font-family: 'PingFang SC'; color: white ">
        {{ this.omitEmailStr}}
      </div>
      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <base-dropdown class="nav-item" position="right">
            <template v-slot:title>
              <a
                class="nav-link nav-link-icon"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="ni ni-bell-55"></i>
              </a>
            </template>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </base-dropdown>
          <base-dropdown class="nav-item" position="right">
            <template v-slot:title>
              <a class="nav-link" href="#" role="button">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="img/theme/team-1-800x800.jpg"
                    />
                  </span>
                </div>
              </a>
            </template>

            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <a href="#!" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
      >
<!--        <div class="navbar-collapse-header d-md-none">-->
<!--          <div class="row">-->
<!--            <div class="col-6 collapse-brand">-->
<!--              <router-link to="/">-->
<!--                <img :src="logo" />-->
<!--              </router-link>-->
<!--            </div>-->
<!--            <div class="col-6 collapse-close">-->
<!--              <navbar-toggle-button-->
<!--                @click="closeSidebar"-->
<!--              ></navbar-toggle-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <ul class="navbar-nav">-->
<!--          <slot name="links"> </slot>-->
<!--        </ul>-->
<!--        Divider-->
<!--        <hr class="my-3" />-->
<!--        &lt;!&ndash;Heading&ndash;&gt;-->
<!--        <h6 class="navbar-heading text-muted">Documentation</h6>-->
        <!--Navigation-->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item " >
            <router-link @click.prevent="fresh" class=" nav-link nav-focus" to="" :style="handleStyle(1)" style="height:56px; cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC' ">
              <svg class="svg" width="24" height="24" viewBox="0 0 24 24" :fill="fill(1)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M12 7.0791C10.0468 7.0791 8.21044 7.83974 6.82929 9.22089C5.44814 10.602 4.6875 12.4383 4.6875 14.3916C4.6875 14.8058 5.02329 15.1416 5.4375 15.1416C5.85171 15.1416 6.1875 14.8058 6.1875 14.3916C6.1875 12.839 6.79209 11.3794 7.88995 10.2815C8.98779 9.1837 10.4474 8.57908 12 8.57908C13.5526 8.57908 15.0122 9.18367 16.11 10.2815C17.2079 11.3794 17.8125 12.839 17.8125 14.3916C17.8125 14.8058 18.1483 15.1416 18.5625 15.1416C18.9767 15.1416 19.3125 14.8058 19.3125 14.3916C19.3125 12.4383 18.5519 10.602 17.1707 9.22087C15.7896 7.83972 13.9532 7.0791 12 7.0791Z" :fill="fill(1)"/>
                <path d="M12 3.70312C6.201 3.70312 1.5 8.40413 1.5 14.2031C1.5 16.3125 2.12215 18.2765 3.19275 19.9219H20.8073C21.8779 18.2765 22.5 16.3125 22.5 14.2031C22.5 8.40413 17.799 3.70312 12 3.70312ZM19.9521 18.4219H4.04794C3.3603 17.1284 3 15.685 3 14.2031C3 12.9875 3.23775 11.809 3.70664 10.7004C4.15985 9.62883 4.809 8.66618 5.63604 7.83916C6.46305 7.01213 7.4257 6.363 8.49724 5.90977C9.60586 5.44087 10.7843 5.20312 12 5.20312C13.2157 5.20312 14.3941 5.44087 15.5028 5.90977C16.5743 6.36298 17.5369 7.01213 18.364 7.83916C19.191 8.66618 19.8401 9.62883 20.2934 10.7004C20.7622 11.809 21 12.9875 21 14.2031C21 15.685 20.6397 17.1284 19.9521 18.4219Z" :fill="fill(1)"/>
                <path d="M12.4745 13.7455C12.2401 13.7454 12.0078 13.7893 11.7897 13.8751L10.1705 12.2558C9.87758 11.9629 9.40271 11.9629 9.10981 12.2558C8.81691 12.5487 8.81691 13.0236 9.10981 13.3165L10.7291 14.9357C10.6433 15.1538 10.5994 15.3861 10.5995 15.6205C10.5995 16.656 11.4389 17.4955 12.4745 17.4955C13.51 17.4955 14.3495 16.656 14.3495 15.6205C14.3495 14.585 13.51 13.7455 12.4745 13.7455Z" :fill="fill(1)"/>
              </svg>
              Dashboard
            </router-link>

          </li>
          <li class="nav-item ">
            <router-link class=" nav-link nav-focus" to="/management" :style="handleStyle(2)" style="height:56px;cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC'">
              <svg class="svg" width="24" height="24" viewBox="0 0 24 24" :fill="fill(2)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M12.0001 3C12.6932 3 13.377 3.07629 14.0426 3.22614L14.4267 3.31261L15.6245 6.04327L18.5736 5.72087L18.8402 6.01125C19.7735 7.02785 20.4737 8.24037 20.8843 9.56459L21 9.93789L20.7699 10.2538L19.2451 12.3476L21 14.7573L20.8843 15.1306C20.4737 16.4548 19.7735 17.6674 18.8402 18.6839L18.5736 18.9743L15.6245 18.6519L14.4267 21.3826L14.0426 21.4691C13.377 21.6189 12.6932 21.6952 12.0001 21.6952C11.3068 21.6952 10.6229 21.6189 9.95711 21.469L9.57298 21.3825L9.41485 21.0218L8.37565 18.6519L5.42658 18.9743L5.15998 18.6839C4.22653 17.6672 3.52623 16.4545 3.11572 15.1301L3 14.7568L3.23014 14.4409L4.75498 12.3476L3 9.9384L3.11572 9.56506C3.52623 8.24066 4.22653 7.02797 5.15998 6.01125L5.42658 5.72087L8.37565 6.04327L9.57298 3.31275L9.95711 3.22624C10.6229 3.07632 11.3068 3 12.0001 3ZM12.0001 4.55793C11.5533 4.55793 11.1118 4.59589 10.6787 4.67071L9.71899 6.85923C9.49526 7.36925 8.9664 7.67505 8.41275 7.61454L6.05281 7.35655C5.48276 8.04269 5.03331 8.82236 4.72651 9.66255L6.13562 11.5969C6.46146 12.0443 6.46146 12.6509 6.13557 13.0983L4.72651 15.0327C5.03331 15.8728 5.48276 16.6525 6.05281 17.3387L8.41277 17.0807C8.9664 17.0201 9.49526 17.326 9.71904 17.8361L10.6787 20.0245C11.1118 20.0993 11.5533 20.1373 12.0001 20.1373C12.4467 20.1373 12.8881 20.0993 13.3211 20.0246L14.2811 17.836C14.5049 17.326 15.0337 17.0201 15.5874 17.0807L17.9473 17.3387C18.5173 16.6526 18.9667 15.8731 19.2735 15.033L17.8645 13.0983C17.5387 12.6509 17.5387 12.0443 17.8645 11.597L19.2735 9.6622C18.9667 8.82214 18.5173 8.04259 17.9473 7.35655L15.5874 7.61454C15.0337 7.67505 14.5049 7.36925 14.2811 6.85921L13.3211 4.67065C12.8881 4.59587 12.4467 4.55793 12.0001 4.55793ZM12.0001 8.45277C14.1438 8.45277 15.8801 10.1974 15.8801 12.3476C15.8801 14.4978 14.1438 16.2424 12.0001 16.2424C9.85637 16.2424 8.12007 14.4978 8.12007 12.3476C8.12007 10.1974 9.85637 8.45277 12.0001 8.45277ZM12.0001 10.0107C10.7185 10.0107 9.67801 11.0561 9.67801 12.3476C9.67801 13.6391 10.7185 14.6845 12.0001 14.6845C13.2817 14.6845 14.3221 13.6391 14.3221 12.3476C14.3221 11.0561 13.2817 10.0107 12.0001 10.0107Z" :fill="fill(2)"/>
              </svg>
              Management
            </router-link>

          </li>
          <li class="nav-item " >
            <router-link class="nav-link nav-focus" to="/plan" :style="handleStyle(3)" style="height:56px;cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC'">
              <svg class="svg" width="24" height="24" viewBox="0  0 24 24" :fill="fill(3)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M21.3276 9.64465C21.2846 9.51253 21.2056 9.39505 21.0994 9.3055C20.9932 9.21595 20.864 9.15791 20.7265 9.13794L15.2837 8.34706L12.8496 3.41504C12.7881 3.29046 12.693 3.18556 12.575 3.11222C12.457 3.03887 12.3209 3 12.182 3C12.043 3 11.9069 3.03887 11.7889 3.11222C11.6709 3.18556 11.5758 3.29046 11.5143 3.41504L9.08024 8.34708L3.63742 9.13796C3.49995 9.15795 3.37081 9.216 3.26461 9.30554C3.15841 9.39509 3.07937 9.51256 3.03644 9.64468C2.99352 9.77679 2.9884 9.91829 3.02168 10.0532C3.05497 10.188 3.12532 10.3109 3.22478 10.4079L7.16326 14.2469L6.23352 19.6677C6.21003 19.8047 6.22531 19.9454 6.27765 20.0741C6.32999 20.2028 6.41729 20.3143 6.52969 20.396C6.64208 20.4776 6.77508 20.5262 6.91365 20.5362C7.05221 20.5462 7.19081 20.5173 7.31378 20.4526L12.182 17.8932L17.0502 20.4526C17.2123 20.5381 17.5858 20.558 17.8343 20.3959C18.0707 20.2417 18.1784 19.9471 18.1304 19.6677L17.2007 14.2469L21.1392 10.4079C21.2386 10.3109 21.309 10.188 21.3423 10.0532C21.3756 9.91828 21.3705 9.77678 21.3276 9.64465V9.64465ZM15.8811 13.4539C15.7946 13.5381 15.73 13.6421 15.6927 13.7569C15.6554 13.8717 15.6465 13.9939 15.6669 14.1129L16.4078 18.4326L12.5284 16.3931C12.4216 16.3369 12.3027 16.3076 12.182 16.3076C12.0612 16.3076 11.9423 16.3369 11.8355 16.3931L7.95611 18.4326L8.69699 14.1129C8.7174 13.9939 8.70857 13.8718 8.67127 13.757C8.63398 13.6421 8.56932 13.5381 8.48289 13.4539L5.34437 10.3946L9.68167 9.76435C9.80113 9.74699 9.91457 9.70085 10.0122 9.6299C10.1099 9.55895 10.1888 9.46532 10.2422 9.35708L12.182 5.4268L14.1217 9.35705C14.1751 9.46529 14.2541 9.55893 14.3517 9.62988C14.4494 9.70083 14.5628 9.74697 14.6822 9.76433L19.0196 10.3946L15.8811 13.4539Z" :fill="fill(3)"/>
              </svg>
              Plan
            </router-link>

          </li>
          <li class="nav-item "  @click="showDrop">
            <router-link class=" nav-link nav-focus"   to="/account" :style="handleStyle(4)" style="height:56px;cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC'">
              <svg class="svg" width="24" height="24" viewBox="0 0 24 24"  :fill="fill(4)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M12.0126 10.7485C9.79657 10.7485 7.99372 9.0105 7.99372 6.87424C7.99372 4.73799 9.79657 3 12.0126 3C14.2286 3 16.0314 4.73799 16.0314 6.87424C16.0314 9.0105 14.2286 10.7485 12.0126 10.7485ZM12.0126 4.5497C10.683 4.5497 9.60126 5.59247 9.60126 6.87424C9.60126 8.15601 10.683 9.19879 12.0126 9.19879C13.3422 9.19879 14.4239 8.15601 14.4239 6.87424C14.4239 5.59247 13.3422 4.5497 12.0126 4.5497ZM10.5784 21C8.15214 21 5.93326 20.9079 4.76956 19.7904C4.25891 19.3 4 18.665 4 17.9032C4 17.1373 4.25738 16.3823 4.76501 15.6589C5.21658 15.0155 5.84276 14.4303 6.62619 13.9195C8.17597 12.9093 10.1392 12.3298 12.0126 12.3298C13.8851 12.3298 15.8443 12.9096 17.3878 13.9205C18.1677 14.4312 18.7909 15.0167 19.2401 15.6607C19.7444 16.3834 20 17.1379 20 17.9032C20 18.6672 19.7409 19.3034 19.2298 19.7942C17.956 21.0176 15.4164 21.008 12.7273 20.9982C12.2508 20.9965 11.7743 20.9964 11.2978 20.9982C11.0565 20.9991 10.8164 21 10.5784 21ZM12.0126 19.4467C12.2529 19.4467 12.4935 19.4476 12.7335 19.4485C13.9773 19.4531 15.1519 19.4575 16.1447 19.3421C17.1096 19.2299 17.7659 19.0127 18.0953 18.6963C18.2228 18.5738 18.3925 18.3583 18.3925 17.9032C18.3925 16.9809 17.697 15.9965 16.4844 15.2024C15.2008 14.3617 13.5709 13.8795 12.0126 13.8795C8.83996 13.8795 5.60754 15.9102 5.60754 17.9032C5.60754 18.3554 5.77678 18.5702 5.9041 18.6925C6.709 19.4654 9.14366 19.4564 11.2916 19.4485C11.5317 19.4476 11.7724 19.4467 12.0126 19.4467Z" :fill="fill(4)"/>
              </svg>
              Account
              <img  class="ml-3" src="@/assets/flash.png" >
            </router-link>
          </li>

          <li class="nav-item  "  v-if="this.drop">
            <router-link class="nav-link nav-focus" to="/bill" :style="handleStyle(5)" style="height:56px;cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC'">
              <svg class="svg" width="24" height="24" viewBox="0 0 24 24" :fill="fill(5)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M9.82126 6.74902H19.5038C19.9181 6.74902 20.2538 6.41323 20.2538 5.99902C20.2538 5.58481 19.9181 5.24902 19.5038 5.24902H9.82126C9.40704 5.24902 9.07126 5.58481 9.07126 5.99902C9.07126 6.41323 9.40704 6.74902 9.82126 6.74902ZM9.82104 12.7307H19.4681C19.8823 12.7307 20.2181 12.3949 20.2181 11.9807C20.2181 11.5665 19.8823 11.2307 19.4681 11.2307H9.82104C9.40683 11.2307 9.07104 11.5665 9.07104 11.9807C9.07104 12.3949 9.40683 12.7307 9.82104 12.7307ZM19.5038 17.2455H9.82126C9.40704 17.2455 9.07126 17.5813 9.07126 17.9955C9.07126 18.4097 9.40704 18.7455 9.82126 18.7455H19.5038C19.9181 18.7455 20.2538 18.4097 20.2538 17.9955C20.2538 17.5813 19.9181 17.2455 19.5038 17.2455V17.2455Z" :fill="fill(5)"/>
                <path d="M4.50098 5.99902C4.50098 6.39685 4.65901 6.77838 4.94032 7.05968C5.22162 7.34099 5.60315 7.49902 6.00098 7.49902C6.3988 7.49902 6.78033 7.34099 7.06164 7.05968C7.34294 6.77838 7.50098 6.39685 7.50098 5.99902C7.50098 5.6012 7.34294 5.21967 7.06164 4.93836C6.78033 4.65706 6.3988 4.49902 6.00098 4.49902C5.60315 4.49902 5.22162 4.65706 4.94032 4.93836C4.65901 5.21967 4.50098 5.6012 4.50098 5.99902V5.99902Z" :fill="fill(5)"/>
                <path d="M4.50098 11.9717C4.50098 12.3695 4.65901 12.751 4.94032 13.0323C5.22162 13.3136 5.60315 13.4717 6.00098 13.4717C6.3988 13.4717 6.78033 13.3136 7.06164 13.0323C7.34294 12.751 7.50098 12.3695 7.50098 11.9717C7.50098 11.5739 7.34294 11.1923 7.06164 10.911C6.78033 10.6297 6.3988 10.4717 6.00098 10.4717C5.60315 10.4717 5.22162 10.6297 4.94032 10.911C4.65901 11.1923 4.50098 11.5739 4.50098 11.9717V11.9717Z" :fill="fill(5)"/>
                <path d="M4.50098 17.9912C4.50098 18.389 4.65901 18.7706 4.94032 19.0519C5.22162 19.3332 5.60315 19.4912 6.00098 19.4912C6.3988 19.4912 6.78033 19.3332 7.06164 19.0519C7.34294 18.7706 7.50098 18.389 7.50098 17.9912C7.50098 17.5934 7.34294 17.2119 7.06164 16.9306C6.78033 16.6492 6.3988 16.4912 6.00098 16.4912C5.60315 16.4912 5.22162 16.6492 4.94032 16.9306C4.65901 17.2119 4.50098 17.5934 4.50098 17.9912V17.9912Z" :fill="fill(5)"/>
              </svg>
              My bill
            </router-link>

          </li>
          <li class="nav-item " v-if="this.drop">
            <router-link class=" nav-link nav-focus" to="/logout" :style="handleStyle(6)" style="height:56px;cursor: pointer;font-size: 16px;font-weight: 400;font-style: normal;font-family: 'PingFang SC'">
              <svg class="svg" width="24" height="24" viewBox="0 0 24 24" :fill="fill(6)" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5%">
                <path d="M15.3023 4.43624C14.9264 4.27082 14.4875 4.4414 14.3221 4.81729C14.1567 5.19318 14.3273 5.632 14.7031 5.79742C17.1559 6.87695 18.7407 9.30559 18.7407 11.9847C18.7407 13.7894 18.0379 15.4861 16.7618 16.7622C15.4857 18.0383 13.789 18.7411 11.9843 18.7411C10.1796 18.7411 8.48293 18.0383 7.20683 16.7622C5.9307 15.4861 5.22793 13.7894 5.22793 11.9847C5.22793 9.29027 6.8254 6.85609 9.29766 5.78336C9.67442 5.61988 9.8473 5.18198 9.68384 4.80524C9.52037 4.42848 9.08239 4.25558 8.7057 4.41906C5.68958 5.72774 3.74072 8.69744 3.74072 11.9847C3.74072 13.0972 3.95879 14.1769 4.38884 15.1937C4.80408 16.1754 5.39836 17.0569 6.15521 17.8138C6.91205 18.5706 7.79356 19.1649 8.77531 19.5801C9.7921 20.0102 10.8718 20.2282 11.9843 20.2282C13.0969 20.2282 14.1766 20.0102 15.1933 19.5801C16.1751 19.1649 17.0566 18.5706 17.8134 17.8138C18.5702 17.0569 19.1645 16.1754 19.5798 15.1937C20.0098 14.1769 20.2279 13.0972 20.2279 11.9847C20.2279 8.71614 18.2945 5.75319 15.3023 4.43624V4.43624Z" :fill="fill(6)"/>
                <path d="M11.9999 11.2387C12.4106 11.2387 12.7435 10.9057 12.7435 10.4951V3.00532C12.7435 2.59465 12.4106 2.26172 11.9999 2.26172C11.5893 2.26172 11.2563 2.59465 11.2563 3.00532V10.4951C11.2563 10.9057 11.5893 11.2387 11.9999 11.2387Z" :fill="fill(6)"/>
              </svg>

              Log out
            </router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/NavbarToggleButton";
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
  name: "sidebar",
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default: "img/brand/green.png",
      description: "Sidebar app logo",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  data() {
    return {
      drop: false,
      email:localStorage.getItem("email"),
      projectId:localStorage.getItem("apikey"),
      nickName: '',
      dialogForm:false,
      setNickName:'',
      projectList:[],
      net:localStorage.getItem("net"),
      avater_url:localStorage.getItem("avater") != null ?"https://avatars.dicebear.com/api/male/"+localStorage.getItem("avater")+".svg":"https://avatars.dicebear.com/api/male/1.svg",
      visible:false,
      omitEmailStr:'',
    }
  },
  watch:{
    // $route: "watchrouter",
  },
  created() {
    this.getUserInfo(this.email)
    // this.getProject(this.email)
    this.omitEmailStr = this.omitEmail(this.email)
  },
  provide() {
    return {
      autoClose: this.autoClose,

    };
  },
  methods: {
    handleStyle(command){
      switch (command){
        case 1:
          if (this.$route.name==="dashboardv2"){
            return {  color: "#4D56E1",
              background: "#67F5DB",
              }
          }
           else {
            return {  color: "white",
            }
          }
        case 2:
          if (this.$route.name==="management" || this.$route.name==="info" || this.$route.name==="setting"){
            return { color: "#4D56E1",
              background: "#67F5DB",
            }
          }
          else {
            return {
              color: "white",
            }
          }
        case 3:
          if (this.$route.name==="plan"){
            return { color: "#4D56E1",
              background: "#67F5DB",
            }
          }
          else {
            return {
              color: "white",
            }
          }
        case 4:
          if (this.$route.name==="account"){
            return { color: "#4D56E1",
              background: "#67F5DB",
            }
          }
          else {
            return {
              color: "white",
            }
          }
        case 5:
          if (this.$route.name==="bill"){
            return {  color: "#4D56E1",
              background: "#67F5DB",
            }
          }
          else {
            return {
              color: "white",
            }
          }
        case 6:
          if (this.$route.name==="logout"){
            return {  color: "#4D56E1",
              background: "#67F5DB",
            }
          }
          else {
            return {
              color: "white",
            }
          }
      }

    },
    fill(command){
      switch (command){
        case 1:
          if (this.$route.name==="dashboardv2") {
            return "#4D56E1"
          }
          else {
            return "#FFFFFF"
            }
        case 2:
          if (this.$route.name==="management" || this.$route.name==="info" || this.$route.name==="setting"){
            return "#4D56E1"
          } else {
            return "#FFFFFF"
          }
        case 3:
          if (this.$route.name==="plan") {
            return "#4D56E1"
          }
          else {
            return "#FFFFFF"
          }
        case 4:
          if (this.$route.name==="account") {
            return "#4D56E1"
          }
          else {
            return "#FFFFFF"
          }
        case 5:
          if (this.$route.name==="bill") {
            return "#4D56E1"
          }
          else {
            return "#FFFFFF"
          }
        case 6:
          if (this.$route.name==="logout") {
            return "#4D56E1"
          }
          else {
            return "#FFFFFF"
          }
      }

    },
    changeAvater(){
      let random = Math.floor(Math.random() * (10000 - 1)) + 1
      console.log(random)
      localStorage.setItem("avater",random)
      this.avater_url = "https://avatars.dicebear.com/api/male/"+localStorage.getItem("avater")+".svg"

    },
    omitEmail(email){
      let ipos = email.indexOf("@")
      let str2 = email.substring(ipos+1,email.length);
      let first = email.substring(0,1)
      let last = email.substring(ipos-1,ipos)
      return first+"......"+last+"@"+str2
    },
    fresh() {
      console.log("fresh")
      console.log(this.projectId)
      console.log(this.net)
      this.projectId  = localStorage.getItem("apikey"),
          this.net = localStorage.getItem("net")
      if(this.net === null) {
        console.log("yes")
        localStorage.setItem("net","mainnet")
        this.net = localStorage.getItem("net")
      }
      if (this.projectId === null) {
        console.log("yes")
        this.getProjectInfo(this.email)
      } else {
        this.$router.push({
          path: `/dashboardv2/${this.net}/${this.projectId}`

        });
      }
    },
    watchrouter() {
      if(this.$route.name==="dashboardv2") {
        console.log("haha")
        console.log(this.projectId)
        console.log(this.net)
            this.getProjectInfo(this.email)
      }
    },
    getProject(email) {
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
          if (this.projectList.length === 0) {
            localStorage.setItem("apikey","Noprojects")
            this.projectId  = localStorage.getItem("apikey")
            localStorage.setItem("net","mainnet")
            this.net = localStorage.getItem("net")
            this.$router.push({
              path: `/dashboardv2/${this.net}/${this.projectId}`

            });
          } else {
            if (localStorage.getItem("apikey") === null && localStorage.getItem("net")===null) {
              localStorage.setItem("apikey" ,res['data']['data'][0])
              this.projectId  = localStorage.getItem("apikey")
              localStorage.setItem("net","mainnet")
              this.net  = localStorage.getItem("apikey")
              this.$router.push({
                path: `/dashboardv2/${this.net}/${this.projectId}`

              });
            }

          }
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
          if (this.projectList.length === 0) {
            localStorage.setItem("apikey","Noprojects")
            this.projectId  = localStorage.getItem("apikey")
            this.$router.push({
              path: `/dashboardv2/${this.net}/${this.projectId}`

            });
          } else {
            this.apikey = res['data']['data'][0]['apikey']
            localStorage.setItem("apikey",this.apikey)
            this.projectId  = localStorage.getItem("apikey")
            console.log(this.projectId)
            this.$router.push({
              path: `/dashboardv2/${this.net}/${this.projectId}`

            });
          }
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
    getUserInfo(email) {
      axios({
        method: "get",
        url: "http://127.0.0.1:3000/users/user/"+email,
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
      }).then((res) => {
        // console.log(res)
        if (res['data']['success'] === true) {
          this.nickName = res['data']['data']['nickname']
          console.log(this.nickName)
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
    setUserNickName(email,name) {
      axios({
        method: "patch",
        url: "http://127.0.0.1:3000/users/updateNickName/",
        headers: {
          "Content-Type": "application/json",
          withCredentials: " true",
          crossDomain: "true",
          'Authorization':'Bearer ' + localStorage.getItem("token")
        },
        data:{
          email:email,
          name:name,
        }
      }).then((res) => {
        this.visible = false
        // console.log(res)
        if (res['data']['success'] === true) {
          ElMessage({
            showClose: true,
            type: 'success',
            message: 'Success',
          })
          this.dialogFormVisible= false
          this.getUserInfo(email)
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
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
    showDrop() {
      this.drop = !this.drop;
    },
  },
  beforeUnmount() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style>
.nav-focus:hover{
  background-color:#67F5DB!important;
  color: #4D56E1!important;
}
.nav-focus:hover .svg path{
  fill: #4D56E1 !important ;
}




</style>
