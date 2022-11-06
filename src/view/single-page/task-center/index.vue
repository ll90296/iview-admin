<template>
  <div class="task">
    <div style="text-align:center">
      <h2>请创作一项适合新媒体平台发布的融合创新新闻作品</h2>
      <Button type="primary" shape="circle" @click="routerLink">接受任务</Button>
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
        { id: 1, name: '新疆财经大学用户', answer: true },
        { id: 2, name: '其他高校用户', answer: false },
        { id: 3, name: '社会用户', answer: false }
      ],
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
      this.$router.push({ name: 'topicSelection' })
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
.task{
    padding: 36px 60px;
    background: #fff;
    border: 1px solid #eaedf3;
    border-radius: 8px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
      margin-bottom: 64px;
    }
}
</style>
