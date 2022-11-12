<template>
  <div class="MaterialPrepare">
    <h1>
      在仿真实验项目中，我们已为你准备好了各种素材。实际生产中，需要亲手收集素材。
    </h1>
    <h1>
      请从下面的图片和视频素材库中挑选合适的素材，注意不要选择不符合新闻作品生产的劣质素材。
    </h1>
    <h3>图片素材库</h3>
    <ZCheckbox v-model="social1" :list="imgList" class="check" />
    <h3>视频素材库</h3>
    <ZCheckbox v-model="social2" :show-play="true" :list="videoList" class="check" />
    <h3>音频素材库</h3>
    <Row :gutter="16" type="flex" justify="start" class="code-row-bg m-20">
      <Col v-for="item in audioList" :key="item.id" span="2">
      <img
        class="rounded"
        src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
        alt=""
      >
      <p class="text-sm font-bold text-center" style="font-size:14px">image-demo.mp3</p></Col
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
    <div class="bottom-btn">
      <Button
        :disabled="btnDisabled"
        type="primary"
        shape="circle"
        style="width: 195px; height: 44px"
        @click="routerLink"
      >使用所选择素材</Button
      >
    </div>
  </div>
</template>

<script>
import ZCheckbox from '@/components/z-checkbox2'
import { queryFiles } from '@/api/material.js'
export default {
  name: 'MaterialPrepare',
  components: {
    ZCheckbox
  },
  data() {
    return {
      social1: [],
      social2: [],
      fileList: []
    }
  },
  computed: {
    imgList() {
      return this.fileList.filter(item => item.type === 1)
    },
    videoList() {
      return this.fileList.filter(item => item.type === 2)
    },
    audioList() {
      return this.fileList.filter(item => item.type === 3)
    },
    articleList() {
      return this.fileList.filter(item => item.type === 4)
    },
    btnDisabled() {
      return !this.social1.length && !this.social2.length
    }
  },
  mounted() {
    this.getQueryFiles()
  },
  methods: {
    routerLink() {
      this.$store.commit('setGlobalData', { oneEx: this.social1, twoEx: this.social2 })
      this.$router.push({ name: 'WorkProduction' })
    },
    async getQueryFiles() {
      const res = await queryFiles()
      this.fileList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.MaterialPrepare {
  padding: 36px 85px;
  background: #fff;
  border: 1px solid #eaedf3;
  border-radius: 8px;
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
  .check {
    padding-left: 40px;
    margin-bottom: 40px;
  }
  .bottom-btn {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    button:nth-of-type(2) {
      margin-left: 20px;
    }
  }
}
</style>
