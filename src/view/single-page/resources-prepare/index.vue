<template>
  <div class="ResourcesPrepare">
    <h1>1. 本次实践中需要使用到的软件</h1>
    <p>请选择处理音频的软件</p>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <p>请选择处理图片的软件</p>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <p>请选择处理视频的软件</p>
    <ZCheckbox v-model="social" :list="list" class="check" />
    <h1>2. 本次实践中需要使用到的硬件</h1>
    <p>计算机硬件配置要求：i7、2g 内存、4g 显存、1t 硬盘</p>
    <p>其他计算终端硬件配置要求：无</p>
    <div class="bottom-btn">
      <router-link :to="{name:'topicSelection'}">
        <Button shape="circle">上一步</Button>
      </router-link>
      <router-link :to="{name:'materialPrepare'}">
        <Button type="primary" shape="circle">下一步</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ZCheckbox from '@/components/z-checkbox'
export default {
  name: 'ResourcesPrepare',
  components: {
    ZCheckbox
  },
  data() {
    return {
      social: [],
      list: [{ url: require('@/assets/images/logo-min.jpg'), name: 1, id: 1 }, { url: require('@/assets/images/logo-min.jpg'), name: 2, id: 2 }, { url: require('@/assets/images/logo-min.jpg'), name: 3, id: 3 }, { url: require('@/assets/images/logo-min.jpg'), name: 4, id: 4 }],
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
.ResourcesPrepare{
    padding: 36px 60px;
    background: #fff;
    border: 1px solid #eaedf3;
    border-radius: 8px;
    h1{
      margin: 24px 0 16px 0;
    }
    p{
      margin-bottom: 8px;
      padding-left: 40px;
      font-size: 20px;
      height: 28px;
    }
    .check{
      padding-left: 40px;
      margin-bottom: 40px;
    }
    .bottom-btn{
      display: flex;
      justify-content: center;
      margin-top: 16px;
      a:nth-of-type(2){
        margin-left: 20px;
      }
    }
}
</style>
