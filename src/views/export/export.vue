import axios from 'axios';
<template>
  <div>
    <div>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入你想要搜索的名称"
        @select="handleSelect"
        style="width: 35%"
      ></el-autocomplete>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="250"> </el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="250">
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="220">
      </el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" width="450">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="tableData">
          <el-button size="mini" type="primary" @click="handleEdit()"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(tableData.$index)"
            >删除</el-button
          >
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
      restaurants: [],
      state: "",
      timeout: null,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    loadAll() {
      return { tableData: [] };
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    axios
      .get("/api/tableData")
      .then((res) => {
        console.log(res.data.data);
        this.tableData = res.data.data;
        // this.tableData.SUB_ID = this.tableData;
        // this.tableData.SHOP_ID = this.tableData;
        // this.tableData.GOODS_SERIAL_NUMBER = this.tableData;
        // this.tableData.ID = this.tableData;
      })
      .catch((err) => {
        console.log(err);
      });
    this.restaurants = this.loadAll();
  },
  watch: {},
  computed: {},
};
</script>