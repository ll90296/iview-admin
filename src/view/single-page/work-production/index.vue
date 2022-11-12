<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4">
      <Form :label-width="100">
        <FormItem label="标题" class="text-lg">
          <Input v-model="form.title" placeholder="内容不能为空"></Input>
        </FormItem>
        <FormItem label="正文" class="text-lg">
          <div v-if="form.oneEx" @click="openDialog(1)">
            <div style="padding: 20px 0">
              <img
                v-if="form.oneEx.type == 1"
                :src="$imgUrl(form.oneEx.url)"
                style="width: 190px"
                alt=""
              >
              <video
                v-else-if="form.oneEx.type == 2"
                :src="$imgUrl(form.oneEx.url)"
                style="width: 190px"
              />
              <div v-else-if="form.oneEx.type == 3">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <span style="vertical-align: text-top">{{
                  form.oneEx.fileName
                }}</span>
              </div>
              <Card v-else-if="form.oneEx.type == 4" class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ form.oneEx.url }}
                </div>
              </Card>
            </div>
          </div>
          <div v-else class="upload" @click="openDialog(1)">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color: #ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input
            :rows="6"
            v-model="form.oneText"
            class="mt-6"
            type="textarea"
            placeholder="再次输入文本"
          ></Input>
          <div v-if="form.twoEx" @click="openDialog(2)">
            <div style="padding: 20px 0">
              <img
                v-if="form.twoEx.type == 1"
                :src="$imgUrl(form.twoEx.url)"
                style="width: 190px"
                alt=""
              >
              <video
                v-else-if="form.twoEx.type == 2"
                :src="$imgUrl(form.twoEx.url)"
                style="width: 190px"
              />
              <div v-else-if="form.twoEx.type == 3">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <span style="vertical-align: text-top">{{
                  form.twoEx.fileName
                }}</span>
              </div>
              <Card v-else-if="form.twoEx.type == 4" class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ form.twoEx.url }}
                </div>
              </Card>
            </div>
          </div>
          <div v-else class="upload" @click="openDialog(2)">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color: #ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input
            :rows="6"
            v-model="form.twoText"
            class="mt-6"
            type="textarea"
            placeholder="再次输入文本"
          ></Input>
          <div v-if="form.threeEx" @click="openDialog(3)">
            <div style="padding: 20px 0">
              <img
                v-if="form.threeEx.type == 1"
                :src="$imgUrl(form.threeEx.url)"
                style="width: 190px"
                alt=""
              >
              <video
                v-else-if="form.threeEx.type == 2"
                :src="$imgUrl(form.threeEx.url)"
                style="width: 190px"
              />
              <div v-else-if="form.threeEx.type == 3">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <span style="vertical-align: text-top">{{
                  form.threeEx.fileName
                }}</span>
              </div>
              <Card v-else-if="form.threeEx.type == 4" class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ form.threeEx.url }}
                </div>
              </Card>
            </div>
          </div>
          <div v-else class="upload" @click="openDialog(3)">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color: #ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input
            :rows="6"
            v-model="form.threeText"
            class="mt-6"
            type="textarea"
            placeholder="再次输入文本"
          ></Input>
          <div v-if="form.fourEx" @click="openDialog(4)">
            <div style="padding: 20px 0">
              <img
                v-if="form.fourEx.type == 1"
                :src="$imgUrl(form.fourEx.url)"
                style="width: 190px"
                alt=""
              >
              <video
                v-else-if="form.fourEx.type == 2"
                :src="$imgUrl(form.fourEx.url)"
                style="width: 190px"
              />
              <div v-else-if="form.fourEx.type == 3">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <span style="vertical-align: text-top">{{
                  form.fourEx.fileName
                }}</span>
              </div>
              <Card v-else-if="form.fourEx.type == 4" class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ form.fourEx.url }}
                </div>
              </Card>
            </div>
          </div>
          <div v-else class="upload" @click="openDialog(4)">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color: #ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input
            :rows="6"
            v-model="form.fourText"
            class="mt-6"
            type="textarea"
            placeholder="再次输入文本"
          ></Input>
        </FormItem>
        <FormItem label="封面" class="text-lg">
          <div v-if="form.cover" @click="openDialog(5, true)">
            <div style="padding: 20px 0">
              <img
                v-if="form.cover.type == 1"
                :src="$imgUrl(form.cover.url)"
                style="width: 190px"
                alt=""
              >
              <video
                v-else-if="form.cover.type == 2"
                :src="$imgUrl(form.cover.url)"
                style="width: 190px"
              />
              <div v-else-if="form.cover.type == 3">
                <Button
                  class="i-btn"
                ><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""
                ></Button>
                <span style="vertical-align: text-top">{{
                  form.cover.fileName
                }}</span>
              </div>
              <Card v-else-if="form.cover.type == 4" class="card-bg">
                <div style="height: 200px; overflow-y: auto">
                  {{ form.cover.url }}
                </div>
              </Card>
            </div>
          </div>
          <div v-else class="upload" @click="openDialog(5, true)">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color: #ccc" />
              <p>插入素材</p>
            </div>
          </div>
        </FormItem>
        <FormItem label="分发平台" class="text-lg">
          <CheckboxGroup v-model="distribute">
            <Checkbox label="APP" />
            <Checkbox label="H5" />
            <Checkbox label="微信公众号" />
            <Checkbox label="微博" />
          </CheckboxGroup>
        </FormItem>
      </Form>
      <div class="flex justify-center items-center">
        <Button shape="circle">返回选择素材</Button>
        <Button
          type="primary"
          class="ml-4"
          shape="circle"
          @click="submit"
        >提交审核</Button
        >
      </div>
    </Card>
    <Dialog
      ref="addData"
      :oneEx="oneEx"
      :twoEx="twoEx"
      :onlyImg="onlyImg"
      @change="change"
    />
  </div>
