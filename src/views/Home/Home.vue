<template>
  <el-row :gutter="10" class="home">
    <el-col :span="24">
      <div class="num">
        <el-card shadow="hower" v-for="item in data" :key="item.name">
          <i class="icon"></i>
          <div class="detail">
            <p class="text">{{ item.name }}</p>
            <p class="num">{{ item.value }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      data: []
    };
  },
  methods: {
    getWebData() {
      this.$http.get("/dataAPI/getData").then(result => {
        this.data = result.data.data.WebData;
      });
    }
  },
  mounted() {
    this.getWebData();
  },
  components: {}
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/home";
</style>