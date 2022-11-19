<template>
  <div>
    <Card v-for="item in itemList" :key="item.id" :class="{active:value==item.id,correct:correctError(item.testOptionAnswer),error: correctError(item.testOptionAnswer,item.id)}" class="item" @click.native="select(item.id,item.testOptionAnswer,item.testOptionEx)">
      <p>{{ item.testOptionEx }}</p><Icon v-if="correctError(item.testOptionAnswer)" type="md-checkmark" color="#0ec066" class="icon" />
      <Icon v-if="correctError(item.testOptionAnswer,item.id)" type="md-close" color="#ff8e32" class="icon" />
    </Card>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoiceOptions',
  props: {
    itemList: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Number | String,
      default: null
    },
    submit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    correctError(answer, id) {
      if (id) {
        return this.submit && !answer && this.value === id
      } else {
        return this.submit && answer
      }
    },
    select(id, testOptionAnswer) {
      if (this.submit) return
      this.$emit('input', id)
      this.$emit('testOptionAnswer', testOptionAnswer)
      const testOptionEx = this.itemList.filter(item => item.testOptionAnswer)
      this.$emit('testOptionEx', testOptionEx[0].testOptionEx)
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  width:480px;
  border-radius:12px;
  margin-bottom: 20px;
  ::v-deep .ivu-card-body{
    display: flex;
    justify-content: space-between;
  }

}
.active{
  background: rgba(84,160,255,0.1);
  border: 1px solid #54a0ff;
}
.correct{
    background: #d9ffd1;
    border: none;
}
.error{
    background: #fff0cc;
    border: none;
}
</style>
