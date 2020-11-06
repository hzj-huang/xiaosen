<template>
  <div>
    <homenumber :num="num"></homenumber>
    <xiantu v-if="xian.length > 0" :xian="xian"></xiantu>
    <div class="santu">
      <sange v-if="san.length > 0" :san="san" style="width: 400px"></sange>
      <lin v-if="lin.length > 0" :lin="lin" style="width: 400px"></lin>
      <zhutu v-if="xian.length > 0" :xian="xian" style="width: 400px"></zhutu>
    </div>
    <div class="santu">
      <dindan :dan="dan"></dindan>
      <tdlist :todolist="todolist"></tdlist>
      <jindutiao :jindu="jindu"></jindutiao>
    </div>
  </div>
</template>

<script>
import homenumber from "../components/home/homenumber";
import xiantu from "../components/home/xiantu";
import sange from "../components/home/sange";
import lin from "../components/home/leida";
import zhutu from "../components/home/zhutu";
import dindan from "../components/home/dindan";
import tdlist from "../components/home/todolist";
import jindutiao from "../components/home/jindu";
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {
    homenumber,
    xiantu,
    sange,
    lin,
    zhutu,
    dindan,
    tdlist,
    jindutiao,
  },
  data() {
    return {
      num: {},
      xian: [],
      san: [],
      lin: [],
      dan: [],
      todolist: [],
      jindu: [],
    };
  },

  methods: {
    doto() {
      axios.get("/api/homeData").then((res) => {
        // console.log(res.data);
        this.num = res.data.data;
      });
    },
    charData() {
      axios
        .get("/api/homeChat")
        .then((res) => {
          //   console.log(res.data);
          this.xian = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    togo() {
      axios
        .get("/api/radarChat")
        .then((res) => {
          //   console.log(res.data);
          this.san = res.data.data;
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
    link() {
      axios
        .get("/api/ringChat ")
        .then((res) => {
          //   console.log(res.data);
          this.lin = res.data.data;
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
    dande() {
      axios
        .get("/api/orderData")
        .then((res) => {
          this.dan = res.data.data;
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
    list() {
      axios
        .get("/api/todoList")
        .then((res) => {
          this.todolist = res.data.data;
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
    jindutu() {
      axios
        .get("/api/progress")
        .then((res) => {
          this.jindu = res.data.data;
          console.log(res.data.data);
        })
        .catch((err) => {
          //   console.log(err);
        });
    },
  },
  mounted() {
    this.doto();
    this.charData();
    this.togo();
    this.link();
    this.dande();
    this.list();
    this.jindutu();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
* {
  padding: 0;
  margin: 0;
}
.santu {
  display: flex;
}
</style>