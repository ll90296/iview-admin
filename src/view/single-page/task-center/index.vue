<template>
  <div style="height: 100%;">
    <div v-if="selectionActive == 1" class="task" @click="updateActive(2)">
      <div style="text-align:center">
        <h2>请创作一项适合新媒体平台发布的融合创新新闻作品</h2>
        <Button type="primary" shape="circle" @click="$emit('change')">接受任务</Button>
      </div>
    </div>
    <div v-if="selectionActive == 2" class="boxShadow">
      <Card class="hint-title" dis-hover>您选择了“{{ activeName }}”新闻选题</Card>
      <h3
        style="margin-top: 62px;margin-bottom:20px;color: #333;
    font-size: 18px;
    font-weight: 600;">请为新闻选题拟定题目</h3>
      <Input v-model="form.topic" style="width:558px;margin-bottom:20px" placeholder="在此处填写题目"></Input>
      <div>
        <Button type="primary" shape="circle" style="width:140px;height:44px" @click="routerLink">下一步</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCenter',
  data() {
    return {
      selectionActive: 1,
      form: {},
      activeName: ''
    }
  },
  mounted() {
    //
    this.activeName = this.$route.query.activeName
  },
  methods: {
    updateActive(i) {
      this.selectionActive = i
    },
    routerLink() {
      if (!this.form.topic) {
        return this.$Message.warning('请为新闻选题拟定题目')
      }
      this.$store.commit('setGlobalData', { ...this.form })
      this.$router.push({ name: 'resourcesPrepare' })
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
