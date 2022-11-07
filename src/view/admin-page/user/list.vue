<template>
  <div>
    <Table :columns="columns" :data="data"/>
  </div>
</template>
<script>
import { userList } from '@/api/user'
export default {
  data() {
    return {
      columns: [
        {
          title: '用户名',
          key: 'userName'
        },
        {
          title: '等级',
          key: 'level'
        }
      ],
      data: [],
      params: {
        pageNum: 1,
        pageSize: 20,
        userName: ''
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      userList(this.params).then(res => {
        console.log(res, 'res')
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
