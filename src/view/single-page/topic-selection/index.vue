<template>
  <div style="height:100%">
    <div
      class="TopicSelection">
      <Row
        :gutter="16"
        style="display: flex;
    flex-flow: row wrap;">
        <Col
          v-for="item in list"
          :key="item.id"
          class="mb-3"
          span="8">
        <!-- width:27vw; -->
        <Card
          :class="{active:item.id==active}"
          class="avoid"
          style="
        box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 6%);
    height: 100%;"
          @click.native="()=>{active = item.id;activeName = item.name}">
          <div style="text-align:center">
            <i-notebook-one :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" theme="multi-color" size="88" class="icon"/>
            <h3>{{ item.name }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </Card>
        </Col>
      </Row>
      <div
        style="
    display: flex;
    justify-content: center;margin-top:20px">
        <Button type="primary" shape="circle" style="width:200px;height:44px" @click="routerLink">确认选题</Button>
      </div>
    </div>
  </div>
</template>

<script>
import multipleChoice from '@/components/multipleChoice'
import taskCenter from '@/view/single-page/task-center'
import { getTestList } from '@/api/practice'
export default {
  name: 'TopicSelection',
  components: {
    multipleChoice,
    taskCenter
  },
  data() {
    return {
      list: [
        { name: '政治新闻', id: 1, content: '是指包括新闻工作者在内的政治传播者通过一定的媒介就新近发生的政治事实向公众进行报道和评述的活动。' },
        { name: '财经新闻', id: 2, content: '是指覆盖全部社会经济生活和与经济有关的领域，包括从生产到消费、从城市到农村、从宏观到微观、从安全生产到服务质量，从经济工作到政治、社会生活中的相关领域。' },
        { name: '民生新闻', id: 3, content: '是指从群众日常生活中采制而来的新闻，内容上锁定群众的生存状况、生存空间，关注群众的冷暖痛痒、喜怒哀乐，提高新闻的时效性和互动性，拉近电视与观众的距离。' },
        { name: '文旅新闻', id: 4, content: '不仅是对文化和旅游领域新近发生和发现的事实的报道，也包括涉及文化旅游活动的相关行业的报道。' },
        { name: '科技新闻', id: 5, content: '是指科学技术领域新近发生的事实的报道。所谓科技事实可以是科技成果及其推广应用，可以是党和国家的科技政策，也可以是科技工作者的成就、科技界的活动。' },
        { name: '教育新闻', id: 6, content: '有关教育事业及学校生活的新闻报道。报道内容包括教育方针、新制定的教育法规、政府与人民群众尊师重教的活动、学校生活、教学经验、模范教师和优秀学生的事迹等。' }

      ],

      multipleList: [],
      active: '',
      activeName: ''
    }
  },
  mounted() {
    //
    this.testList()
  },
  methods: {
    testList() {
      getTestList().then(res => {
        this.multipleList = res.data.rows
      })
    },
    routerLink() {
      this.$router.push({ name: 'taskCenter', query: { activeName: this.activeName }})
    }
  }
}
</script>

<style lang="less" scoped>
.TopicSelection{
  >div{
  }
  .icon{
    margin: 20px 0;
  }
  h3{
    margin: 30px 0 20px 0;
  }
  .avoid{
    page-break-inside: avoid;
    margin-bottom: 32px;
  }
  .active{
    background: rgba(84,160,255,0.07);
    border-radius: 8px;
    border: 1px solid #54a0ff;
  }
}

</style>
