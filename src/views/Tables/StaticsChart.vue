<template>
  <div class="chart">
    <div id="mainAddress" style="width: 100%; height: 600px; background: white">
    </div>
  </div>
</template>
<script>

import * as echarts from 'echarts'
import { onMounted } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      day:1 ,
      records:[],
    }
  },
  props:{
    email:String,
    apikey:String,
    net:String,
    start:Number,
    end:Number,
  },
  created() {
    this.setup()
  },

  methods: {
    setup() {
      //methods
      const echartInit = () =>{
        var myChart = echarts.init(document.getElementById('mainAddress'),null,{
          height:600,
        });

        var day = computeDays(this.start,this.end)

        var xdata =[]

        var sdata = new Array(day)

       getProjectStatics(this.email,this.apikey,this.net,this.start,this.end)

        for (var m = -day+1; m <= 0 ; m ++) {
          xdata.push(getDay(m))
        }
        function getDay(day){
          var today = new Date();
          var todayMilliseconds = today.getTime() + 1000 * 60 * 60 *24 * day;
          today.setTime(todayMilliseconds);
          var tMonth = today.toDateString().split(" ")[1]
          var tDate = today.toDateString().split(" ")[2]
          tMonth = doHandleMonth(tMonth);
          tDate = doHandleMonth(tDate);
          return tMonth+" " +tDate;
        }
        function computeDays (start, end){
          // console.log( Math.ceil((end-start) / 86400000))
          return Math.ceil((end-start) / 86400000)
        }

        function doHandleMonth(month){
          var m = month;
          if(month.toString().length ==1) {
            m = "0" +month
          }
          return m;
        }
        function refreshData(Data,index){
          var option =myChart.getOption()
          option.series[index].data = Data
          myChart.setOption(option)
        }

        function getProjectStatics(email, apikey, net, start ,end ){
          axios({
            method: "patch",
            url: "http://127.0.0.1:3000/project/rpcRecords",
            data: {
              email: email,
              apikey:apikey,
              net:net,
              start:start,
              end:end,
            },
            headers: {
              "Content-Type": "application/json",
              withCredentials: " true",
              crossDomain: "true",
              'Authorization':'Bearer ' + localStorage.getItem("token")
            },
          }).then((res) => {
            console.log(res)
            // console.log(res)
            // console.log(res["data"]["data"]['statics'].length)
            for (var j = 0; j < res["data"]["data"]['statics'].length; j ++) {
              sdata[j]=res["data"]["data"]['statics'][j]
              refreshData(sdata,0)
            }

          });
        }

        var option = {
          color:['#4D56E1','#4D56E1'],
          tooltip: {
            trigger: 'axis',
            backgroundColor:'#FFFFFF',
            // formatter:function (params){
            //   console.log(JSON.stringify(params[0]))
            //   return params[0]["name"] +"<br/>" +params[0]["value"]
            // }
          },

          xAxis: {
            type: 'category',
            data: xdata,
            splitLine: {
              show: false
            },
            axisTick:{
              show:false
            },
            axisLabel:{

              color: '#86909C',
              fontSize : 12

            },
            axisLine:{
              lineStyle:{
                color:'#E5E6EB' //更改坐标轴颜色
              }
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLabel:{

              color: '#86909C',
              fontSize : 12

            },
          },grid : {
            left:'4%',
            containLabel: true,
            bottom:'6%'
          },
          series: [{
            name: 'Request',
            type: 'line',
            data: sdata,
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#e6effe'
              }, {
                offset: 1,
                color: 'rgb(255,255,255)'

              }]),
            }
          },
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        window.addEventListener("resize", function () {

          myChart.resize()
          myChart.setOption(option)
        })
      }

      //onMounted
      onMounted(()=>{
        echartInit()
      })
      //return
      return {
        echartInit
      };
    },
  },

}
</script>

<style scoped>

</style>
