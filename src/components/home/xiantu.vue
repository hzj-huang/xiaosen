<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
export default {
  name: "",
  props: {
    xian: {
      type: Array,
    },
  },
  components: {},
  data() {
    this.chartSettings = {};
    return {
      chartData: {
        columns: [],
        rows: [],
      },
    };
  },
  methods: {},
  mounted() {
    this.chartData.columns = Object.keys(this.xian[0]);
    this.chartData.rows = this.xian;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>