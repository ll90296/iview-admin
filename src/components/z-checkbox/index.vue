<template>
  <div class="ZCheckbox">
    <CheckboxGroup v-model="social" style="display: flex">
      <div
        v-for="item in list"
        :key="item.id"
        :style="{ background: social.includes(item.name) ? '#d9ffd1' : '' }"
        class="ZCheckbox-item"
      >
        <div class="img-box">
          <img :src="item.url" alt="" >
        </div>
        <span
          style="width: 84px;
    display: inline-block;">{{ item.name }}</span>
        <Checkbox :label="item.name" class="ZCheckbox-item-check">
          <span/>
        </Checkbox>
      </div>
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
    margin-right: 10px;
    .img-box {
      width: 84px;
      height: 84px;
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
