<template>
  <div>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="level">
        <strong>{{ getLevel(row.level) }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(row)"
        >编辑权限</Button
        >
      </template>
    </Table>
    <!--  -->
    <Pagination :total="total" :page.sync="params.pageNum" :limit.sync="params.pageSize" @change="getList" />
    <Modal v-model="modal1" title="编辑权限" @on-ok="ok" @on-cancel="cancel">
      <Form ref="formInline" :model="form" :rules="ruleform">
        <FormItem prop="user" label="角色">
          <Select v-model="form.level" style="width: 200px">
            <Option
              v-for="item in [
                { label: '管理员', value: 1 },
                { label: '教师', value: 2 },
                { label: '学生', value: 5 },
              ]"
              :key="item.label"
              :value="item.value"
            >{{ item.label }}</Option
            >
          </Select>
        </FormItem>
      </Form>
    </Modal>
    {{ content }}
  </div>
</template>
<script>
import { userList, updateLevel } from '@/api/user'
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
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [],
      params: {
        pageNum: 1,
        pageSize: 20,
        userName: ''
      },
      total: 0,
      form: {
        level: ''
      },
      ruleform: {},
      modal1: false,
      content: ''
    }
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler(newVal) {
        console.log(newVal, 'asd')
      }
    }
  },
  mounted() {
    this.getList()
    const str = 'Your Portal To The New,Open Internet.'
    let index = 0
    const interval = setInterval(() => {
      if (!str[index]) return clearInterval(interval)
      this.content += str[index]
      index++
    }, 100)
  },
  methods: {
    getList() {
      console.log(this.params, 'par')
      userList(this.params).then((res) => {
        this.total = res.data.total
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
    },
    show(row) {
      this.form.id = row.id
      this.form.level = row.level
      this.modal1 = true
    },
    cancel() {
      this.form = {}
      this.modal1 = false
    },
    ok() {
      updateLevel(this.form).then(res => {
        this.getList()
        this.modal1 = false
      })
    },
    change() {
      console.log(this.params, 'prrr')
    }
  }
}
</script>
<style lang="less" scoped></style>
