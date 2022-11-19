<template>
  <div class="download-report">
    <Card class="p-4">
      <div class="flex justify-center mb-4">
        <Button size="large" type="primary" shape="circle" @click="getPdf(htmlTitle=123123)">下载实验报告</Button>
      </div>
      <!-- <pdf
        ref="pdf"
        :src="url"/> -->
      <div id="pdfDom1" style="height:841.89px;">
        <h2 class="font-bold text-4xl text-center mt-20">财经新闻全媒体制作流程虚拟仿真</h2>
        <h2 class="font-bold text-4xl text-center mt-10">实验报告</h2>
        <div class="text-center font-semibold text-3xl mt-96 mb-96">姓名：{{ detail.userName }}</div>
      </div>
      <div id="pdfDom2" style="width: 190mm;margin: 0 auto;box-sizing:border-box;padding:5px 10px;">
        <div class="tableBox">
          <div class="row2">
            <div>
              <span class="title">课程名称</span>
              <span>财经新闻全媒体制作流程<br>
                虚拟仿真实验</span>
            </div>
            <div>
              <span class="title">实验类型</span>
              <span>仿真实验<br>
                &nbsp;</span>
            </div>
            <div>
              <span class="title">姓名</span>
              <span>{{ detail.userName }}</span>
            </div>
            <div>
              <span class="title">实验时间</span>
              <span>{{ detail.releaseTime }}</span>
            </div>

          </div>
          <div class="row5">
            <span class="much_total">实验目的</span> <span>{{ detail.aim }}</span>
          </div>
          <div class="row5">
            <span class="much_total">实验内容与步骤</span> <span>
              <ul>
                <li v-for="item in detail.testList" :key="item.topic">
                  <span>{{ item.topic }}</span>
                  <span>{{ item.answer }}</span>
                </li>
              </ul>
              <p>选题上报。选择{{ getChoseSubject(detail.choseSubject) }}，新闻价值选择正确，拟定新闻题目《悄然
              兴起的“儿童剧本杀”，是风口还是危机？》。</p>
              <p>资源准备。共选择 {{ detail.softwareCount }} 个操作工具:{{ detail.tools }}</p>
              <p>素材准备。共选用 {{ detail.matterCount }} 条正确素材。</p>
              <p>作品生产。分发平台包括 {{ detail.distribute }}。
              </p>
            </span>
          </div>
          <div class="row5">
            <span class="much_total">成绩判定</span> <span>{{ detail.grade }}分</span>
          </div>
          <div class="row5">
            <span class="much_total">教师评语</span> <span class="py-5 px-2">
              <p>选题价值：具备一定新闻价值，体现时代特征，主题重大，反映社会问题，激发用户的关注度。{{ detail.selectedScore }}（满分20分）</p>
              <p>专业性：对新闻主题采访到位、素材收集全面、完整，具有客观性和真实性。{{ detail.choiceScore }}（满分20分）</p>
              <p>思想性：关注社会热点并分析报道社会问题，文字洗练，现场感强，思想性强。{{ detail.cognitionScore }}（满分20分）</p>
              <p>融合性：运用多种媒介元素符号组合报道，具有较强的话题性和分享性。{{ detail.reflectScore }}（满分20分）</p>
              <p>创新性：立意、内容、技术、传播等方面均大胆探索、积极创新。{{ detail.novelty }}（满分20分）</p>
            </span>
          </div>
        </div>
      </div>
  </card></div>
    </Card>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import { getReport } from '@/api/downPdf'
export default {
  name: 'DownloadReport',
  components: {
    pdf
  },
  data() {
    return {
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      userInfo: {},
      detailInfo: {},
      detail: {
      }
    }
  },
  computed: {
  },
  mounted() {
    //
    this.reportApi(this.$route.query.id)
  },
  methods: {
    reportApi(id) {
      getReport({ id }).then(res => {
        this.detail = res.data
      })
    },
    getChoseSubject(type) {
      const arr = ['政治新闻',
        '财经新闻',
        '民生新闻',
        '文旅新闻',
        '科技新闻',
        '教育新闻']
      return arr[type - 1]
    }
  }
}
</script>
<style lang="less" scoped>
.download-report{
  font-family: Calibri;
}
.table_date {
  text-align: right;
}
.row2 {
  border-top: solid 1px #000;
  border-left: solid 1px #000;
  li,
  div {
    box-sizing: border-box;
    width: 50%;
    flex: auto;
    display: inline-flex;
    span {
      flex: 1;
      border-right: solid 1px #000;
      border-bottom: solid 1px #000;
      padding: 5px;
      padding-bottom: 10px;
    }
  }
}
.row5 {
  display: flex;
  border: solid 1px #000;
  border-top: none;
  margin-top: -1px;
  .much_total {
    width: 25%;
    border-right: solid 1px #000;
  }
  span{
    padding: 5px;
    padding-bottom: 10px;
  }
  span:nth-of-type(2) {
    flex: 1;
    word-break: break-all;
  }
}
</style>
