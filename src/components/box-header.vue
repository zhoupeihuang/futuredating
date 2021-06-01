<template>
  <div class="hd">
    <div class="hd-c">
      <div>Messages</div>
      <div>Notifications</div>
      <div>alexadner</div>
      <div>
        <el-dropdown>
          <div class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              :size="20"
            ></el-avatar
            ><span class="dropdown-title">
              EN
            </span>
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div class="el-dropdown-link">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="20"
                  ></el-avatar>
                  <span> 繁体中文</span>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="el-dropdown-link">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="20"
                  ></el-avatar>
                  <span>EN</span>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hd {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
}

.hd-c {
  display: flex;
  padding: 0 10px;
  font-size: 15px;
  color: #ffffff;

  background-image: linear-gradient(#a48673, #a48673),
    linear-gradient(#a49672, #a49672);
  & > div {
    padding: 13px 8px;
  }

  & > div:last-child {
    padding: 13px 12px;
  }
}

.hd .el-dropdown-link {
  display: flex;
  align-items: center;
}

.dropdown-title {
  margin-left: 5px;
  color: #ffffff;
}
</style>
