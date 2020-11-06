import axios from 'axios';
<template>
  <div>
    <div class="box">
      <div class="box1" style="background: #7ccabf">
        <div>今日发布</div>
        <div>{{ datenum }}</div>
        <div class="tu"><i class="el-icon-check"></i></div>
      </div>
      <div class="box1" style="background: #e88a87">
        <div>原创文章</div>
        <div>{{ num }}</div>
        <div class="tu"><i class="el-icon-tickets"></i></div>
      </div>
      <div class="box1" style="background: #8375a3">
        <div>新留言</div>
        <div>0</div>
        <div class="tu"><i class="el-icon-sunset"></i></div>
      </div>
      <div class="box1" style="background: #9fcec1">
        <div>新消息</div>
        <div>0</div>
        <div class="tu"><i class="el-icon-phone-outline"></i></div>
      </div>
    </div>
    <template>
      <div class="box3 df">
        <div style="flax: 1">
          <ve-pie
            :data="chartData"
            :settings="chartSettings"
            style="width: 600px"
          ></ve-pie>
        </div>
        <div>
          <ve-pie
            :data="chartData2"
            :settings="chartSettings2"
            style="width: 600px"
          ></ve-pie>
        </div>
      </div>
    </template>
    <template>
      <ve-waterfall
        :data="chartData3"
        :settings="chartSettings3"
      ></ve-waterfall>
    </template>
  </div>
</template>
  </div>
</template>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import groupBy from "lodash/groupBy";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
      dimension: "日期",
      metrics: "访问用户",
    };
    this.chartSettings2 = {
      roseType: "radius",
    };
    this.chartSettings3 = {
      dimension: "时间",
      metrics: "数量",
    };
    return {
      text: [],

      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "java", 访问用户: 1393 },
          { 日期: "React", 访问用户: 3530 },
          { 日期: "html", 访问用户: 2923 },
          { 日期: "css", 访问用户: 1723 },
          { 日期: "javaScripe", 访问用户: 3792 },
          { 日期: "工具类", 访问用户: 4593 },
        ],
      },
      chartData2: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "原创", 访问用户: 1393 },
          { 日期: "与他人合作", 访问用户: 3530 },
          { 日期: "转载", 访问用户: 2923 },
        ],
      },
      chartData3: {
        columns: ["时间", "数量"],
        rows: [
          { 时间: "2019年3月4日", 数量: 2 },
          { 时间: "2019年3月7日", 数量: 3 },
          { 时间: "2019年3月23日", 数量: 4 },
          { 时间: "2019年3月27日", 数量: 2 },
          { 时间: "2019年4月4日", 数量: 7 },
          { 时间: "2019年5月7日", 数量: 3 },
          { 时间: "2019年5月9日", 数量: 5 },
        ],
      },
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then((res) => {
        if (res.data.code === 200) {
          this.text = res.data.data;
          let obj = groupBy(res.data.data, "category");
          for (let i in obj) {
            this.chartData.rows.push({
              数量: obj[i].length,
              类目: i,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("/api/article/allArticle").then((res) => {
      let obj1 = groupBy(res.data.data, "source");
      for (let i in obj1) {
        this.chartData1.rows.push({
          数量: obj1[i].length,
          来源: i,
        });
      }
    });
    axios.get("/api/article/allArticle").then((res) => {
      res.data.data.map((item) => {
        let t = new Date(item.date);
        // console.log("pp", item.date, `${t.getFullYear()}年${t.getMonth()}月${t.getDate()}日`)
        item.date = dayjs(item.date).format("YYYY-MM-DD");
      });
      let obj2 = groupBy(res.data.data, "date");
      console.log(obj2);
      for (let i in obj2) {
        this.chartData2.rows.push({
          数量: obj2[i].length,
          发布时间: i,
        });
      }
    });
  },
  watch: {},
  computed: {
    num() {
      let num1 = 0;
      this.text.map((item) => {
        if (item.source === "原创") {
          num1++;
        }
      });
      return num1;
    },
    datenum() {
      let num2 = 0;
      this.text.map((item) => {
        if (
          dayjs(item.date).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
        ) {
          num2++;
        }
      });
      console.log(dayjs().format("YYYY-MM-DD"));
      return num2;
    },
  },
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  height: 80px;
}
.box1 {
  width: 25%;
  color: white;
  text-align: center;
  line-height: 80px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.box1 > div {
  height: 40%;
}
.tu {
  position: relative;
  top: -50px;
  left: 300px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.tu > i {
  width: 100%;
  height: 100%;
  font-size: 25px;
  color: white;
}
</style>
