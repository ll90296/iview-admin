<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4">
      <Tabs :value="tabValue" @on-click="onClick">
        <TabPane label="审核通过" name="name1">
          <div class="list-wapper mt-4">
            <Table :columns="getAdoptList" :data="adoptList" class="tableInfoBox" highlight-row>
              <template slot="ID" slot-scope="{row}">
                <div class="ID">
                  {{ row.seq }}
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
              <template slot="comment" slot-scope="{ row}">
                <div class="comment">
                  <p class="comment">
                    {{ row.count }}条
                  </p>
                </div>
              </template>
              <template slot="fraction" slot-scope="{ row}">
                <div class="fraction">
                  <p class="fraction">
                    {{ row.grade }}
                  </p>
                </div>
              </template>
              <template slot="operation" slot-scope="{ row}">
                <div class="operation flex align-center">
                  <p class="text-blue-500 cursor-pointer" @click="toDetail(row.id)">
                    查看
                  </p>

                  <p v-if="row.status == 1" class="ml-4 text-blue-500 cursor-pointer" @click="toDownloadReport(row.id)">
                    下载报告
                  </p>
                </div>
              </template>
            </Table>
          </div>
        </TabPane>
        <TabPane label="被退回" name="name2">
          <div class="list-wapper mt-4">
            <Table :columns="getAdoptList" :data="returnList" class="tableInfoBox" highlight-row>
              <template slot="ID" slot-scope="{row}">
                <div class="ID">
                  {{ row.seq }}
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
              <template slot="comment" slot-scope="{ row}">
                <div class="comment">
                  <p class="comment">
                    {{ row.count }}条
                  </p>
                </div>
              </template>
              <template slot="fraction" slot-scope="{ row}">
                <div class="fraction">
                  <p class="fraction">
                    {{ row.fraction }}
                  </p>
                </div>
              </template>
              <template slot="operation" slot-scope="{ row}">
                <div class="operation flex align-center">
                  <p class="text-blue-500 cursor-pointer" @click="toDetail(row.id)">
                    {{ row.operation }}
                  </p>
                  <!-- <p class="ml-4 text-blue-500 cursor-pointer" @click="toDetail">
                    下载报告
                  </p> -->
                </div>
              </template>
            </Table>
          </div>
        </TabPane>
      </Tabs> <Pagination :total="total" :page.sync="params.pageNum" :limit.sync="params.pageSize" style="text-align:right" class="mt-5" @change="getList(tabValue)" />
    </Card>
  </div>
</template>

<script>
import { auditList } from '@/api/work-review'
export default {
  name: 'WorkReview',
  components: {
  },
  data() {
    return {
      adoptList: [

      ],
      returnList: [

      ],
      params: {
        pageNum: 1,
        pageSize: 20
      },
      total: 0,
      tabValue: 'name1'
    }
  },
  computed: {
    getAdoptList() {
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
          title: '评论',
          slot: 'comment',
          minWidth: 5
        },
        {
          title: '分数',
          slot: 'fraction',
          minWidth: 5
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
    this.getList('name1')
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: 'WorkDetail', query: { id, showComments: true }})
    },
    toDownloadReport(id) {
      this.$router.push({ name: 'DownloadReport', query: { id }})
    },
    getList(name) {
      auditList(this.params).then(res => {
        console.log(res)
        if (name === 'name1') {
          this.adoptList = res.data.rows
        } else {
          this.returnList = res.data.rows
        }
        this.total = res.data.total
      })
    },
    onClick(name) {
      this.tabValue = name
      this.getList(name)
    }
  }
}
</script>

