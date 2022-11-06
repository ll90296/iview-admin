<template>
  <div class="ZCheckbox">
    <CheckboxGroup
      v-model="social"
      style="display: flex">
      <Row gutter="16">
        <Col
          v-for="item in list"
          :key="item.id"
          :style="{ background: social.includes(item.id) ? '#d9ffd1' : '' }"
          span="6"
          class="ZCheckbox-item">
        <div>
          <div class="img-box">
            <img
              :src="item.url"
              alt="" >
          </div>
          <span>{{ item.name }}</span>
          <Checkbox
            :label="item.id"
            class="ZCheckbox-item-check">
            <span/>
          </Checkbox>
        </div>
        </Col>
      </Row>
    </CheckboxGroup>
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
    }
  },
  data() {
    return {
      social: []
    }
  },
  watch: {
    social(newVAl) {
      this.$emit('input', newVAl)
    }
  },
  created() {
    console.log(this.list)
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
      border: 1px solid #eee;
      margin-bottom: 8px;
      background: #fff;
      img {
        width: 58px;
        height: 58px;
      }
    }
    &-check {
      position: absolute;
      left: 18px;
      top: 18px;
    }
  }
}
</style>
