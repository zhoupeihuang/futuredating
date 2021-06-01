<template>
  <div class="signIn">
    <div class="box">
      <div class="form">
        <div class="title">SIGN IN</div>
        <el-form ref="form" :model="form" class="el-form-box">
          <el-form-item>
            <el-input
              v-model="form.name"
              placeholder="Please enter the account number"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Please input a password"></el-input>
          </el-form-item>
          <el-form-item class="forgot">
            <el-checkbox v-model="form.checked">Remember me</el-checkbox>
            <span>Forgot password</span>
          </el-form-item>
          <el-form-item>
            <div class="btn">SIGN IN</div>
          </el-form-item>
          <el-form-item>
            <el-button type="text">JOIN</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="app">
        <img src="../assets/img/qr.png" alt="" />
        <div class="text">Android APP</div>
      </div>
    </div>
    <div class="about">
      About us | Terms of use | Privacy Policy | Refund and cancellation | Help
      Center | Contact Us
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      form: {
        name: "",
        checked: true,
      },
    }
  },
  components: {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped lang="less">
.signIn {
  height: 100vh;
  background: url("../assets/img/signIn.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.box {
  width: 680px;
  height: 420px;
  background-color: #ffffff;
  opacity: 0.8;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form {
  width: 300px;
  padding: 35px 0 0 23px;
  .title {
    text-align: center;
    font-size: 20px;
    height: 40px;
    background-color: #a48673;
    line-height: 40px;
    color: #fff;
    border-radius: 8px 8px 0px 0px;
  }
  .el-form-box {
    padding: 0 25px;
    padding-top: 43px;
    background: rgba(9, 6, 5, 0.2);
    border-radius: 0px 0px 8px 8px;
  }
  .forgot {
    span {
      padding-left: 17px;
      cursor: pointer;
      &:hover {
        color: #a48673;
      }
    }
  }
  .btn {
    width: 250px;
    height: 35px;
    border-radius: 4px;
    line-height: 35px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    background-color: #a48673;
  }
  ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #a48673;
  }
  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #a48673;
    border-color: #a48673;
  }
}
.app {
  margin-right: 110px;
  img {
    width: 164px;
    height: 164px;
  }
  .text {
    padding-top: 30px;
    font-size: 16px;
  }
}
.el-button--text {
  color: #000;
}
.about {
  position: absolute;
  bottom: 55px;
  font-size: 18px;
  color: #ffffff;
}
</style>
