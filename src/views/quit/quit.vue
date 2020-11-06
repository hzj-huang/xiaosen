<template>
  <div class="all df fd_c jc_c">
    <div style="heigth: 600px"></div>
    <div style="font-size: 30px">期待你下次光临</div>
    <div><el-button type="primary" @click="quit">确认退出</el-button></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    quit() {
      sessionStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.all {
  width: 1300px;
  height: 700px;
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604665051095&di=4487170e19a287fd500bd1a541ee3933&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F4%2F57a4391cd4c56.jpg);
}
.all > div {
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>