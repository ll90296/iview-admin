<template>
  <div class="ResourcesPrepare">
    <h1>1. 本次实践中需要使用到的软件</h1>
    <p>请选择处理音频的软件</p>
    <ZCheckbox v-model="social1" :list="list1" class="check" />
    <p>请选择处理图片的软件</p>
    <ZCheckbox v-model="social2" :list="list2" class="check" />
    <p>请选择处理视频的软件</p>
    <ZCheckbox v-model="social3" :list="list3" class="check" />
    <h1>2. 本次实践中需要使用到的硬件</h1>
    <p>计算机硬件配置要求：i7、2g 内存、4g 显存、1t 硬盘</p>
    <p>其他计算终端硬件配置要求：无</p>
    <div class="bottom-btn">
      <router-link :to="{name:'topicSelection'}">
        <Button shape="circle">上一步</Button>
      </router-link>
      <Button :disabled="disabled" type="primary" shape="circle" @click="routerLink">下一步</Button>
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
      social1: [],
      social2: [],
      social3: [],

      list1: [{ url: require('@/assets/images/convert.png'), name: 'Convert', id: 1 }, { url: require('@/assets/images/au.png'), name: 'Au', id: 2 }, { url: require('@/assets/images/videomeld.png'), name: 'Video Meld', id: 3 }, { url: require('@/assets/images/x2proaudio.png'), name: 'X2Pro Audio', id: 4 }],
      list2: [{ url: require('@/assets/images/ps.png'), name: 'Adobe Photoshop', id: 1 }, { url: require('@/assets/images/acdsee.png'), name: 'ACDSee', id: 2 }, { url: require('@/assets/images/picasa.png'), name: 'Picasa', id: 3 }, { url: require('@/assets/images/plxt.png'), name: '泼辣修图', id: 4 }],
      list3: [{ url: require('@/assets/images/pr.png'), name: 'Premiere', id: 1 }, { url: require('@/assets/images/jy.png'), name: '剪映', id: 2 }, { url: require('@/assets/images/edius.png'), name: 'EDIUS', id: 3 }, { url: require('@/assets/images/finalcut.png'), name: 'Fianl cut', id: 4 }],
      active: '',
      form: {},
      submit: false
    }
  },
  computed: {
    disabled() {
      return !this.social1.length && !this.social2.length && !this.social3.length
    }
  },
  mounted() {
    //
  },
  methods: {
    routerLink() {
      const softwareCount = this.social1.length + this.social2.length + this.social3.length
      this.$store.commit('setGlobalData', { voice: this.social1.join('、'), picture: this.social2.join('、'), video: this.social3.join('、'), softwareCount })
      this.$router.push({ name: 'materialPrepare' })
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
      button{
        margin-left: 20px;
      }
    }
}
</style>
