<template>
  <div>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="level">
        <strong>{{ getLevel(row.level) }}</strong>
      </template>
    </Table>
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
          slot: 'level'
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
        this.data = res.data.rows
      })
    },
    getLevel(key) {
      switch (key) {
        case 1:
          return '管理员'
        case 2:
          return '教师'
        case 3:
          return ''
        case 4:
          return ''
        case 5:
          return '学生'
        default:
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
