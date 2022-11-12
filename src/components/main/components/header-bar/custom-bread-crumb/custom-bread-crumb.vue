<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :key="`bread-crumb-${item.name}`" @click.native="toHome">
        <!-- <common-icon :type="item.icon || ''" style="margin-right: 4px;"/> -->
        {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { showTitle } from '@/libs/util'
import CommonIcon from '_c/common-icon'
import './custom-bread-crumb.less'
export default {
  name: 'CustomBreadCrumb',
  components: {
    CommonIcon
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 22
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showTitle(item) {
      return showTitle(item, this)
    },
    isCustomIcon(iconName) {
      return iconName.indexOf('_') === 0
    },
    getCustomIconName(iconName) {
      return iconName.slice(1)
    },
    toHome() {
      if (this.$store.state.app.personalInfo.name) {
        this.$Modal.confirm({
          content: '结束实验并返回实验平台首页？',
          width: '416',
          onOk: () => {
            this.$store.commit('setPersonalInfo', {})
            sessionStorage.removeItem('personalInfo')
            this.$router.push('/')
          },
          onCancel: () => {

          }
        })
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
