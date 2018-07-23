<template>
  <div class="header">
    <a-row class="header-top">
      <a-col :span="24">
        <span>欢迎，{{this.userName}}</span>
        <a href="">退出</a>
      </a-col>
    </a-row>
    <a-row class="breadcrumb">
      <a-col :span="4" class="breadcrumb-title">
        首页
      </a-col>
      <a-col :span="20" class="weather">
        <span class="data">{{sysTime}}</span>
        <span class="weather-img">
          <img :src="dayPoctureUrl" alt="">
        </span>	
        <span class="weather-detail">
          {{weather}}
        </span>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Util from "../../utils/utils";
export default {
  name: "Header",
  data() {
    return {
      userName: "qdd",
      sysTime: "",
      city: "hefei",
      weather: "",
      dayPoctureUrl: ""
    };
  },
  methods: {
    getWeatherAPIData() {
      let that = this;
      let data = this.$jsonp(
        "https://api.map.baidu.com/telematics/v3/weather?location=" +
          this.city +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      ).then(res => {
        let data = res.results[0].weather_data[0];
        this.weather = data.weather;
        this.dayPoctureUrl = data.dayPictureUrl;
      });
    }
  },
  mounted() {
    this.getWeatherAPIData();
    setInterval(() => {
      let sysTimeA = Util.formateDate(new Date().getTime());
      this.sysTime = sysTimeA;
    }, 1000);
  }
};
</script>
<style lang="stylus" scoped>
.header {
  background: white;

  .header-top {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    text-align: right;

    a {
      margin-left: 40px;
      color: #999;
    }
  }

  .breadcrumb {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-top: 1px solid #eaeaea;

    .breadcrumb-title {
      text-align: center;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        left: 78px;
        bottom: -11px;
        border-top: 12px solid white;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
      }
    }

    .weather {
      display: inline-block;
      text-align: right;
      font-size: 12px;

      .weather-detail {
        padding-left: 5px;
      }

      .weather-img {
        img {
          padding-left: 20px;
          height: 20px;
          position: relative;
          top: -1.5px;
        }
      }
    }
  }
}
</style>

