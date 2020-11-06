import axios from 'axios';
<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="文章摘要" prop="zhaiyao">
        <el-input v-model="ruleForm.zhaiyao"></el-input>
      </el-form-item>
      <div class="box">
        <div>
          <el-form-item label="作者" prop="desc">
            <el-input type="text" v-model="ruleForm.desc"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="类目" prop="leimu">
            <el-select v-model="ruleForm.leimu" placeholder="请选择类目">
              <el-option label="js" value="js"></el-option>
              <el-option label="html" value="html"></el-option>
              <el-option label="java" value="java"></el-option>
              <el-option label="css" value="css"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="来源" prop="laiyuan">
            <el-select v-model="ruleForm.laiyuan" placeholder="请选择来源">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="他人合作" value="他人合作"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="重要性" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择重要性">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
        </div>

        <div>
          <el-form-item label="发布时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 200px"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </div>
      </div>
      <div class="mavonEditor">
        <div>
          <mavon-editor v-model="text" />
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >发布</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      text: "",
      ruleForm: {
        name: "",
        zhaiyao: "",
        region: "",
        date1: "",

        desc: "",
        leimu: "",
        laiyuan: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        zhaiyao: [
          { required: true, message: "请输入文章摘要", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择重要性", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写作者名字", trigger: "blur" }],
        leimu: [{ required: true, message: "请选择类目", trigger: "change" }],
        laiyuan: [{ required: true, message: "请填写来源", trigger: "change" }],
      },
      markdownOption: {
        bold: true,
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //   alert("发布成功");
          axios
            .post("/api/article/create", {
              title: this.ruleForm.name,
              abstract: this.ruleForm.zhaiyao,
              author: this.ruleForm.desc,
              category: this.ruleForm.leimu,
              source: this.ruleForm.laiyuan,
              star: this.ruleForm.region,
              text: this.text,
              date: this.ruleForm.date1,
            })
            .then((res) => {
              console.log(res.data);
              this.$message.success(res.data.data);
              this.$router.push("/published");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: space-between;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>