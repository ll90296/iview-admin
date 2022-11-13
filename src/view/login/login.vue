<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card :bordered="false" icon="log-in" title="欢迎登录">
        <div class="form-con">
          <login-form v-if="!type" ref="loginForm" :password-rules.sync="passwordRules" @on-success-valid="handleSubmit"/>
          <register-form v-else @on-success-valid="handleSubmit($event,'register')"/>
          <p v-if="type =='register'" class="login-tip" @click="type = ''">去登录</p>
          <p v-else class="login-tip" @click="type = 'register'">去注册</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import RegisterForm from '_c/register-form'
import { register } from '@/api/user'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      type: '',
      passwordRules: [
        { required: true, message: '密码不能为空', trigger: 'blur' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit({ userName, passWord }, type) {
      if (type === 'register') {
        register({ userName, passWord }).then(res => {
          this.$Message.success('注册成功！')
          this.type = ''
        })
      } else {
        this.handleLogin({ userName, passWord }).then(res => {
          console.log(res, 'res')
          if (res) {
            this.passwordRules = [
              { validator: (rule, value, callback) => { callback(new Error(res)) }, trigger: 'blur' }
            ]
            this.$refs.loginForm.validate()
            return
          }
          this.$router.push({
            name: this.$config.homeName
          })
        })
      }
    }
  }
}
</script>

<style>

</style>
