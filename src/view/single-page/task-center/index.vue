<template>
  <div class="task">
    <div style="text-align:center">
      <h2>请创作一项适合新媒体平台发布的融合创新新闻作品</h2>
      <Button type="primary" shape="circle" @click="routerLink">接受任务</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCenter',
  mounted() {
    //
  },
  methods: {
    routerLink() {
      this.$router.push({ name: 'topicSelection' })
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
