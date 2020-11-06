 <template>
  <div>
    <el-table :data="dan" style="width: 560px">
      <el-table-column prop="num" label="Order_No" width="220">
      </el-table-column>
      <el-table-column prop="price" label="Price" width="180">
      </el-table-column>
      <el-table-column prop="status" label="Status">
        <template slot-scope="scope">
          <div v-if="scope.row.status === 0">
            <el-button type="primary">pending</el-button>
          </div>

          <div v-if="scope.row.status === 1">
            <el-button type="danger">success</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    dan: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>