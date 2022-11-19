<template>
  <div>
    <h3 class="title">{{ testName }}</h3>
    <multipleChoiceOptions :item-list="itemList" v-model="active" :submit="submit" @testOptionAnswer="onanswerCount" @testOptionEx="testOptionEx" />
    <Button v-if="okAnswer" type="primary" shape="circle" style="width:140px;height:44px" @click="completeAnswer">完成答题</Button>
    <Button v-else-if="submit" type="primary" shape="circle" style="width:140px;height:44px" @click="next">下一题</Button>
    <Button v-else :disabled="!active" type="primary" shape="circle" style="width:140px;height:44px" @click="lookAnswer">查看答案</Button>

    <div v-if="submit" class="answer">
      <h3>正确答案: {{ testOptionAnswer }}.</h3>
      <p>{{ testEx }}</p>
    </div>
  </div>
</template>

<script>
import multipleChoiceOptions from '@/components/multipleChoiceOptions'
export default {
  name: 'MultipleChoice',
  components: {
    multipleChoiceOptions
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: '',
      form: {},
      submit: false,
      page: 0,
      testName: '',
      testEx: '',
      testOptionAnswer: '',
      okAnswer: false,
      answer: [],
      answerCount: [],
      test: {},
      testList: []
    }
  },
  computed: {
    itemList() {
      if (this.list.length === 0) return []
      if (!this.list[this.page]) {
        return this.list[this.page - 1].list
      }
      return this.list[this.page].list
    }
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(newVal) {
        if (newVal.length) {
          this.testName = newVal[0].testName
          this.testEx = newVal[0].testEx
        }
      }
    }
  },
  mounted() {
    console.log(this.list, 'list')
  },
  methods: {
    onanswerCount(event) {
      if (event) {
        this.answer = event
      } else {
        this.answer = null
      }
    },
    testOptionEx(event) {
      if (event) {
        this.test = { anwser: event, topic: this.testName, number: this.list[this.page].number }
      }
    },
    lookAnswer() {
      this.answer && this.answerCount.push(this.answer)
      console.log(this.answer, this.answerCount, 'this.answerCount')
      this.testList.push(this.test)
      const testOptionAnswer = this.list[this.page].list.filter(item => item.testOptionAnswer)
      this.testOptionAnswer = testOptionAnswer.testOption
      if (this.page === this.list.length - 1) {
        this.okAnswer = true
        this.submit = true
        return
      }
      this.submit = true
    },
    completeAnswer() {
      this.$emit('complete', this.answerCount.length, this.testList)
    },
    next() {
      this.active = ''
      this.page++
      this.testName = this.list[this.page].testName
      this.testEx = this.list[this.page].testEx
      this.submit = false
    }
  }
}
</script>

<style lang="less" scoped>
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
.title{
    color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 17px;
}
</style>
