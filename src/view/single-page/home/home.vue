<template>
  <div>
    <Row :gutter="20">
      <Card style="width:100%" @click.native="routerLink('startTest')">
        <h3>开始实验</h3>
        <p>从此进入完成完整实验流程生成实验报告</p>
      </Card>
    </Row>
    <Row :gutter="20" style="margin-top: 10px">
      <i-col
        v-for="item in inforCardData"
        :md="24"
        :lg="6"
        :key="item.title"
        style="margin-bottom: 20px;">
        <router-link :to="{name:item.route}">
          <Card
            style="display: flex;
    justify-content: center;"> <p>{{ item.title }}</p></Card>
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
          color: '#2d8cf0'
        },
        { title: '任务中心', icon: 'md-locate', count: 232, color: '#19be6b' },
        {
          title: '选题上报',
          icon: 'md-help-circle',
          count: 142,
          color: '#ff9900'
        },
        { title: '资源准备', icon: 'md-share', count: 657, color: '#ed3f14' },
        {
          title: '素材准备',
          icon: 'md-chatbubbles',
          count: 12,
          color: '#E46CBB',
          route: 'materialPrepare'
        },
        { title: '作品生产', icon: 'md-map', count: 14, color: '#9A66E4' },
        { title: '作品审核', icon: 'md-map', count: 14, color: '#9A66E4' },
        { title: '作品展示与互评', icon: 'md-map', count: 14, color: '#9A66E4' }
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
      console.log(12111)
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
