<template>
  <div class="all">
    <div>
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt=""
      />
    </div>
    <div>
      <div v-for="(item, index) in jindu" :key="index">
        <div v-if="item.progress * 100 === 100">
          <el-progress
            :percentage="item.progress * 100"
            status="success"
          ></el-progress>
        </div>
        <div v-else>
          <el-progress :percentage="item.progress * 100"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    jindu: {
      type: Array,
    },
    progress: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {
      tableData: [],
    };
  },
  methods: {},
  mounted() {
    this.tableData = this.jindu;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.all {
  width: 400px;
}
</style>