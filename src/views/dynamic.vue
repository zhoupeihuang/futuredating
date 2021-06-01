<template>
  <div class="dynamic">
    <div class="title">NEWSFEED</div>
    <div class="list">
      <div class="item">
        <div class="left">
          <img src="../assets/img/head.png" alt="" />
          <span class="text">
            <span class="name">cindy </span>
            加入我们的网络~
          </span>
        </div>
        <div class="time">4月17</div>
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/img/head.png" alt="" />
          <span class="text">
            <span class="name">cindy </span>
            上传了1张图片到相册
            <span class="name">动态图片 </span>
          </span>
        </div>
        <div class="time">4月17</div>
      </div>
      <div class="info">
        <div>孤独一掷，自饮~</div>
        <img src="../assets/img/six.png" alt="" />
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/img/head.png" alt="" />
          <span class="text">
            <span class="name">cindy </span>
            加入我们的网络~
          </span>
        </div>
        <div class="time">4月17</div>
      </div>
      <div class="item">
        <div class="left">
          <img src="../assets/img/head.png" alt="" />
          <span class="text">
            <span class="name">cindy </span>
            加入我们的网络~
          </span>
        </div>
        <div class="time">4月17</div>
      </div>
    </div>
    <div class="view">
      <div class="btn">VIEW MORE</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.dynamic {
  min-height: 837px;
  width: 684px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #f1f1f1;
  position: relative;
  padding-bottom: 80px;
  .title {
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    border-radius: 4px 4px 0px 0px;
    background-color: #a48673;
    color: #ffffff;
    text-align: left;
    padding-left: 35px;
  }
  .list {
    padding: 16px 0 0 19px;
  }
  .item {
    display: flex;
    min-height: 50px;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin-bottom: 36px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
    }
    .text {
      padding-left: 13px;
      .name {
        color: #a48673;
      }
    }
    .time {
      margin-right: 47px;
    }
  }
  .info {
    padding-bottom: 20px;
    div {
      padding-bottom: 10px;
    }
    text-align: left;
    padding-left: 60px;
  }
  .view {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    .btn {
      font-size: 16px;
      color: #fff;
      width: 147px;
      height: 30px;
      line-height: 30px;
      background-color: #a48673;
    }
  }
}
</style>
