<template>
  <div>
    <h3>开始实验</h3>
    <multipleChoiceOptions :item-list="itemList" v-model="active" :submit="submit" />
    <Button v-if="page>=list.length" type="primary" shape="circle" style="width:140px;height:44px" @click="completeAnswer">完成答题</Button>
    <Button v-else-if="submit" type="primary" shape="circle" style="width:140px;height:44px" @click="next">下一题</Button>
    <Button v-else :disabled="!active" type="primary" shape="circle" style="width:140px;height:44px" @click="lookAnswer">查看答案</Button>

    <div v-if="submit" class="answer">
      <h3>正确答案: B.</h3>
      <p>新闻角度是作者落实新闻主题的一种特别方法，是记者动笔写稿的首要一道“工序”，角度选择的好与坏直接影响到新闻报道的成败，故答案选B</p>
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
      page: 0
    }
  },
  computed: {
    itemList() {
      if (!this.list[this.page]) {
        return this.list[this.page - 1]
      }
      return this.list[this.page]
    }
  },
  mounted() {
    console.log(this.list, 'list')
  },
  methods: {
    lookAnswer() {
      this.page++
      this.submit = true
    },
    completeAnswer() {
      this.$emit('complete')
    },
    next() {
      this.active = ''
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
</style>
