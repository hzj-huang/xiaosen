<template>
  <div>
    <div class="all">
      <div><ve-pie :data="chartData"></ve-pie></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    lin: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: [],
      },
    };
  },
  methods: {},
  mounted() {
    this.chartData.columns = Object.keys(this.lin[0]);
    this.chartData.rows = this.lin;
    console.log(this.chartData);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>