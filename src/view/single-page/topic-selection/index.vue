<template>
  <div style="height:100%">
    <div
      v-if="selectionActive == 0"
      class="TopicSelection">
      <div>
        <Card
          v-for="item in list"
          :key="item.name"
          :class="{active:item.name==active}"
          class="avoid"
          style="width:27vw;
        box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 6%);"
          @click.native="active = item.name">
          <div style="text-align:center">
            <i-notebook-one :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" theme="multi-color" size="88" class="icon"/>
            <h3>{{ item.name }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </Card>
      </div>
      <div
        style="
    display: flex;
    justify-content: center;margin-top:20px">
        <Button type="primary" shape="circle" style="width:200px;height:44px" @click="updateActive(1)">确认选题</Button>
      </div>
    </div>
    <multipleChoice v-if="selectionActive == 1" :list="multipleList" class="boxShadow" @complete="updateActive(2)" />
    <div v-if="selectionActive == 2" class="boxShadow">
      <Card class="hint-title" dis-hover>您选择了“经济类”新闻选题</Card>
      <h3
        style="margin-top: 62px;margin-bottom:20px;color: #333;
    font-size: 18px;
    font-weight: 600;">请为新闻选题拟定题目</h3>
      <Input v-model="form.input2" style="width:558px;margin-bottom:20px" placeholder="在此处填写题目"></Input>
      <div>
        <Button type="primary" shape="circle" style="width:140px;height:44px" @click="routerLink">下一步</Button>
      </div>
    </div>
  </div>
</template>

<script>
import multipleChoiceOptions from '@/components/multipleChoiceOptions'
import multipleChoice from '@/components/multipleChoice'
export default {
  name: 'TopicSelection',
  components: {
    multipleChoiceOptions,
    multipleChoice
  },
  data() {
    return {
      list: [
        { name: '政治类', content: '能反映基层党组织的工作动态、好经验、好做法，找亮点、挖特色、出经验，展现基层党组织基层党组织战斗堡垒作用；宣传共产党员典型先进事迹，弘扬正能量，彰显榜样力量；聚焦新疆儿女屯垦戍边、无私奉献，保家卫国、不怕牺牲，扎根天山、无怨无悔的大无畏革命精神及爱党、爱国、爱家乡的大义情怀。' },
        { name: '生态类', content: '深入一线，在环保中展现国企责任与使命，报道环保科技人员科学研究环境保护取得的成绩、成果；报道新疆各区县践行环保理念，展现环保意识，开展的绿色行动。' },
        { name: '经济类', content: '依托地理、资源、产业、政策等优势，报道新疆经济增长的新变化、新动力；展示新疆各市县“乡村振兴”战略的探索实践，展现“农业强、农村美、农民富”的动人图景；深度推进“旅游兴疆“战略，挖掘旅游的内涵与魅力，展现旅游新形象、新风采，营造出支持旅游、参与旅游、文明旅游的良好氛围。' },
        { name: '文化类', content: '以中华优秀传统文化、革命文化、社会主义先进文化为支撑，宣传报道新疆各地开展“文化润疆“的具体实践，铸牢中华民族共同体意识。' },
        { name: '社会类', content: '宣传报道各地各有关部门着力解决上学、就业、医保、养老等民生问题和人民群众普遍关心的突出问题，宣传党的惠民政策给百姓生活带来的巨大变化，展示人民群众的获得感、幸福感；挖掘身边民族团结人和事，凸显各族人民情同手足、勠力同心、并肩携手的社会氛围。' }
      ],

      multipleList: [[
        { id: 1, name: '新疆财经大学用户', answer: true },
        { id: 2, name: '其他高校用户', answer: false },
        { id: 3, name: '社会用户', answer: false }
      ]],
      form: {},
      active: '',
      selectionActive: 0
    }
  },
  mounted() {
    //
  },
  methods: {
    updateActive(i) {
      this.selectionActive = i
    },
    routerLink() {
      this.$router.push({ name: 'resourcesPrepare' })
    }
  }
}
</script>

<style lang="less" scoped>
.TopicSelection{
  >div{
    column-count: 3;
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari and Chrome */
    column-gap:40px;
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
.hint-title{
    width: 560px;
    height: 50px;
    color: #666;
    font-size: 12px;
    text-align: center;
    background: #ebf8fe;
    border-radius: 12px;
    border: 1px solid #b3e7ff;
    opacity: 0.98;
}

  ::v-deep .ivu-input{
    border-radius: 50px;
    padding-left: 15px;
  }
.boxShadow{
    height: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.04);
    padding: 36px 60px;
    border: 1px solid #eaedf3;
}
</style>
