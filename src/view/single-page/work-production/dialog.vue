<template>
  <div class="dialog">
    <Modal
      v-model="addData"
      width="800"
      style="width: 800px !important"
      title="选择素材"
      class-name="vertical-center-modal"
      @on-ok="ok"
    >
      <Tabs v-model="tabValue">
        <TabPane label="图片素材" name="name1">
          <div
            style="
              height: 500px !important;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            <Row :gutter="16">
              <Col v-for="item in imgList" :key="item.id" span="6">
              <div class="m-2" @click="setId(item)">
                <Button
                  class="i-btn"
                ><img
                  :src="$imgUrl(item.url)"
                  class="rounded"
                  alt=""
                ></Button>
                <p class="text-sm font-bold text-center">
                  {{ item.fileName }}
                </p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane v-if="!onlyImg" label="视频素材" name="name2">
          <div
            style="
              height: 500px !important;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            <Row :gutter="16">
              <Col v-for="item in videoList" :key="item.id" span="6">
              <div class="m-2" @click="setId(item)">
                <Button
                  class="i-btn relative"
                ><video :src="$imgUrl(item.url)" class="rounded" alt="" />
                  <Icon
                    size="30"
                    color="#fff"
                    class="absolute z-10 inset-0 m-auto top-8"
                    type="md-play"
                /></Button>
                <p class="text-sm font-bold text-center">
                  {{ item.fileName }}
                </p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane v-if="!onlyImg" label="音频素材" name="name3">
          <div
            style="
              height: 500px !important;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            <Row :gutter="16">
              <Col v-for="item in audioList" :key="item.id" span="4">
              <div class="m-2" @click="setId(item)">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <p class="text-sm font-bold text-center">
                  {{ item.fileName }}
                </p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane v-if="!onlyImg" label="文稿素材" name="name4">
          <div style="height: 500px !important; overflow-y: auto">
            <Button
              v-for="item in articleList"
              :key="item.id"
              class="i-btn i-btn-text py-2 px-4 w-full"
              @click="setId(item)"
            >
              <Card class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ item.url }}
                </div>
              </Card>
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </Modal>
  </div>
</template>

<script>
import { queryFiles } from '@/api/material.js'
export default {
  name: 'Dialog',
  components: {},
  props: {
    oneEx: {
      type: Array,
      default: () => {
        return []
      }
    },
    twoEx: {
      type: Array,
      default: () => {
        return []
      }
    },
    onlyImg: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      addData: false,
      fileList: [],
      data: {},
      tabValue: 'name1'
    }
  },
  computed: {
    imgList() {
      return this.oneEx.length && !this.onlyImg
        ? this.oneEx
        : this.fileList.filter((item) => item.type === 1)
    },
    videoList() {
      return this.twoEx.length
        ? this.twoEx
        : this.fileList.filter((item) => item.type === 2)
    },
    audioList() {
      return this.fileList.filter(item => item.type === 3)
    },
    articleList() {
      return this.fileList.filter((item) => item.type === 4)
    }
  },
  watch: {
    onlyImg: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.tabValue = 'name1'
        }
      }
    }
  },
  mounted() {
    this.getQueryFiles()
  },
  methods: {
    open() {
      this.addData = true
    },
    async getQueryFiles() {
      const res = await queryFiles()
      this.fileList = res.data
    },
    setId(data) {
      this.data = data
    },
    ok() {
      this.$emit('change', this.data)
    }
  }
}
</script>

<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}

.i-btn {
  padding: 2px;
  border: 2px solid transparent;
}
.i-btn-text {
  white-space: inherit;
  text-align: left;
}

.i-btn:focus {
  border: 2px solid #2b85e4;
  box-shadow: none;
}
.card-bg {
  background: #fcfcfc;
}
</style>