</template>

<script>
import Dialog from './dialog.vue'
import { subjectTestSubmit } from '@/api/work-production'
export default {
  name: 'WorkReview',
  components: {
    Dialog
  },
  data() {
    return {
      form: {
        oneEx: null,
        twoEx: null,
        threeEx: null,
        fourEx: null,
        cover: null
      },
      fileType: '',
      distribute: [],
      onlyImg: false
    }
  },
  computed: {
    oneEx() {
      return this.$store.state.app.globalData.oneEx
    },
    twoEx() {
      return this.$store.state.app.globalData.twoEx
    }
  },
  mounted() {
    console.log(
      this.$store.state.app.globalData,
      'this.$store.state.globalData'
    )
    //
  },
  methods: {
    openDialog(type, onlyImg) {
      this.onlyImg = onlyImg
      this.fileType = type
      this.$refs.addData.open()
    },
    change(data) {
      console.log(data, 'data')
      switch (this.fileType) {
        case 1:
          this.form.oneEx = data
          break
        case 2:
          this.form.twoEx = data
          break
        case 3:
          this.form.threeEx = data
          break
        case 4:
          this.form.fourEx = data
          break
        case 5:
          this.form.cover = data
          break
        default:
          break
      }
      console.log(this.form.oneEx, 'this.form.oneEx')
    },
    submit() {
      try {
        const form = {
          status: 0,
          distribute: this.distribute.join(','),
          userName: this.$store.state.user.userName,
          releaseTime: new Date().Format('yyyy-MM-dd hh:mm:ss'),
          ...this.form,
          ...this.$store.state.app.globalData
        }
        form.oneEx = form.oneEx.id
        form.twoEx = form.twoEx.id
        form.threeEx = form.threeEx.id
        form.fourEx = form.fourEx.id
        form.cover = form.cover.id

        subjectTestSubmit(form).then(res => {
          this.$store.commit('setPersonalInfo', {})
          sessionStorage.removeItem('personalInfo')
          this.$router.push({ name: 'WorkReview' })
        })
      } catch (error) {
        this.$Message.error('请补全作品！')
      }
    }
  }
}
</script>

<style>
.upload {
  width: 200px;
  background: #fbfbfd;
  border: 3px dashed #dcdee2;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-transition: border-color 0.2s ease;
  transition: border-color 0.2s ease;
}
</style>
