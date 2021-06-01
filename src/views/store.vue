<template>
  <div class="store color">
    <top></top>
    <!-- <img scr=".././assets/img/background.png" /> -->
    <div class="store_container">
      <div class="store_worp flex">
        <div
          class="warp gift"
          :class="flag ? 'warp_color' : ''"
          @click="handleClick(true)"
        >
          <div class="flex flex__center mt-10 ml-10 mr-10 mb-10">
            <div><img src=".././assets/img/gift.png" /></div>
            <div class="font">礼物</div>
          </div>
        </div>
        <div
          class="warp ml-2 my"
          :class="flag ? '' : 'warp_color'"
          @click="handleClick(false)"
        >
          <div class="flex flex__center mt-10 ml-10 mr-10 mb-10">
            <div><img src=".././assets/img/gift.png" /></div>
            <div class="font">我收到的礼物</div>
          </div>
        </div>
      </div>
      <div class="mt-20 classify mb-38">
        <!-- 礼物 -->
        <div v-if="show">
          <div class="flex parent">
            <div
              class="child mt-10 ml-10"
              v-for="(v, i) in listData"
              :key="i"
              @click="handleText(v, i)"
              :class="i === num ? 'child_red' : ''"
            >
              {{ v.text }}
            </div>
          </div>
          <div class="mt-40 ml-40 mb-32">
            <div class="flex">
              <div class="flex flex__v ml-40 center" v-for="v in 5" :key="v">
                <div>
                  <img class="img" src="../assets/img/book.jpg" />
                </div>
                <div class="mt-6">{{ text }}</div>
                <div class="f14 mt-8">{{ num + v }}金币</div>
                <div class="btn f14 mt-8">发送礼物</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 我收到的礼物 -->
        <div v-if="!show">
          <div class="flex parent1 mt-10">
            <div
              class="flex flex__v flex__center ml-20"
              v-for="v in 10"
              :key="v"
            >
              <img class="my_img" src="../assets/img/my_gift2.jpg" />
              <div class="f14 center mt-10 gift_color mb-10">礼物盒x1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/top"
export default {
  name: "",
  props: {},
  data() {
    return {
      listData: [
        { text: "Lovers空间" },
        { text: "爱情空间" },
        { text: "女王空间" },
        { text: "激情空间" },
        { text: "虚拟空间" },
        { text: "男士空间" },
        { text: "free空间" },
      ],
      flag: true,
      show: true,
      num: 0,
      text: "Lovers空间",
    };
  },
  components: {
    top
  },
  mounted() {},
  methods: {
    handleClick(key) {
      this.flag = key;
      this.show = key;
    },
    handleText(v, i) {
      this.num = i;
      this.text = v.text;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="less" >
.store {
  background: url(".././assets/img/background.png") repeat,
    linear-gradient(#8979a5, #9c6d97);
  color: #9c6d97;
  .store_container {
    width: 990px;
    overflow: hidden;
    margin: 0 auto;
    .store_worp {
      margin-top: 70px;
      .warp_color {
        background: #b4534d;
      }
      .warp {
        cursor: pointer;
      }
      .my:hover {
        background: #b4534d;
      }
      .gift:hover {
        background: #b4534d;
      }
    }
  }
  .font {
    color: #513b5a;
    font-size: 14px;
    margin-left: 10px;
  }
  .classify {
    border: 1px solid #dcdcdc;
    background: #ffffff;

    .parent {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      color: #9c6d97;
      .child {
        width: 140px;
        line-height: 30px;
        margin-right: 10px;
        margin-bottom: 5px;
        border: 1px solid #dcdcdc;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .child:active {
        color: #ff4a53;
      }
      .child_red {
        color: #ff4a53;
      }
    }
    .parent1 {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
    }
    .img {
      width: 80px;
      height: 80px;
      margin: 0 auto;
    }
    .btn {
      font-size: 14px;
      color: #ff4a53;
      padding: 5px 10px;
      border-radius: 15px;
      outline: none;
      background: transparent;
      border: 1px solid;
      cursor: pointer;
    }
    .my_img {
      height: 150px;
      width: 150px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .gift_color {
      color: #7ce6fe;
    }
    .gift_color:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
