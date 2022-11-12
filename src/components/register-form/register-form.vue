<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
      <span slot="prepend">
        <Icon :size="16" type="ios-person"/>
      </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input v-model="form.password" type="password" placeholder="请输入密码">
      <span slot="prepend">
        <Icon :size="14" type="md-lock"/>
      </span>
      </Input>
    </FormItem>
    <FormItem prop="passwordTwo">
      <Input v-model="form.passwordTwo" type="password" placeholder="请再次输入密码">
      <span slot="prepend">
        <Icon :size="14" type="md-lock"/>
      </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" long @click="handleSubmit">注册</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'RegisterForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data() {
    return {
      form: {
        userName: '',
        password: '',
        passwordTwo: ''
      }
    }
  },
  computed: {
    rules() {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
        passwordTwo: [{ required: true, trigger: 'blur', validator: this.validatePass2 }]
      }
    }
  },
  methods: {
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            passWord: this.form.password
          })
        }
      })
    }
  }
}
</script>
