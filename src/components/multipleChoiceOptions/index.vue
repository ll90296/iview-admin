<template>
  <div>
    <Card v-for="item in itemList" :key="item.id" :class="{active:value==item.id,correct:correctError(item.answer),error: correctError(item.answer,item.id)}" class="item" @click.native="select(item.id)">
      <p>{{ item.name }}</p><Icon v-if="correctError(item.answer)" type="md-checkmark" color="#0ec066" class="icon" />
      <Icon v-if="correctError(item.answer,item.id)" type="md-close" color="#ff8e32" class="icon" />
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
    select(id) {
      if (this.submit) return
      this.$emit('input', id)
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
