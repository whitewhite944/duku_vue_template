<template>
  <header>
    <div class="left-content">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="mini"
        @click="collapseMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img class="userImg" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require("../assets/images/user-default.png")
    };
  },
  methods: {
    logOut() {
      this.$router.push("/login");
    },
    collapseMenu() {
      this.$store.commit("collapseMenu");
    }
  },
  components: {}
};
</script>

<style scoped lang='scss'>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>