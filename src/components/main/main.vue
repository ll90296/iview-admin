<template>
  <Layout style="height: 100%" class="main">
    <Layout :style="{minHeight: '100vh'}">
      <Header class="header-con">
        <header-bar
          :collapsed="collapsed"
          @on-coll-change="handleCollapsedChange"
        >
          <user :message-unread-count="unreadCount" :user-avatar="userAvatar" />
          <!-- <language
            v-if="$config.useI18n"
            :lang="local"
            style="margin-right: 10px"
            @on-lang-change="setLocal"
          /> -->
          <!-- <error-store
            v-if="
              $config.plugin['error-store'] &&
                $config.plugin['error-store'].showInHeader
            "
            :has-read="hasReadErrorPage"
            :count="errorCount"
          /> -->
          <!-- <fullscreen v-model="isFullscreen" style="margin-right: 10px" /> -->
        </header-bar>
      </Header>
      <div class="bread">
        <Breadcrumb v-if="$route.name != 'home'" style="padding:28px 120px">
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem >{{ $route.meta.title }}</BreadcrumbItem>
        </Breadcrumb>
        <div v-if="$route.name == 'practice'">
          <div v-if="!onOff" class="personal-info" style="position:relative" @click="onOff = !onOff">
            <div class="personal-info-left">
              <i-book-one :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" theme="multi-color" size="24"/>
              <span style="margin-left: 15px;">社会人士</span>
            </div>
            <div v-if="!onOff">
              12354
              <Icon type="ios-arrow-dropdown" style="padding-left:10px" />
            </div>
          </div>
          <div v-if="onOff" class="personal-info" style="position:relative">
            <Card style="width:293px;margin-right:120px;background: #9cb6e6;position:absolute;top:0;left:0;right:0">
              <p slot="title" @click.prevent="onOff = !onOff">
                <i-book-one :fill="['#333' ,'#2d6ac0' ,'#FFF' ,'#43CCF8']" theme="multi-color" size="24"/>
                <span style="margin-left: 15px;">个人信息</span>
              </p>
              <div>
                <div>
                  <h5>姓名：</h5>
                  <p>123</p>
                </div>
                <div class="bottom10">
                  <h5>学校：</h5>
                  <p>123</p>
                  <h5>学院：</h5>
                  <p>123</p>
                  <h5>班级：</h5>
                  <p>123</p>
                  <h5>姓名：</h5>
                  <p>123</p>
                  <h5>指定老师：</h5>
                  <p>123</p>
                </div>
                <div style="text-align:center">
                  <router-link to="/">
                    <Button type="error" shape="circle" style="width:184px;height:44px;margin-top:20px">结束本次实验</Button>
                  </router-link>
                </div>
              </div>
              <a slot="extra" href="#" @click.prevent="onOff = !onOff">
                <Icon type="ios-loop-strong"/>
                <Icon type="ios-arrow-dropup" />
              </a>
            </Card>
          </div>
        </div>

      </div>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <!-- <div class="tag-nav-wrapper">
            <tags-nav
              :value="$route"
              :list="tagNavList"
              @input="handleClick"
              @on-close="handleCloseTag"
            />
          </div> -->
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view />
            </keep-alive>
            <ABackTop
              :height="100"
              :bottom="80"
              :right="50"
              container=".content-wrapper"
            />
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import HeaderBar from './components/header-bar'
import TagsNav from './components/tags-nav'
import User from './components/user'
import ABackTop from './components/a-back-top'
import Fullscreen from './components/fullscreen'
import Language from './components/language'
import ErrorStore from './components/error-store'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import routers from '@/router/routers'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './main.less'
export default {
  name: 'Main',
  components: {
    HeaderBar,
    Language,
    TagsNav,
    Fullscreen,
    ErrorStore,
    User,
    ABackTop
  },
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false,
      onOff: false
    }
  },
  computed: {
    ...mapGetters(['errorCount']),
    tagNavList() {
      return this.$store.state.app.tagNavList
    },
    tagRouter() {
      return this.$store.state.app.tagRouter
    },
    userAvatar() {
      return this.$store.state.user.avatarImgPath
    },
    cacheList() {
      const list = [
        'ParentView',
        ...(this.tagNavList.length
          ? this.tagNavList
            .filter((item) => !(item.meta && item.meta.notCache))
            .map((item) => item.name)
          : [])
      ]
      return list
    },
    menuList() {
      return this.$store.getters.menuList
    },
    local() {
      return this.$store.state.app.local
    },
    hasReadErrorPage() {
      return this.$store.state.app.hasReadErrorPage
    },
    unreadCount() {
      return this.$store.state.user.unreadCount
    }
  },
  watch: {
    $route(newRoute) {
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      this.onOff = false
      this.setBreadCrumb(newRoute)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
  },
  mounted() {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList()
    this.setHomeRoute(routers)
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
    this.setBreadCrumb(this.$route)
    // 设置初始语言
    this.setLocal(this.$i18n.locale)
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find((item) => item.name === this.$route.name)) {
      this.$router.push({
        name: this.$config.homeName
      })
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal',
      'setHomeRoute',
      'closeTag'
    ]),
    ...mapActions(['handleLogin']),
    turnToPage(route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCollapsedChange(state) {
      this.collapsed = state
    },
    handleCloseTag(res, type, route) {
      if (type !== 'others') {
        if (type === 'all') {
          this.turnToPage(this.$config.homeName)
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagNavList(res)
    },
    handleClick(item) {
      this.turnToPage(item)
    }
  }
}
</script>
<style lang="less" scoped>
.bread{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personal-info{
    width: 293px;
    height: 54px;
    background: #9cb6e6;
    padding: 9px 16px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-top:28px;
    margin-right:120px;
    &-left{
      display:flex;
      align-items:center;
      border-right: 2px solid;
      padding-right: 20%;
      font-size: 14px;
      font-weight: bold;
      color: #000;
    }
}
::v-deep .ivu-card{
    border-radius: 8px;
}
::v-deep .ivu-card-head{
  border-color: rgb(169, 160, 160);
  p{
    height: auto;
  }
}
.bottom10{
  p{
    margin-bottom: 10px;
  }
}
::v-deep .ivu-layout{
  background: #fff !important;
}
</style>
