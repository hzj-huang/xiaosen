<template>
  <div class="all">
    <div>
      <h2>支持拖拽</h2>
      <div class="box">Element Ui 自带上传组件</div>
    </div>
    <el-upload class="upload-demo" drag action="/api/upload" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <div>
      <h2>支持裁剪</h2>
      <div class="box">vue-image-Crop-Upload</div>
      <el-button type="primary" size="medium" @click="toggleShow"
        ><em>点击上传</em></el-button
      >
      <my-upload
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="200"
        :height="200"
        img-format="png"
        :size="size"
        langType="zh"
        :noRotate="false"
        field="file"
        url="/api/upload"
      ></my-upload>
      <img :src="imgDataUrl" />
    </div>
  </div>
</template>
<script>
import "babel-polyfill"; // es6 shim
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1,
    };
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.file;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.all {
  width: 100%;
  height: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
}
.box {
  width: 100%;
  height: 50px;
  background: #e7e7e6;
  text-align: left;
  line-height: 50px;
  margin: 10px 0;
}
</style>