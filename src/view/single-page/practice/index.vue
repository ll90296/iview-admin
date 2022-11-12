<template>
  <div class="practice">
    <Card class="hint-title" dis-hover>正式开始实验前，请先进行实验准备，巩固本次实验知识点</Card>
    <multipleChoice :list="list" @complete="routerLink" />
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import multipleChoice from '@/components/multipleChoice'
import { getTestList } from '@/api/practice'
export default {
  name: 'Practice',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    multipleChoice
  },
  data() {
    return {
      list: [],
      active: '',
      form: {},
      submit: false
    }
  },
  watch: {
    active(newVal) {
      console.log(newVal, 'vvv')
    }
  },
  mounted() {
    //
    this.testList()
  },
  methods: {
    routerLink() {
      this.$router.push({ name: 'taskCenter' })
    },
    lookAnswer() {
      this.submit = true
    },
    next() {
      this.active = ''
      this.submit = false
    },
    testList() {
      getTestList().then(res => {
        this.list = res.data.rows
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
    margin-bottom: 32px;
}
::v-deep .ivu-icon-md-close:before,
::v-deep .ivu-icon-md-checkmark:before{
  vertical-align: middle;
}
.answer{
    margin-top: 10px;
    padding: 30px 20px;
    width: 580px;
    min-height: 110px;
    background: #f1f6fd;
    h3{
      margin-bottom: 6px;
    }
}
</style>
