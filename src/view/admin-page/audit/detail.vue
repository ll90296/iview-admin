<template>
  <div class="work-detail container flex">
    <Card class="pb-10" style="flex:1">
      <div class="p-2 pb-4" style="border-bottom:1px solid #f0f3f8">
        <h4 class="font-semibold text-base">审核意见</h4>
      </div>
      <div class="detail-wapper mt-4">
        <Row class="px-4">
          <Col span="2">
          <p class="font-normal text-lg">标题</p>
          </Col>
          <Col span="22">
          <p class="font-normal text-lg">{{ detail.title }}</p>
          </Col>
        </Row>
        <Row class="mt-6 px-4">
          <Col span="2">
          <p class="font-normal text-lg">正文</p>
          </Col>
          <Col span="22">
          <div>
            <img
              v-if="detail.onetype == 1"
              :src="$imgUrl(detail.oneEx)"
              class="rounded-lg"
              alt=""
            >

            <div
              v-else-if="detail.onetype == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="$imgUrl(detail.oneEx)"
                controls="controls" />
            </div>
            <div v-else-if="detail.onetype == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="$imgUrl(detail.oneEx)"
                controls="controls" />
            </div>
            <p v-else-if="detail.onetype == 4" class="font-normal text-lg mt-4">{{ detail.oneEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.oneText }}</p>
          <div>
            <img
              v-if="detail.twotype == 1"
              :src="$imgUrl(detail.twoEx)"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.twotype == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="$imgUrl(detail.twoEx)"
                controls="controls" />
            </div>
            <div v-else-if="detail.twotype == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="$imgUrl(detail.twoEx)"
                controls="controls" />
            </div>
            <p v-else-if="detail.twotype == 4" class="font-normal text-lg mt-4">{{ detail.twoEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.twoText }}</p>
          <div>
            <img
              v-if="detail.threetype == 1"
              :src="$imgUrl(detail.threeEx)"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.threetype == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="$imgUrl(detail.threeEx)"
                controls="controls" />
            </div>
            <div v-else-if="detail.threetype == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="$imgUrl(detail.threeEx)"
                controls="controls" />
            </div>
            <p v-else-if="detail.threetype == 4" class="font-normal text-lg mt-4">{{ detail.threeEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.threeText }}</p>
          <div>
            <img
              v-if="detail.fourtype == 1"
              :src="$imgUrl(detail.fourEx)"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.fourtype == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="$imgUrl(detail.fourEx)"
                controls="controls" />
            </div>
            <div v-else-if="detail.fourtype == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="$imgUrl(detail.fourEx)"
                controls="controls" />
            </div>
            <p v-else-if="detail.fourtype == 4" class="font-normal text-lg mt-4">{{ detail.fourEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.fourText }}</p>
          </Col>
        </Row>
        <Row class="px-4 mt-6">
          <Col span="2">
          <p class="font-normal text-lg ">封面</p>
          </Col>
          <Col span="22">
          <div>
            <img :src="$imgUrl(detail.cover)" class="w-40 rounded" alt="">
          </div>
          </Col>
        </Row>
        <Row class="px-4 mt-6">
          <Col span="2">
          <p class="font-normal text-lg">分发平台</p>
          </Col>
          <Col span="22">
          <div class="flex items-center">
            <Tag v-for="item in detail.distribute" :key="item" color="primary">{{ item }}</Tag>
          </div>
          </Col>
        </Row>
        <Form v-if="!evaluation" :label-width="100" class="pt-3">
          <FormItem label="审核结果">
            <RadioGroup v-model="status">
              <Radio :label="1">通过</Radio>
              <Radio :label="2">驳回</Radio>
            </RadioGroup>
          </FormItem>
        </Form>
        <div v-if="!evaluation" style="text-align:center">
          <Button type="primary" @click="sumbit">提交</Button>
        </div>
      </div>
    </Card>
    <Card v-if="evaluation" class="ml-10" style="width:300px">
      <div class="p-2">
        <h4 class="font-semibold text-base pb-4 mb-4" style="border-bottom:1px solid #f0f3f8">实验评价</h4>
        <p><span class="font-semibold">选题：</span> 思想突出，反映社会和时代亮点，激发用户的关注度。</p>
        <RadioGroup
          v-model="form.selectedScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" />
          <Radio :label="15" />
          <Radio :label="10" />
          <Radio :label="5" />
          <Radio :label="0" />
        </RadioGroup>
        <p><span class="font-semibold">事实的选择：</span> 突出新闻价值，具有客观、具体、真实特点，以点带面，可以成为用户关注的焦点。</p>
        <RadioGroup
          v-model="form.choiceScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" />
          <Radio :label="15" />
          <Radio :label="10" />
          <Radio :label="5" />
          <Radio :label="0" />
        </RadioGroup>
        <p><span class="font-semibold">事实的认识与把握：</span>  新闻事实表现一定主题思想，视角独特。</p>
        <RadioGroup
          v-model="form.cognitionScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" />
          <Radio :label="15" />
          <Radio :label="10" />
          <Radio :label="5" />
          <Radio :label="0" />
        </RadioGroup>
        <p><span class="font-semibold">事实的反映与表现：</span>  结构合理，评述结合，运用多种媒介元素符号组合报道，具有较强的可分享性。</p>
        <RadioGroup
          v-model="form.reflectScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" />
          <Radio :label="15" />
          <Radio :label="10" />
          <Radio :label="5" />
          <Radio :label="0" />
        </RadioGroup>
        <div style="text-align:right">
          <span>合计：</span><span
            style="color: #333;
    font-size: 38px;
    font-weight: bold;">{{ totalScore }}</span><span>分</span>
        </div>
        <div v-if="evaluation" style="text-align:right">
          <Button type="primary" @click="sumbit('evaluation')">提交</Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { auditResult, updateAudit, gradeScore, querScore } from '@/api/work-review'
export default {
  name: 'AuditDetail',
  components: {
  },
  data() {
    return {
      detail: {},
      form: {
        worksId: '',
        totalScore: 0,
        selectedScore: '',
        cognitionScore: '',
        choiceScore: '',
        reflectScore: ''
      },
      Group: 20,
      content: '',
      status: ''
    }
  },
  computed: {
    evaluation() {
      return this.$route.query.type
    },
    totalScore() {
      return Number(this.form.selectedScore) + Number(this.form.cognitionScore) + Number(this.form.choiceScore) + Number(this.form.reflectScore)
    }
  },
  watch() {

  },
  mounted() {
    this.getDetail(this.$route.query.id)
    this.getQuerScore(this.$route.query.id)
  },
  methods: {
    getDetail(id) {
      auditResult({ id }).then(res => {
        res.data.distribute = res.data.distribute.split(',')
        this.detail = res.data
      })
    },
    getQuerScore(id) {
      querScore({ workesId: id }).then(res => {
        this.form = res.data.data
      })
    },
    sumbit(type) {
      if (type === 'evaluation') {
        this.form.totalScore = this.totalScore
        this.form.worksId = this.$route.query.id
        gradeScore(this.form).then(res => {
          this.$Message.success(res.data.msg)
          this.$router.back()
        })
      } else {
        if (!this.status) {
          return this.$Message.warning('请选择审核结果！')
        }
        updateAudit({ id: this.$route.query.id, status: this.status }).then(res => {
          this.$router.back()
        })
      }
    }
  }
}
</script>
