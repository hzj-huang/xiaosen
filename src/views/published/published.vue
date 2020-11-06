<template>
  <div>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>

      <el-table-column prop="title" label="标题" width="350"> </el-table-column>
      <el-table-column prop="author" label="作者" width="100">
      </el-table-column>
      <el-table-column prop="category" label="类目" width="100">
      </el-table-column>
      <el-table-column prop="source" label="来源" width="100">
      </el-table-column>
      <el-table-column prop="star" label="重要性" width="180">
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="180">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger" @click="del(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button type="success">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      value: 3,
    };
  },
  methods: {
    getdata() {
      axios
        .get("/api/article/allArticle")
        .then((res) => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(index, row) {
      //   console.log(index);
      //   console.log(row);
      axios
        .post("/api/article/delete", {
          _id: row._id,
        })
        .then((res) => {
          console.log(res.data.data);
          this.tableData.splice(index, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
    this.del();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>