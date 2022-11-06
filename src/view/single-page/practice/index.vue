<template>
  <div class="practice">
    <Card class="hint-title" dis-hover>正式开始实验前，请先进行课前练习，巩固本次实验知识点</Card>
    <h3>开始实验</h3>
    <multipleChoice :list="list" @complete="routerLink" />
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import multipleChoiceOptions from '@/components/multipleChoiceOptions'
import multipleChoice from '@/components/multipleChoice'
export default {
  name: 'Practice',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    multipleChoiceOptions,
    multipleChoice
  },
  data() {
    return {
      list: [[
        { id: 1, name: '新疆财经大学用户', answer: true },
        { id: 2, name: '其他高校用户', answer: false },
        { id: 3, name: '社会用户', answer: false }
      ], [
        { id: 1, name: '新疆财经大学用户', answer: true },
        { id: 2, name: '其他高校用户', answer: false },
        { id: 3, name: '社会用户', answer: false }
      ]],
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
