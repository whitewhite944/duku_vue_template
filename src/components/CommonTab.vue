<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTab",
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  data() {
    return {
      dynamicTags: []
    };
  },
  methods: {
    ...mapMutations({
      close: "closeTab"
    }),
    handleClose(tag) {
      this.close(tag);
    },
    changeMenu(tag) {
      this.$router.push({ name: tag.name });
      this.$store.commit("selectMenu", tag);
    }
  },
  components: {}
};
</script>

<style scoped lang='scss'>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>