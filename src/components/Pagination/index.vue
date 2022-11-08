<template>
  <div>
    <Page :total="total" :current="page" :page-size="limit" size="small" show-elevator show-sizer @on-change="onChange" @on-page-size-change="pageSizeChange" />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: null
    },
    page: {
      type: Number,
      default: null
    },
    limit: {
      type: Number,
      default: null
    }
  },
  methods: {
    onChange(page) {
      this.$emit('update:page', page)
      this.$emit('change')
    },
    pageSizeChange(limit) {
      this.$emit('update:limit', limit)
      this.$emit('change')
    }
  }
}
</script>
