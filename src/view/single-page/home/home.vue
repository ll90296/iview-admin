<template>
  <div>
    <Row :gutter="20">
      <Card style="width:100%;height:143px;align-items:center" class="flex" @click.native="routerLink('startTest')">
        <div class="flex" style="align-items:center">
          <i-add-mode :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" class="p-5" theme="multi-color" size="68"/>
          <div>
            <h3>开始实验</h3>
            <p>从此进入完成完整实验流程生成实验报告</p>
          </div>
        </div>
      </Card>
    </Row>
    <Row :gutter="20" style="margin-top: 10px" class="tx">
      <i-col
        v-for="(item,i) in inforCardData"
        :md="24"
        :lg="6"
        :key="item.title"
        style="margin-bottom: 20px;">
        <router-link :to="{name:item.route}">
          <Card
            style="display: flex;
    justify-content: center;align-items:center">
            <i-bill v-if="i == 0" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-bookmark v-if="i == 1" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-bookmark-one v-if="i == 2" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-announcement v-if="i == 3" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-chinese-one v-if="i == 4" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-compression v-if="i == 5" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-save v-if="i == 6" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
            <i-doc-detail v-if="i == 7" :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" :stroke-width="2" theme="multi-color" size="48"/>
          <p>{{ item.title }}</p></Card>
        </router-link>
      </i-col>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
export default {
  name: 'Home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar
  },
  data() {
    return {
      inforCardData: [
        {
          title: '课前练习',
          icon: 'md-person-add',
          count: 803,
          color: '#2d8cf0',
          route: 'practice'
        },
        { title: '任务中心', icon: 'md-locate', count: 232, color: '#19be6b',
          route: 'taskCenter' },
        {
          title: '选题上报',
          icon: 'md-help-circle',
          count: 142,
          color: '#ff9900',
          route: 'topicSelection'
        },
        { title: '资源准备', icon: 'md-share', count: 657, color: '#ed3f14',
          route: 'resourcesPrepare' },
        {
          title: '素材准备',
          icon: 'md-chatbubbles',
          count: 12,
          color: '#E46CBB',
          route: 'materialPrepare'
        },
        { title: '作品生产', icon: 'md-map', count: 14, color: '#9A66E4',
          route: 'WorkProduction' },
        { title: '作品审核', icon: 'md-map', count: 14, color: '#9A66E4',
          route: 'WorkReview' },
        { title: '作品展示与互评', icon: 'md-map', count: 14, color: '#9A66E4',
          route: 'ExhibitionEvaluate' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted() {
    //
  },
  methods: {
    routerLink(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less" scoped>
.count-style {
  font-size: 50px;
}
.tx{
  ::v-deep .ivu-card-body{
    text-align: center !important;
  }

}
</style>
