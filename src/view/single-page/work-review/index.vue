<template>
  <div class="work-review container">
    <Card>
      <div class="flex justify-between items-center p-2">
        <h4 class="font-semibold text-base">待审核</h4>
        <Button>前往互评</Button>
      </div>
      <div class="list-wapper mt-4">
        <Table :columns="getWork" :data="workList" class="tableInfoBox" highlight-row>
          <template slot="ID" slot-scope="{row}">
            <div class="ID">
              {{ row.ID }}
            </div>
          </template>
          <template slot="title" slot-scope="{ row}">
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
                {{ row.author }}
              </p>
            </div>
          </template>
          <template slot="date" slot-scope="{ row}">
            <div class="date">
              <p>
                {{ row.date }}
              </p>
            </div>
          </template>
          <template slot="operation" slot-scope="{ row}">
            <div class="operation flex align-center">
              <p class="text-blue-500 cursor-pointer" @click="toDetail">
                {{ row.operation }}
              </p>
              <p class="ml-4 text-blue-500 cursor-pointer" @click="toDetail">
                下载报告
              </p>
            </div>
          </template>
        </Table>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'WorkReview',
  components: {
  },
  data() {
    return {
      workList: [
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          operation: '查看'
        }
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
    //
  },
  methods: {
    toDetail() {
      this.$router.push('/work-detail')
    }
  }
}
</script>

<style lang="less" scoped>
.work-review {
  text-align: center;

}
</style>
