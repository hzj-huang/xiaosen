<template>
  <div class="box">
    <div>
      <el-card class="boxtan" style="height: 656px">
        <div class="df jc_b">
          <div v-if="Select === false">
            <i class="el-icon-caret-bottom" @click="down"></i>
          </div>
          <div v-if="Select === true">
            <i class="el-icon-caret-top" @click="up"></i>
          </div>
          <div>Todo List</div>
        </div>
        <div
          v-for="(item, index) in arr"
          :key="index"
          class="df jc_b"
          style="margin-bottom: 36px"
        >
          <div class="df">
            <div style="margin-right: 10px">
              <el-checkbox v-model="item.checked" @change="solo"></el-checkbox>
            </div>
            <div>{{ item.name }}</div>
          </div>
          <div v-if="item.checked">
            <i class="el-icon-close" @click="close(item, index)"></i>
          </div>
        </div>
        <div class="df jc_b">
          <div>{{ arr.length }} items left</div>
          <div>
            <button style="margin-right: 10px; padding: 0 10px" @click="all">
              All
            </button>
            <button style="margin-right: 10px; padding: 0 10px" @click="active">
              Active
            </button>
            <button style="padding: 0 10px" @click="completed">
              Completed
            </button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    todolist: {
      type: Array,
    },
  },
  data() {
    return {
      Select: false,
      arr: [],
      tableData: [],
    };
  },
  components: {},
  methods: {
    //点击全选
    down() {
      this.todolist.map((item) => {
        item.checked = true;
      });
      this.Select = true;
    },
    //点击全部选
    up() {
      this.todolist.map((item) => {
        item.checked = false;
      });
      this.Select = false;
    },
    //复选框
    solo() {
      this.Select = this.arr.every((item) => {
        return item.checked;
      });
    },
    //删除
    close(item, index) {
      if (item.checked === true) {
        this.arr.splice(index, 1);
      }
    },
    all() {
      this.arr = this.todolist;
    },
    //显示未勾选
    active() {
      this.arr = this.todolist.filter((item) => {
        return !item.checked;
      });
    },
    //显示已勾选
    completed() {
      this.arr = this.todolist.filter((item) => {
        return item.checked;
      });
    },
  },
  mounted() {
    this.arr = this.todolist;
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 600px;
}
</style>
