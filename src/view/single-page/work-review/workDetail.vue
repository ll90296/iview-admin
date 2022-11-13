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
              v-if="detail.oneType == 1"
              :src="detail.oneEx"
              class="rounded-lg"
              alt="">
            <div
              v-else-if="detail.oneType == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="detail.oneEx"
                controls="controls" />
            </div>
            <div v-else-if="detail.oneType == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="detail.oneEx"
                controls="controls" />
            </div>
            <p v-else-if="detail.oneType == 4" class="font-normal text-lg mt-4">{{ detail.oneEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.oneText }}</p>
          <div>
            <img
              v-if="detail.twoType == 1"
              :src="detail.twoEx"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.twoType == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="detail.twoEx"
                controls="controls" />
            </div>
            <div v-else-if="detail.twoType == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="detail.twoEx"
                controls="controls" />
            </div>
            <p v-else-if="detail.twoType == 4" class="font-normal text-lg mt-4">{{ detail.twoEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.twoText }}</p>
          <div>
            <img
              v-if="detail.threeType == 1"
              :src="detail.threeEx"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.threeType == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="detail.threeEx"
                controls="controls" />
            </div>
            <div v-else-if="detail.threeType == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="detail.threeEx"
                controls="controls" />
            </div>
            <p v-else-if="detail.threeType == 4" class="font-normal text-lg mt-4">{{ detail.threeEx }}</p>
          </div>
          <p class="font-normal text-lg mt-4">{{ detail.threeText }}</p>
          <div>
            <img
              v-if="detail.fourType == 1"
              :src="detail.fourEx"
              class="rounded-lg"
              alt=""
            >
            <div
              v-else-if="detail.fourType == 2"
              class="mt-6 flex justify-center items-center">
              <video
                :src="detail.fourEx"
                controls="controls" />
            </div>
            <div v-else-if="detail.fourType == 3" class="mt-2 flex justify-center items-center">
              <audio
                :src="detail.fourEx"
                controls="controls" />
            </div>
            <p v-else-if="detail.fourType == 4" class="font-normal text-lg mt-4">{{ detail.fourEx }}</p>
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
            <img :src="detail.cover" class="w-40 rounded" alt="">
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
      </div>
    </Card>
    <Card v-if="$route.query.showComments" class="ml-10" style="width:300px">
      <div class="p-2">
        <h4 class="font-semibold text-base pb-4 mb-4" style="border-bottom:1px solid #f0f3f8">实验评价</h4>
        <p><span class="font-semibold">选题：</span> 思想突出，反映社会和时代亮点，激发用户的关注度。</p>
        <RadioGroup
          v-model="workesDetail.selectedScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" disabled/>
          <Radio :label="15" disabled/>
          <Radio :label="10" disabled/>
          <Radio :label="5" disabled/>
          <Radio :label="0" disabled/>
        </RadioGroup>
        <p><span class="font-semibold">事实的选择：</span> 突出新闻价值，具有客观、具体、真实特点，以点带面，可以成为用户关注的焦点。</p>
        <RadioGroup
          v-model="workesDetail.choiceScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" disabled/>
          <Radio :label="15" disabled/>
          <Radio :label="10" disabled/>
          <Radio :label="5" disabled/>
          <Radio :label="0" disabled/>
        </RadioGroup>
        <p><span class="font-semibold">事实的认识与把握：</span>  新闻事实表现一定主题思想，视角独特。</p>
        <RadioGroup
          v-model="workesDetail.cognitionScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" disabled/>
          <Radio :label="15" disabled/>
          <Radio :label="10" disabled/>
          <Radio :label="5" disabled/>
          <Radio :label="0" disabled/>
        </RadioGroup>
        <p><span class="font-semibold">事实的反映与表现：</span>  结构合理，评述结合，运用多种媒介元素符号组合报道，具有较强的可分享性。</p>
        <RadioGroup
          v-model="workesDetail.reflectScore"
          class="py-5"
          style="    width: 100%;
    display: flex;
    justify-content: space-between;">
          <Radio :label="20" disabled/>
          <Radio :label="15" disabled/>
          <Radio :label="10" disabled/>
          <Radio :label="5" disabled/>
          <Radio :label="0" disabled/>
        </RadioGroup>
        <div style="text-align:right">
          <span>合计：</span><span
            style="color: #333;
    font-size: 38px;
    font-weight: bold;">{{ workesDetail.totalScore }}</span><span>分</span>
        </div>
      </div>
      <div class="p-2">
        <h4 class="font-semibold text-base pb-4 mb-4" style="border-bottom:1px solid #f0f3f8">作品评分</h4>
        <p>本作品得分：{{ workesDetail.totalScore }}分</p>
      </div>
      <i-input v-model="content" :rows="4" type="textarea" placeholder="请输入评论内容" /></i-input>
      <div style="text-align:right" class="pt-5">
        <Button type="primary" shape="circle" @click="submitCOmment">发表</Button>
      </div>
      <div class="p-2">
        <h4 class="font-semibold text-base pb-4 mb-4" style="border-bottom:1px solid #f0f3f8">互评动态</h4>
      </div>
      <div>
        <div v-for="item in commentList" :key="item.id">
          <div class="flex"><img class="mr-2 mb-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB9ElEQVQ4T5VVO44TQRSsZ48/0/7KzsbhBoh877GLECRcAyOOsGI5BiQrrZa9BzkQbGSZwJl/PfKM7UKvsY3dboN52czrrqnqqn4jCBTJUpqm1wCuAFwCSDbLfgL4CuAxjuMvIpL728V/Ya19QfIWwEXoY3vvnkSkb4x52F+3AyRZSNP0BsBbkkcfCoGLCAF8jOP4vYisdc1uo7X2A8n+P1gF2yJya4x5twNUmQDufWbL5RLWWuR5jkKhgEqlgjiOIXIoYMP0pcoXNcBa+80/s9VqhfF4DFJV/SkFrdfrIaZPxpjnYq19RfLOXzGbzbBYLIIS2+02isXiUU9EXivgJ5Jv/K6yU8mhajQaKJfLIcDPCvid5DO/O51OkWVZELDVaiGKohDgDwWckGz4XTViMpkcbSqVSmg2m6fcnp4E1B3KcD6fY712EXMya7Wac/xELh1gULK6q6YoqJ6lgig7dTkk12VQxEk+MkUB9Ay3zHw21WoVxphQHp0pB7E5lT8fNJRHFxs/2H+Liw+q5ugxbOp3sPVhe/XyPBcFPLfUJM3kwdXbbtbhkKZpX109t/ROdzodBTwcDgqg42s0Gt1kWfZf46vb7YbH15bVYDA4e8BGUdRPkiQ8YPdlqlHD4fBaRK5IXpJMVJ6IuF8Aycderxf8BfwCJiEZvmphP2QAAAAASUVORK5CYII=" alt=""><span class="font-semibold">{{ item.createBy }}</span></div>
          <p class="mb-3">{{ item.content }}</p>
          <p class="mb-6">{{ item.createTime }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { auditResult, querScore, workersScore, queryComment, createComment } from '@/api/work-review'
export default {
  name: 'WorkReview',
  components: {
  },
  data() {
    return {
      detail: {},
      workesDetail: {},
      workesTwoDetail: {},
      commentList: [],
      Group: 20,
      content: ''
    }
  },
  computed: {
    getWork() {
      const columns = [
        {
          title: '序号',
          slot: 'ID',
          minWidth: 10
        },
        {
          title: '稿件标题',
          slot: 'title',
          minWidth: 10
        },
        {
          title: '封面',
          slot: 'cover',
          minWidth: 15
        },
        {
          title: '作者',
          slot: 'author',
          minWidth: 10
        },
        {
          title: '发布时间',
          slot: 'date',
          minWidth: 15
        },
        {
          title: '操作',
          slot: 'operation',
          minWidth: 5
        }
      ]
      return columns
    }
  },
  mounted() {
    //
    console.log(this.$route.query, 'his.$route.query')
    this.getDetail(this.$route.query.id)
    this.getQuerScore(this.$route.query.id)
    this.getqueryComment(this.$route.query.id)
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
        this.workesDetail = res.data.data
        console.log(this.workesDetail, 'res')
        // this.getworkersScore(id, res.data.totalScore)
      })
    },
    getworkersScore(worksId, totalScore) {
      workersScore({ worksId, totalScore }).then(res => {
        console.log(res, 'res')
        this.workesTwoDetail = res.data
      })
    },
    getqueryComment(worksId) {
      queryComment(worksId).then(res => {
        console.log(res, 'res')
        this.commentList = res.data.rows
      })
    },
    submitCOmment() {
      createComment({
        'worksId': this.$route.query.id,
        'content': this.content
      }).then(res => {
        this.getqueryComment(this.$route.query.id)
      })
    }
  }
}
</script>
