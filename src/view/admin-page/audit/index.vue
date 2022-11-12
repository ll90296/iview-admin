<template>
  <div class="container">
    <Card>
      <Form ref="formInline" :label-width="100" inline>
        <FormItem label="审核状态">
          <Select v-model="params.status" clearable @on-change="getList">
            <Option :value="0">待审核</Option>
            <Option :value="1">审核通过</Option>
            <Option :value="2">被退回</Option>
          </Select>
        </FormItem>
      </Form>
      <div class="list-wapper mt-4">
        <Table :columns="getWork" :data="workList" class="tableInfoBox" highlight-row>
          <template slot="ID" slot-scope="{row}">
            <div class="ID">
              {{ row.seq }}
            </div>
          </template>
          <template slot="title" slot-scope="{row}">
            <div class="title">
              <p>
                {{ row.title }}
              </p>
            </div>
          </template>
          <template slot="cover" slot-scope="{ row}">
            <div class="cover p-4">
              <img :src="row.cover" alt="cover">
            </div>
          </template>
          <template slot="author" slot-scope="{ row}">
            <div class="author">
              <p class="author">
                {{ row.userName }}
              </p>
            </div>
          </template>
          <template slot="date" slot-scope="{ row}">
            <div class="date">
              <p>
                {{ row.releaseTime }}
              </p>
            </div>
          </template>
          <template slot="operation" slot-scope="{row}">
            <div class="operation flex align-center">
              <p
                v-if="row.status == 0"
                class="text-blue-500 cursor-pointer"
                @click="toDetail(row.id)">
                审核
              </p>
              <p
                v-if="row.status == 1"
                class="text-blue-500 cursor-pointer pl-4"
                @click="toDetail(row.id,'evaluation')">
                评价
              </p>
            </div>
          </template>
        </Table>
        <Pagination :total="total" :page.sync="params.pageNum" :limit.sync="params.pageSize" style="text-align:right" class="mt-5" @change="getList" />
      </div>
    </Card>
  </div>
</template>

<script>
import { auditList } from '@/api/work-review'
export default {
  name: 'Audit',
  components: {
  },
  data() {
    return {
      params: {
        pageNum: 1,
        pageSize: 20,
        status: ''
      },
      total: 0,
      workList: [

      ]
    }
  },
  computed: {
    getWork() {
      const columns = [
        {
          title: '序号',
          slot: 'ID',
          minWidth: 10
        },
        {
          title: '稿件标题',
          slot: 'title',
          minWidth: 10
        },
        {
          title: '封面',
          slot: 'cover',
          minWidth: 15
        },
        {
          title: '作者',
          slot: 'author',
          minWidth: 10
        },
        {
          title: '发布时间',
          slot: 'date',
          minWidth: 15
        },
        {
          title: '操作',
          slot: 'operation',
          minWidth: 10
        }
      ]
      return columns
    }
  },
  mounted() {
    this.getList()
    //
  },
  methods: {
    getList() {
      auditList(this.params).then(res => {
        console.log(res)
        this.workList = res.data.rows
        this.total = res.data.total
      })
    },
    toDetail(id, type) {
      this.$router.push({ name: 'auditDetail', query: { id, type }})
    }
  }
}
</script>

<style lang="less" scoped>
.work-review {
  text-align: center;

}
</style>
