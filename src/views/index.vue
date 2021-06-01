<template>
  <div>
    <boxHeader></boxHeader>
    <div class="top">
      <div class="tab-c">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          class="container tabs"
        >
          <el-tab-pane
            :label="item"
            :name="item"
            v-for="item in tabList"
            :key="item"
          ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="swiper-c container">
        <div class="swiper-box">
          <Swiper
            effect="coverflow"
            :slides-per-view="3"
            :space-between="130"
            navigation
            autoplay
            parallax
          >
            <swiper-slide class="slideitem" v-for="index in 6">
              <img src="../assets/img/area2-avater.png" alt="" />
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="bottom container">
      <div class="btm-left">
        <div class="com-box">
          <div class="com-hd"></div>
          <div class="com-content">
            <div class=" area-1">
              <img src="../assets/img/chongzhi-2.png" alt="" />
              <span>78888</span>
            </div>

            <div class="com-btn">
              <el-button class="btn">Buy more</el-button>
            </div>
          </div>
        </div>

        <div class="com-box">
          <div class="com-hd">USERS</div>
          <div class="com-content">
            <div class="com-radio">
              <el-radio-group v-model="radio1">
                <el-radio-button label="Latest"></el-radio-button>
                <el-radio-button label="Online"></el-radio-button>
              </el-radio-group>
            </div>

            <div class="area2-img">
              <img
                src="../assets/img/area2-avater.png"
                alt=""
                v-for="index in 7"
                :key="index"
              />
            </div>

            <div class="com-btn">
              <el-button class="btn">View all</el-button>
            </div>
          </div>
        </div>

        <div class="com-box">
          <div class="com-hd">INVITE FRIENDS</div>
          <div class="com-content">
            <div class="area3-img">
              <img src="../assets/img/area3-em.png" alt="" />
            </div>

            <div class="com-btn">
              <el-button class="btn">Show Inviation Path</el-button>
            </div>
          </div>
        </div>

        <div class="com-box">
          <div class="com-hd">USERS</div>
          <div class="com-content">
            <div class="com-radio">
              <el-radio-group v-model="radio2">
                <el-radio-button label="Latest"></el-radio-button>
                <el-radio-button label="Top Rated"></el-radio-button>
              </el-radio-group>
            </div>

            <div class="area4-img">
              <img
                src="../assets/img/area2-avater.png"
                alt=""
                v-for="index in 8"
                :key="index"
              />
            </div>

            <div class="com-btn">
              <el-button class="btn">Add new</el-button>
              <el-button class="btn">View all</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="btm-right">
        <dynamic></dynamic>
      </div>
    </div>
  </div>
</template>

<script>
import boxHeader from "@/components/box-header"
import dynamic from "@/views/dynamic"
import "swiper/swiper.less"
import "swiper/components/effect-coverflow/effect-coverflow.less"
import "swiper/components/navigation/navigation.less"
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Parallax,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

SwiperCore.use([EffectCoverflow, Navigation, Autoplay, Parallax])
export default {
  components: { dynamic, Swiper, SwiperSlide, boxHeader },
  data() {
    return {
      activeName: "Main",
      tabList: [
        "Main",
        "Members",
        "Recharge",
        "Upgrade",
        "Store",
        "Photo",
        "Mails",
      ],
      radio1: "Latest",
      radio2: "Latest",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      swiperOptions: {
        slidesPerView: 3,
        grabCursor: true,
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  },

  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log("slide change")
    },
  },
  computed: {},
  watch: {},
}
</script>

<style scoped lang="less">
.top {
  padding-top: 457px;
  background: url("../assets/img/bg.png") no-repeat center / 100% 100%;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  width: 1160px;
}

