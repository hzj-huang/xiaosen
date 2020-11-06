<template>
  <div class="box df jc_c ai_c">
    <div class="df jc_c">
      <div class="tu"><i class="el-icon-user" style="color: green"></i></div>
      <div class="box2">
        <div>New Visits</div>
        <countTo
          :startVal="0"
          :endVal="num.visits"
          :duration="3000"
          style="font-size: 28px"
        ></countTo>
      </div>
    </div>
    <div class="df jc_c">
      <div class="tu df jc_c">
        <i class="el-icon-chat-dot-square" style="color: blue"></i>
      </div>
      <div class="box2">
        <div>Messagess</div>
        <countTo
          :startVal="0"
          :endVal="num.messages"
          :duration="3000"
          style="font-size: 28px"
        ></countTo>
      </div>
    </div>
    <div class="df jc_c">
      <div class="tu"><i class="el-icon-coin" style="color: red"></i></div>
      <div class="box2">
        <div>Purchases</div>
        <countTo
          :startVal="0"
          :endVal="num.purchases"
          :duration="3000"
          style="font-size: 28px"
        ></countTo>
      </div>
    </div>
    <div class="df jc_c">
      <div class="tu">
        <i class="el-icon-shopping-cart-2" style="color: orange"></i>
      </div>
      <div class="box2">
        <div>New shopping</div>
        <countTo
          :startVal="0"
          :endVal="num.shopping"
          :duration="3000"
          style="font-size: 28px"
        ></countTo>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  name: "",
  props: {
    num: {
      type: Object,
    },
  },
  data() {
    return {
      startVal: 0,
    };
  },
  components: {
    countTo,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  background: rgba(233, 194, 149, 0.541);
  height: 160px;
}

.box > div {
  width: 260px;
  height: 90px;
  background: white;
  margin: 0 20px;
  display: flex;
}
.box2 {
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.box2 > div:nth-of-type(1) {
  font-size: 10px;
}
.tu {
  width: 50%;
  height: 100%;
}
.tu > i {
  width: 100%;
  height: 100%;
  font-size: 70px;
}
</style>
