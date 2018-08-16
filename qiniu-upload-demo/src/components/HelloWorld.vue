<template>
  <div class="content">
    <el-upload
      class="avatar-uploader"
      ref="upload"
      action="https://upload-z1.qiniup.com"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :data="postData">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      <div>{{bucketHost}}</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      postData: {
        token: "DhsDWIMUrCTF_R-ff01w9ESN7vvKyLle4hzwYLJf:LtSw3jRB0X_N6WSxyarjuRC8JHM=:eyJzY29wZSI6InFyY29kZXMiLCJkZWFkbGluZSI6MTUzNDQyNzg0MH0="
      },
      bucketHost: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.bucketHost = "http://pdjslih4r.bkt.clouddn.com/" + res.key;
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isTypeAccess =
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isTypeAccess) {
        this.$message.error("上传头像图片只能是 JPG/PEG/PNG 格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isTypeAccess && isLt5M;
    }
  }
};
</script>

<style scoped>
.content {
  height: 100vh;
  width: 100vw;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>