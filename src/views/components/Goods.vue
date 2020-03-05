<template>
  <div id="goods">
    <div class="goodsLeft">
      <ul class="content">
        <Menu active-name="2" @on-select="onSelect" style="width:100%;">
          <MenuItem :name="i" style="padding: 20px 15px;" v-for="(item,i) in namelist" :key="i">
            <img class="icon" v-show="item.type==2" src="../../assets/img/special_3@2x.png" alt />
            <img class="icon" v-show="item.type==1" src="../../assets/img/discount_3@2x.png" alt />
            <template>{{item.name}}</template>
          </MenuItem>
        </Menu>
      </ul>
    </div>
    <div class="goodsRight">
      <ul class="content">
        <div :id="i" v-for="(menu,i) in namelist" :key="menu.name+i">
          <div class="total">{{menu.name}}</div>
          <div v-for="child in menu.foods" :key="child.name" class="lists">
            <div class="img">
              <img :src="child.icon" />
            </div>
            <div class="msg">
              <h4>{{child.name}}</h4>
              <span class="tradename">{{child.description}}</span>
              <p class="sell">
                <span>月售{{child.sellCount}}份</span>
                <span>好评率 {{child.rating}}%</span>
              </p>
              <div class="price">
                <h4>
                  <span class="cf00">￥{{child.price}}</span>&emsp;
                  <del v-if="child.oldPrice">￥{{child.oldPrice}}</del>
                </h4>
                <div class="changenum">
                  <button @click="changeNum(-1 ,child.name)"></button>
                  <span  >{{child.num}}</span>
                  <button @click="changeNum(1 ,child.name)"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScrool from "better-scroll";
import { goods } from "../../api/api";
export default {
  data() {
    return {
      namelist: [],
      curSelectedLab: 0
    };
  },
  mounted() {
    new BScrool(".goodsLeft", {
      click: true
    });
    this.rightDiv = new BScrool(".goodsRight", {});
  },
  created() {
    goods().then(res => {
      this.namelist = res.data.data;
    });
  },
  methods: {
    onSelect(name) {
      this.curSelectedLab = name;
      this.rightDiv.scrollToElement(document.getElementById(name), 3000);
      console.log(this.curSelectedLab);
    },
    changeNum(num, name){
    console.log(num, name);
    

    }
  }
};
</script>

<style lang="scss" scoped>
#goods {
  width: 100%;
  height: 100%;
  display: flex;
  .goodsLeft {
    width: 25%;
    height: 100%;
    overflow: auto;
    .icon {
      margin-right: 2px;
      width: 16px;
      height: 16px;
      vertical-align: text-bottom;
    }
  }
   .goodsRight {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    .total {
      width: 100%;
      height: 30px;
      background: #f3f3f3;
      display: flex;
      text-indent: 10px;
      align-items: center;
    }
    .lists {
      width: 100%;
      margin: 10px;
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        img {
          width: 60px;
          height: 60px;
        }
      }
      .msg {
        width: 100%;
        .tradename {
          font-size: 12px;
        }
        .sell {
          font-size: 14px;
        }
        .price {
          width: 85%;
          padding: 4px 0;
          display: flex;
          justify-content: space-between;
          h4 {
            span {
              color: #ff0000;
            }
            del {
              font-size: 12px;
            }
          }
          .changenum {
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              text-align: center;
              display: inline-block;
              width: 15px;
              height: 25px;
              padding: 0px 3px;
              font-size: 14px;
              line-height: 25px;
            }
            button {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: none;
              outline: none;
              background: url(../../assets/img/add.svg);
              background-size: 20px 20px;

              &:first-child {
                background: url(../../assets/img/cut.svg);
                background-size: 20px 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>