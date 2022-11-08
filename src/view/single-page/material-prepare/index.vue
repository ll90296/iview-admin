<template>
  <div class="MaterialPrepare">
    <h1>在仿真实验项目中，我们已为你准备好了各种素材。实际生产中，需要亲手收集素材。</h1>
    <h1>请从下面的图片和视频素材库中挑选合适的素材，注意不要选择不符合新闻作品生产的劣质素材。</h1>
    <h3>图片素材库</h3>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <h3>视频素材库</h3>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <h3>音频素材库</h3>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <h3>文稿素材库</h3>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <h1>2. 本次实践中需要使用到的硬件</h1>
    <p>计算机硬件配置要求：i7、2g 内存、4g 显存、1t 硬盘</p>
    <p>其他计算终端硬件配置要求：无</p>
    <div class="bottom-btn">
      <Button shape="circle">上一步</Button>
      <Button type="primary" shape="circle">下一步</Button>
    </div>
  </div>
</template>

<script>
import ZCheckbox from '@/components/z-checkbox2'
export default {
  name: 'MaterialPrepare',
  components: {
    ZCheckbox
  },
  data() {
    return {
      social: [],
      list: [{ url: require('@/assets/images/logo-min.jpg'), name: 1, id: 1 }, { url: require('@/assets/images/logo-min.jpg'), name: 2, id: 2 }, { url: require('@/assets/images/logo-min.jpg'), name: 3, id: 3 }, { url: require('@/assets/images/logo-min.jpg'), name: 4, id: 4 }, { url: require('@/assets/images/logo-min.jpg'), name: 5, id: 5 }],
      active: '',
      form: {},
      submit: false
    }
  },
  watch: {
    social(newVal) {
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
.MaterialPrepare{
    padding: 36px 85px;
    background: #fff;
    border: 1px solid #eaedf3;
    border-radius: 8px;
    h3{
      color: #333;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    h1{
      color: #333;
      font-size: 20px;
      font-weight: 600;
      line-height: 33px;
    }
    h1:nth-of-type(2){
        margin-bottom: 30px;
    }
    .check{
      padding-left: 40px;
      margin-bottom: 40px;
    }
    .bottom-btn{
      display: flex;
      justify-content: center;
      margin-top: 16px;
      button:nth-of-type(2){
        margin-left: 20px;
      }
    }
}
</style>
