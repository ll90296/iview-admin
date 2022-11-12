<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4" dis-hover>
      <Row :gutter="20">
        <Col span="8">
        <Upload
          :action="fileUrl"
          :data="{ type: 1 }"
          :headers="headers"
          :show-upload-list="false"
          :on-success="success"
          accept="image/*"
          multiple
          type="drag"
        >
          <div style="padding: 20px 0">
            <Icon type="md-add" size="52" style="color: #ccc" />
            <p>上传图片</p>
          </div>
        </Upload>
        </Col>
        <Col span="8">
        <Upload
          :action="fileUrl"
          :data="{ type: 2 }"
          :headers="headers"
          :show-upload-list="false"
          :on-success="success"
          accept="video/*"
          multiple
          type="drag"
        >
          <div style="padding: 20px 0">
            <Icon type="md-add" size="52" style="color: #ccc" />
            <p>上传视频</p>
          </div>
        </Upload>
        </Col>
        <Col span="8">
        <Upload
          :action="fileUrl"
          :data="{ type: 3 }"
          :headers="headers"
          :show-upload-list="false"
          :on-success="success"
          accept="audio/*"
          multiple
          type="drag"
        >
          <div style="padding: 20px 0">
            <Icon type="md-add" size="52" style="color: #ccc" />
            <p>上传音频</p>
          </div>
        </Upload>
        </Col>
        <Col span="24">
        <p class="mb-5 mt-10">文稿上传</p>
        <i-input
          v-model="text"
          :rows="4"
          type="textarea"
        />
        <div
          style="
    text-align: right;"
          class="mt-5">
          <Button :disabled="!text" type="success" @click="submit">确定</Button></Button>
        </div>
      </Col></Row>
    </Card>
    <h3>图片素材库</h3>
    <ZCheckbox v-model="social1" :list="imgList" class="check" />
    <h3>视频素材库</h3>
    <ZCheckbox
      v-model="social2"
      :show-play="true"
      :list="videoList"
      class="check"
    />
    <h3>音频素材库</h3>
    <Row :gutter="16" type="flex" justify="start" class="code-row-bg m-20">
      <Col v-for="item in audioList" :key="item.id" span="2" @click.native="openFile(item)">
      <img
        class="rounded"
        src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
        alt=""
      >
      <p class="text-sm font-bold text-center" style="font-size: 14px">
        {{ item.fileName }}
      </p></Col
      >
    </Row>
    <h3>文稿素材库</h3>
    <div>
      <Row :gutter="16" type="flex" justify="start" class="code-row-bg">
        <Col v-for="item in articleList" :key="item.id" span="12">
        <Card class="card-bg">
          <div style="height: 200px; overflow-y: auto">
            {{ item.url }}
          </div>
        </Card></Col
        >
      </Row>
    </div>
    <Modal
      :footer-hide="true"
      v-model="showFile"
      :title="showUrlForm.fileName">
      <div v-if="showFile">
        <audio :src="$imgUrl(showUrlForm.url)" style="width:100%" controls autoplay />
      </div>
    </Modal>
  </div>
</template>

<script>
import ZCheckbox from '@/components/z-checkbox2'
import { queryFiles, uploadManuscripts } from '@/api/material.js'
import { getToken } from '@/libs/util'
export default {
  name: 'MaterialUpload',
  components: {
    ZCheckbox
  },
  data() {
    return {
      social1: [],
      social2: [],
      fileList: [],
      text: '',
      showUrlForm: {},
      showFile: false
    }
  },
  computed: {
    fileUrl() {
      return this.$config.baseUrl.dev + '/files/uploadFile'
    },
    imgList() {
      return this.fileList.filter((item) => item.type === 1)
    },
    videoList() {
      return this.fileList.filter((item) => item.type === 2)
    },
    audioList() {
      return this.fileList.filter((item) => item.type === 3)
    },
    articleList() {
      return this.fileList.filter((item) => item.type === 4)
    },
    btnDisabled() {
      return !this.social1.length || !this.social2.length
    },
    headers() {
      return { Authorization: getToken() }
    }
  },
  mounted() {
    this.getQueryFiles()
  },
  methods: {
    async getQueryFiles() {
      const res = await queryFiles()
      this.fileList = res.data
    },
    success() {
      this.getQueryFiles()
    },
    submit() {
      uploadManuscripts({ url: this.text }).then(res => {
        this.getQueryFiles()
      })
    },
    openFile(item) {
      this.showUrlForm = item
      this.showFile = true
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  background: #fff;
  padding: 20px;
}
h3 {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}
h1 {
  color: #333;
  font-size: 20px;
  font-weight: 600;
  line-height: 33px;
}
h1:nth-of-type(2) {
  margin-bottom: 30px;
}
</style>