.tab-c {
  background-image: linear-gradient(#a48673, #a48673),
    linear-gradient(#a49673, #a49673);
}
.tabs {
  color: #fff;
}

  ::v-deep .el-tabs__nav-wrap {
    height: 58px;
  }
  ::v-deep .el-tabs__nav-scroll {
    display: inline-block;
  }
  ::v-deep .el-tabs__nav-wrap::after {
    width: 0;
  }

  ::v-deep .el-tabs__header {
    margin-bottom: 1px;
  }

  ::v-deep .el-tabs__item.is-active {
    background-color: rgba(255, 255, 255, 0.16);
  }

  ::v-deep .el-tabs__item.is-active {
    color: #fff;
  }

  ::v-deep .el-tabs__item {
    color: #fff;
    padding: 0;
    width: 126px;
    height: 58px;
    line-height: 58px;
  }

  ::v-deep .el-tabs__item:hover {
    background-color: rgba(255, 255, 255, 0.16);
  }

  ::v-deep .el-tabs__active-bar {
    background: #fff;
  }

.swiper-c {
  padding: 122px 0 72px;
  height: 369px;

  .swiper-box {
    box-sizing: border-box;
    padding: 55px 60px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .slideitem {
    box-sizing: border-box;
    padding: 2px;
    background: #fff;
    height: 260px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      vertical-align: middle;
    }
  }

  ::v-deep .swiper-button-prev,
  ::v-deep .swiper-button-next {
    width: 60px;
    height: 60px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }
  ::v-deep .swiper-button-prev:after,
  ::v-deep .swiper-button-next:after {
    font-size: 40px;
    font-weight: 800;
    color: #fff;
  }
}

.bottom {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.btm-left {
  width: 453px;
  height: 100px;

  .com-box {
    padding-bottom: 10px;
    border-radius: 4px;

    overflow: hidden;
    .com-hd {
      padding-left: 46px;
      font-size: 16px;
      color: #fff;
      height: 32px;
      line-height: 32px;
      text-align: left;
      background-image: linear-gradient(
          rgba(164, 134, 115, 1),
          rgba(164, 134, 115, 1)
        ),
        linear-gradient(rgba(164, 150, 115, 1), rgba(164, 150, 115, 1));
    }

    .com-content {
      padding-bottom: 15px;
      border: solid 2px rgba(241, 241, 241, 1);
      border-top: none;
      background-color: rgba(255, 255, 255, 1);
    }

    .com-btn {
      padding-right: 13px;
      display: flex;
      justify-content: flex-end;
      .btn {
        height: 32px;
        font-size: 16px;
        color: rgba(102, 102, 102, 1);

        border: solid 2px rgba(225, 225, 225, 1);
      }
      .el-button:focus,
      .el-button:hover {
        color: rgba(102, 102, 102, 1);
        background-color: rgba(255, 255, 255, 1);
        border-color: #333;
      }
    }
  }
}

.area-1 {
  padding: 26px 0 15px;
  display: flex;
  justify-content: center;

  & > img {
    vertical-align: middle;
  }
  & > span {
    padding-left: 20px;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    font-size: 32px;
    color: rgba(236, 172, 69, 1);
  }
}

.com-radio {
  padding: 7px 11px 0 0;
  display: flex;
  justify-content: flex-end;
  ::v-deep .el-radio-group {
    border-radius: 4px;
    border: solid 2px rgba(225, 225, 225, 1);
  }
  ::v-deep .el-radio-button__inner {
    padding: 0 9px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    border: none;
    border-radius: 0;
  }

  ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: rgba(225, 225, 225, 1);
    box-shadow: none;
  }

  ::v-deep .el-radio-button__inner:hover {
    background-color: rgba(225, 225, 225, 0.3);
  }
}

.area2-img {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0 17px 22px;

  & > img {
    margin-right: 10px;
    vertical-align: middle;
  }
}

.area3-img {
  display: inline-block;
  padding: 10px;
  margin: 15px 0 18px;
  background-color: rgba(164, 134, 115, 1);
  border-radius: 8px;
}

.area4-img {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0 17px 10px;

  & > img {
    margin-right: 14px;
    margin-bottom: 10px;
    width: 73px;
    height: 73px;
    vertical-align: middle;
  }
}

.btm-right {
  width: 683px;
  height: 100%;
}
</style>
