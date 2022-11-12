<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown" />
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge
            :count="messageUnreadCount"
            style="margin-left: 10px"
          />
        </DropdownItem>
        <DropdownItem v-if="permission" name="switch">切换后台</DropdownItem></DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
import Cookies from 'js-cookie'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    permission() {
      return this.$store.state.user.access.includes(1) || this.$store.state.user.access.includes(2)
    }
  },
  methods: {
    ...mapActions(['handleLogOut']),
    logout() {
      Cookies.remove('token')
      this.$router.push({
        name: 'login'
      })
    },
    message() {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick(name) {
      switch (name) {
        case 'logout':
          this.logout()
          break
        case 'switch':
          this.$router.push({ name: 'admin' })
          break
        case 'message':
          this.message()
          break
      }
    }
  }
}
</script>
