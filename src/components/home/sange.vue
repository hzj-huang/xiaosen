<template>
  <div>
    <div class="all">
      <div><ve-radar :data="chartData"></ve-radar></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    san: {
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
    this.chartData.columns = Object.keys(this.san[0]);
    this.chartData.rows = this.san;
    console.log(this.chartData);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>