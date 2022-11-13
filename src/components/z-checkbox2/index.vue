<template>
  <div class="ZCheckbox">
    <CheckboxGroup v-model="social" style="display: flex">
      <Row :gutter="16" style="width:100%">
        <Col
          v-for="item in list"
          :key="item.id"
          :style="{ background: social.includes(item.id) ? '#d9ffd1' : '' }"
          :xs="type == 'audio'?8:12"
          :sm="type == 'audio'?6:8"
          :md="type == 'audio'?4:6"
          :lg="type == 'audio'?2:4"
          class="ZCheckbox-item"
          @contextmenu.native.prevent.right="openMenu($event,item.id)"
        >
        <div>
          <div v-if="type == 'audio'">
            <img :src="item.audioUrl" alt="" @click="openModal(item.url,item.fileName)">
          </div>
          <div v-else class="img-box relative">
            <video v-if="showPlay" :src="$imgUrl(item.url)" @click="openModal(item.url,item.fileName)"/>
            <img v-else :src="$imgUrl(item.url)" alt="" @click="openModal(item.url,item.fileName)">
            <img v-if="showPlay" src="data:image/png;base64,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" class="i-icon" alt="" @click="openModal(item.url,item.fileName)">
          </div>
          <div
            :title="item.fileName"
            style="overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;">{{ item.fileName }}</div>
          <Checkbox :label="item.id" class="ZCheckbox-item-check">
            <span />
          </Checkbox>
        </div>
        </Col>
      </Row>
    </CheckboxGroup>
    <Modal
      :footer-hide="true"
      v-model="showFile"
      :title="title">
      <div v-if="showFile">
        <audio v-if="type == 'audio'" :src="$imgUrl(showUrl)" style="width:100%" controls autoplay />
        <video v-else-if="showPlay" :src="$imgUrl(showUrl)" style="width:100%" controls autoplay />
        <img v-else :src="$imgUrl(showUrl)" style="width:100%" alt="">
      </div>
    </Modal>
    <ul
      v-show="rightMenuVisible"
      ref="rightMenu"
      :style="{ left: rightMenuLeft + 'px', top: rightMenuTop + 'px' }"
      class="contextmenu"
    >
      <Button type="error" @click="$emit('remove',delId);rightMenuVisible = false">删除</Button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ZCheckbox',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    showPlay: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      social: [],
      videoUrl: '',
      showFile: false,
      showUrl: '',
      title: '',
      rightMenuTop: '',
      rightMenuLeft: '',
      rightMenuVisible: false,
      delId: ''
    }
  },
  watch: {
    social(newVAl) {
      const arr = this.list.filter(item => newVAl.includes(item.id))
      this.$emit('input', arr)
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$refs.rightMenu.contains(e.target)) { this.rightMenuVisible = false }
    })
  },
  methods: {
    openModal(url, title) {
      this.title = title
      this.showUrl = url
      this.showFile = true
    },
    openMenu(e, id) {
      var x = e.pageX
      var y = e.pageY
      this.rightMenuTop = y
      this.rightMenuLeft = x
      this.delId = id
      this.rightMenuVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.ZCheckbox {
  &-item {
    position: relative;
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    .img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      margin-bottom: 8px;
      background: #fff;
      width: 100%;
      padding-top: 66.66%;
      position: relative;
      video,
      img {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    }
    &-check {
      position: absolute;
      left: 18px;
      top: 18px;
    }
  }
}
.i-icon{
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    width: 24px !important;
    height: 24px !important;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.contextmenu{
  position: absolute;
}
</style>
