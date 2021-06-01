<template>
  <div class="joinUS">
    <top></top>
    <div class="joinUS_container">
      <div class="mt-70 f20 flex">加入我们的社区</div>
      <div class="mt-80 center f14 white">
        加入我们这个富有激情的社区。找到新朋友,约会,分享照片和视频。嗨起来!
      </div>
      <div class="flex flex__middle ow_box_cap_empty mt-20 h-30">
        <div class="ml-10">
          <img src=".././assets/img/person.png" />
        </div>
        <div class="ml-8 pt-8 pb-8 pl-8 f14">注册您的个人资料</div>
      </div>
      <div class="content-center white">
        <div class="table">
          <div class="t-title">基本资料</div>
          <div>
            <div class="item">
              <div>用户名</div>
              <div>
                <input type="text" v-model="name" />
              </div>
              <div>必须包含字母和数字</div>
            </div>
            <div class="item">
              <div>邮箱</div>
              <div>
                <input type="text" v-model="email" />
              </div>
              <div>必须是有效的</div>
            </div>
            <div class="item">
              <div>密码</div>
              <div>
                <input type="text" v-model="password" />
              </div>
              <div></div>
            </div>
            <div class="item">
              <div>再次输入密码</div>
              <div>
                <input type="text" v-model="two" />
              </div>
              <div></div>
            </div>
            <div class="item">
              <div>性别</div>

              <div class="sex">
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </div>
              <div></div>
            </div>
            <div class="item">
              <div>生日</div>
              <div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </div>
              <div></div>
            </div>
            <div class="item">
              <div>国家</div>
              <div>
                <input type="text" v-model="city" />
              </div>
              <div>来自哪个国家?</div>
            </div>
          </div>
        </div>
        <div class="table">
          <div class="t-title">服务条款</div>
          <div>
            <div class="item">
              <div><span>我同意</span><span class="text_color">服务条款</span></div>
              <div>
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
              <div></div>
            </div>
          </div>
        </div>
         <div class="change mb-30 fr">
        <div class="text">
          <span>注册</span>
          <img src="@/assets/img/icon1.png" alt="" />
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
      name: "",
      email: "",
      password: "",
      two: "",
      radio: "1",
      value1: "",
      city: "",
       checked: true
    };
  },
  components: {
    top
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped lang="less" >
.flex1 {
  display: flex;
  justify-content: center;
  align-self: center;
}

.joinUS {
  background: url(".././assets/img/background.png") repeat,
    linear-gradient(#8979a5 , #9c6d97);
  .joinUS_container {
    margin: 0 auto;
    width: 1200px;
    word-wrap: break-word;
  }
  .ow_box_cap_empty {
    width: 744px;
    margin: 0 auto;
  background: #bba7c2;
    border: none;
    border-radius: 6px 6px 0px 0px;
    margin-bottom: 8px;
  }
  .content-center {
    .flex1;
    flex-direction: column;
    align-items: flex-end;
  }
    .change,
  .save {
    text-align: right;
    .flex1;
    justify-content: flex-end;
    .text {
      .flex1;
      font-size: 14px;
      // border: 1px solid @color;
      padding: 8px 10px;
      background: #eaceee;
      border-radius: 5px;
      span {
        padding-right: 5px;
        margin-right: 5px;
        border-right: 1px solid #816b88;
      }
    }
  }
  .table,
  .avatar-img {
       width: 744px;
    margin: 0 auto;
    text-align: right;
    border: 1px solid #ba9eba;
    margin-bottom: 20px;
    .t-title {
      .flex1;
      background: #bba7c2;
      padding: 15px 0;
    }
    .item {
      .flex1;
      border-bottom: 1px solid #ba9eba;
      &:nth-last-child(1) {
        border: none;
      }
      div {
        flex: 1;
        .flex1;
        padding: 20px 10px;
        &:first-child {
          justify-content: flex-end;
        }
        &:nth-child(2) {
          border-left: 1px solid #ba9eba;
          border-right: 1px solid #ba9eba;
          input {
            width: 100%;
            padding: 10px 0;
          }
        }
        &:nth-last-child(1) {
          justify-content: flex-start;
        }
      }
    }
  }
  .text_color{
    color:#7ce6fe
  }
}
</style>
