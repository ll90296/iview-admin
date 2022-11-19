<template>
  <div class="start-test">
    <h3
      style="color: #333;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;">您好！欢迎使用山东财经大学财经新闻全媒体制作流程虚拟仿真平台。</h3>
    <p>请填写下方信息，并按照平台指引完成实验，下方信息会被自动填写进实验报告中，请谨慎填写。</p>
    <h3
      style="    font-size: 18px;
    font-weight: 600;line-height:55px">你的身份是</h3>
    <div class="start-test-content">
      <div v-for="(item,i) in cardList" :key="item.name" class="start-test-card">
        <div :class="{active:active==i}" @click="active = i">
          <img :src="item.url" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <Form
      v-if="active == 2"
      :model="form"
      :label-width="100"
      label-position="left"
      style="width:457px;
    margin: 0 auto;">
      <FormItem label="姓名">
        <Input v-model="form.name" placeholder="请填写您的姓名"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" shape="circle" style="width:200px" @click="routerLink">开始实验</Button>
      </FormItem>
    </Form>
    <Form
      v-else
      :model="form"
      :label-width="100"
      label-position="left"
      style="width:457px;
    margin: 0 auto;">
      <FormItem label="学校">
        <p v-if="active==0" style="text-align:left;margin-left:15px">山东财经大学</p>
        <Input v-else v-model="form.school" placeholder="请填写学校名称"></Input>
      </FormItem>
      <FormItem label="学院">
        <Input v-model="form.college" placeholder="请填写学院名称"></Input>
      </FormItem>
      <FormItem label="班级">
        <Input v-model="form.sclass" placeholder="请填写班级名称"></Input>
      </FormItem>
      <FormItem label="姓名">
        <Input v-model="form.name" placeholder="请填写您的姓名"></Input>
      </FormItem>
      <FormItem label="指定老师">
        <Input v-model="form.teacher" placeholder="请填写您的指定老师姓名"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" shape="circle" style="width:200px" @click="routerLink">开始实验</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import { beginExperiment } from '@/api/start-test'
export default {
  name: 'StartTest',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar
  },
  data() {
    return {
      cardList: [
        { url: require('@/assets/images/logo-min.jpg'), name: '山东财经大学用户' },
        { url: require('@/assets/images/logo-min.jpg'), name: '其他高校用户' },
        { url: require('@/assets/images/logo-min.jpg'), name: '社会用户' }
      ],
      active: 0,
      form: {}
    }
  },
  mounted() {
    //
  },
  methods: {
    routerLink() {
      if (!this.form.name) {
        return this.$Message.error('请填写您的姓名')
      }
      if (this.active === 0) {
        this.form.school = '山东财经大学'
      }
      const form = {
        type: this.active,
        ...this.form
      }
      form.type++
      beginExperiment(form).then(res => {
        this.$store.commit('setPersonalInfo', { type: this.active, ...this.form })
        this.$router.push({ name: 'practice' })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.start-test{
  text-align: center;
  &-card{
    .active{
      background: rgba(84,160,255,0.1);
      border: 1px solid #54a0ff;
    }
    >div{
      border: 1px solid #e9e9e9;
      width: 230px;
      border-radius: 12px;
      cursor: pointer;
      padding: 15px 0;
      box-sizing: border-box;
      img{
        width: 80px;
        height: 80px;
        margin-bottom: 17px;
      }
      p{
        color: #333;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  &-content{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    >div{
      margin-right: 30px;
    }
  }
  ::v-deep .ivu-input{
    border-radius: 50px;
    padding-left: 15px;
  }
}
img{
  display: inline-block;
}
</style>
