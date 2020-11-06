<template>
  <div>
    <div class="header"><top :user="user"></top></div>
    <div class="container">
      <div class="aside">
        <layleft></layleft>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../../components/layout1/top";
import layleft from "../../components/layout1/layoutleft";
export default {
  name: "",
  props: {},
  components: {
    top,
    layleft,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
  },
  watch: {},
  computed: {},
};
</script>

<style>
.header {
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  background: skyblue;
  width: 100%;
  z-index: 99;
}
.container {
  display: flex;
  width: calc(100% - 200px);
}
.aside {
  width: 200px;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 60px;
}
.main {
  flex: 1;
  position: relative;
  left: 200px;
  top: 60px;
  padding: 20px;
}
</style>