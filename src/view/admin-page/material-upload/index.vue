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
          :before-upload="beforeUpload"
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
          :before-upload="beforeUpload"
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
          :before-upload="beforeUpload"
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

    <!-- <Button type="error" class="my-3" @click="remove">删除</Button> -->
    <h3 class="my-3">图片素材库</h3>
    <ZCheckbox v-model="social1" :list="imgList" class="check" @remove="remove" />
    <h3 class="my-3">视频素材库</h3>
    <ZCheckbox
      v-model="social2"
      :show-play="true"
      :list="videoList"
      class="check"
      @remove="remove"
    />
    <h3>音频素材库</h3>
    <Row :gutter="16" type="flex" justify="start" class="code-row-bg m-20">
      <Col v-for="item in audioList" :key="item.id" span="2" @click.native="openFile(item)" @contextmenu.native.prevent.right="openMenu($event,item.id)">
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
        <Col v-for="item in articleList" :key="item.id" class="mb-5" span="12" @contextmenu.native.prevent.right="openMenu($event,item.id)">
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

    <ul
      v-show="rightMenuVisible"
      ref="rightMenu"
      :style="{ left: rightMenuLeft + 'px', top: rightMenuTop + 'px' }"
      class="contextmenu"
    >
      <Button type="error" @click="remove()">删除</Button>
    </ul>
  </div>
</template>

<script>
import ZCheckbox from '@/components/z-checkbox2'
import { queryFiles, uploadManuscripts, deleteFile } from '@/api/material.js'
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
      showFile: false,
      uploadLoading: null,
      uploadCount: 0,
      rightMenuTop: '',
      rightMenuLeft: '',
      rightMenuVisible: false,
      delId: ''
    }
  },
  computed: {
    fileUrl() {
      return this.$config.baseUrl.pro + '/files/uploadFile'
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
    document.addEventListener('click', (e) => {
      if (this.$refs.rightMenu && !this.$refs.rightMenu.contains(e.target)) { this.rightMenuVisible = false }
    })
  },
  methods: {
    async getQueryFiles() {
      const res = await queryFiles()
      this.fileList = res.data
    },
    success() {
      this.uploadCount--
      if (this.uploadCount === 0) {
        setTimeout(this.uploadLoading, 0)
        this.getQueryFiles()
      }
    },
    submit() {
      const uploadLoading = this.$Message.loading({
        content: '上传中...',
        duration: 0
      })
      uploadManuscripts({ url: this.text }).then(res => {
        this.text = ''
        setTimeout(uploadLoading, 0)
        this.getQueryFiles()
      })
    },
    openFile(item) {
      this.showUrlForm = item
      this.showFile = true
    },

    beforeUpload() {
      this.uploadCount++
      if (!this.uploadLoading) {
        this.uploadLoading = this.$Message.loading({
          content: '上传中...',
          duration: 0
        })
      }
    },
    openMenu(e, id) {
      var x = e.pageX
      var y = e.pageY
      this.rightMenuTop = y
      this.rightMenuLeft = x
      this.delId = id
      this.rightMenuVisible = true
    },
    remove(id) {
      this.rightMenuVisible = false
      this.$Modal.confirm({
        content: '确定要删除吗？',
        loading: true,
        onOk: () => {
          deleteFile({ id: id || this.delId }).then(res => {
            this.$Modal.remove()
            this.getQueryFiles()
          })
        }
      })
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
.contextmenu{
  position: absolute;
}
</style>
