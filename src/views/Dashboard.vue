<template>
  <div class="na" style=" height: 60px">
    <div class="na-left" style="height: 60px; width: 50px;float:left;display:flex; align-items:center; justify-content:center;">
      <img src="@/assets/shortLogo.svg">
    </div>
    <div class="" style="height: 60px; float:left; margin-left: 0px;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
      Dashboard
    </div>
  </div>
  <div style="margin:0;padding:0; width:100%;height:1px;background-color:whitesmoke;overflow:hidden;"></div>
  <div class="" style=" height: 40px">
    <div class="na-left" style="height: 40px; width: 20%;float:left; ;display:flex; align-items:center; justify-content:center ">
      <el-dropdown>
        <el-button size="small" class="menuButton" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 400">
          Mainnet<i class="el-icon--right el-icon-arrow-down"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Mainnet</el-dropdown-item>
            <el-dropdown-item>Testnet</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="mr-2"></div>
      <el-dropdown>
        <el-button size="small" class="menuButton" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">
          All projects<i class="el-icon--right el-icon-arrow-down"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>A</el-dropdown-item>
            <el-dropdown-item>B</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div  class="na-mid ml-4" style="height: 40px; width: 50%;float:left;display:flex; align-items:center;font-family: 'PingFang SC';font-style: normal;font-weight: 500;font-size: 14px;color: #1D2129" >
      <el-button-group class="ml-4">
        <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">7 days</el-button>
        <el-button size="small" style="background-color: white;color: #4D56E1;border-radius: 2px;font-weight: 40">30 days</el-button>
      </el-button-group>
      <div class="ml-3"></div>
      <el-date-picker
          size="small"
          v-model="value2"
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
      />
    </div>
    <div  class="na-right mr-0 " style="height: 40px; width: 20%;display:flex; align-items:center; margin: 0 auto ;justify-content:center;">
      <el-button size="small" style="background-color: white;border-radius: 2px;font-weight: 40"><i class="el-icon-setting" ></i>Project Settings</el-button>
    </div>

  </div>
  <div class="container-fluid" >
      <!--Charts-->
      <div class="row mt-3" style="font-weight: 600;font-size: 24px;font-family: 'PingFang SC';font-style: normal;color: #1D2129">
        Requests Volume
      </div>
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <template v-slot:header>
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                  <h5 class="h3 text-white mb-0">Sales value</h5>
                </div>
                <div class="col">
                  <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item mr-2 mr-md-0">
                      <a
                        class="nav-link py-2 px-3"
                        href="#"
                        :class="{ active: bigLineChart.activeIndex === 0 }"
                        @click.prevent="initBigChart(0)"
                      >
                        <span class="d-none d-md-block">Month</span>
                        <span class="d-md-none">M</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link py-2 px-3"
                        href="#"
                        :class="{ active: bigLineChart.activeIndex === 1 }"
                        @click.prevent="initBigChart(1)"
                      >
                        <span class="d-none d-md-block">Week</span>
                        <span class="d-md-none">W</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="chart-area">
              <canvas :height="350" :id="salesChartID"></canvas>
            </div>
          </card>
        </div>

<!--        <div class="col-xl-4">-->
<!--          <card header-classes="bg-transparent">-->
<!--            <template v-slot:header>-->
<!--              <div class="row align-items-center">-->
<!--                <div class="col">-->
<!--                  <h6 class="text-uppercase text-muted ls-1 mb-1">-->
<!--                    Performance-->
<!--                  </h6>-->
<!--                  <h5 class="h3 mb-0">Total orders</h5>-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
<!--            <div class="chart-area">-->
<!--              <canvas :height="350" :id="ordersChartID"></canvas>-->
<!--            </div>-->
<!--          </card>-->
<!--        </div>-->
      </div>
      <!-- End charts-->

      <!--Tables-->
<!--      <div class="row mt-5">-->
<!--        <div class="col-xl-8 mb-5 mb-xl-0">-->
<!--          <page-visits-table></page-visits-table>-->
<!--        </div>-->
<!--        <div class="col-xl-4">-->
<!--          <social-traffic-table></social-traffic-table>-->
<!--        </div>-->
<!--      </div>-->
      <!--End tables-->
    </div>
</template>
<script>
// Charts
import { ordersChart } from "@/components/Charts/Chart";
import Chart from "chart.js";
//
// import PageVisitsTable from "./Dashboard/PageVisitsTable";
// import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
let chart;

export default {
  components: {
    // PageVisitsTable,
    // SocialTrafficTable,
  },
  data() {
    return {
      salesChartID: "salesChart",
      ordersChartID: "ordersChart",
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
      },
    };
  },
  methods: {
    initBigChart(index) {
      chart.destroy();
      chart = new Chart(
        document.getElementById(this.salesChartID).getContext("2d"),
        {
          type: "line",
          data: {
            labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Performance",
                tension: 0.4,
                borderWidth: 4,
                borderColor: "#5e72e4",
                pointRadius: 0,
                backgroundColor: "transparent",
                data: this.bigLineChart.allData[index],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            tooltips: {
              enabled: true,
              mode: "index",
              intersect: false,
            },
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 0,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 10,
                    fontColor: "#8898aa",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                  },
                },
              ],
            },
            layout: {
              padding: 0,
            },
          },
        }
      );
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    chart = new Chart(
      document.getElementById(this.salesChartID).getContext("2d"),
      {
        type: "line",
        data: {
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Performance",
              tension: 0.4,
              borderWidth: 4,
              borderColor: "#5e72e4",
              pointRadius: 0,
              backgroundColor: "transparent",
              data: this.bigLineChart.allData[1],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 0,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.0)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 10,
                  fontColor: "#8898aa",
                  fontSize: 13,
                  fontFamily: "Open Sans",
                },
              },
            ],
          },
          layout: {
            padding: 0,
          },
        },
      }
    );
    ordersChart.createChart(this.ordersChartID);
  },
};
</script>
<style>
.menuButton{

}
</style>
