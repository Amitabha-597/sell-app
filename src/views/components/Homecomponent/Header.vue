<template>
  <div id="header" :style="{background:'url('+Info.avatar+') '}">
    <div class="header_main">
      <div class="header_left">
        <div class="avatar">
          <img :src="Info.avatar" />
        </div>
      </div>
      <div class="header_right">
        <div class="shopname">
          <h3>{{Info.name}}</h3>
        </div>
        <div class="delivery">
          <span>{{Info.description}}</span>/
          <span>{{Info.deliveryTime}}分钟送达</span>
        </div>
        <div class="discount">
          <p>在线支付满28减5，满50减10</p>
          <div>5个</div>
        </div>
      </div>
    </div>
    <div class="header_notice">
      <marquee behavior="scrool" direction="top">{{Info.bulletin}}</marquee>
    </div>
  </div>
</template>

<script>
import { Info } from "../../../api/api";
export default {
  data() {
    return {
      Info: {}
    };
  },
  created() {
    Info().then(res => {
      this.Info = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 100%;
  width: 100%;
  float: left;
  width: 100%;
 

  .header_main {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header_left {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .avatar {
        width: 70px;
        height: 70px;
        img {
          width: 100%;
          height: 100;
        }
      }
    }
    .header_right {
      width: 75%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      div {
        padding: 2px;
      }
      .shopname {
        width: 100%;
        text-indent: 55px;
        background: url("../../../assets/img/brand@2x.png") no-repeat 0px 4px;
        background-size: 50px 25px;
      }
      .delivery {
        font-size: 15px;
      }
      .discount {
        width: 95%;
        background: url("../../../assets/img/decrease_1@2x.png") no-repeat 0px
          4px;
        background-size: 19px 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 14px;
          text-indent: 20px;
        }
        div {
          width: 32px;
          height: 18px;
          text-align: center;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 20px;
          font-size: 12px;
        }
      }
    }
  }
  .header_notice {
    height: 20%;
    width: 100%;
    text-indent: 40px;
    font-size: 14px;
    background: url("../../../assets/img/bulletin@2x.png") no-repeat 5px;
    background-size: 32px 18px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    marquee {
      font-size: 14px;
      line-height: 29px;
      width: 86%;
    }
  }
}
</style>