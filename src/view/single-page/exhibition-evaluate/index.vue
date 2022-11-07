<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4">
      <Tabs value="name1">
        <TabPane label="审核通过" name="name1">
          <div class="list-wapper mt-4">
            <Table :columns="getAdoptList" :data="adoptList" class="tableInfoBox" highlight-row>
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
              <template slot="comment" slot-scope="{ row}">
                <div class="comment">
                  <p class="comment">
                    {{ row.comment }}
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
        </TabPane>
        <TabPane label="被退回" name="name2">
          <div class="list-wapper mt-4">
            <Table :columns="getAdoptList" :data="returnList" class="tableInfoBox" highlight-row>
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
              <template slot="comment" slot-scope="{ row}">
                <div class="comment">
                  <p class="comment">
                    {{ row.comment }}
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
        </TabPane>
      </Tabs>
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
      adoptList: [
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        }
      ],
      returnList: [
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        },
        {
          ID: 1,
          title: '新时代民工',
          cover: 'https://file.iviewui.com/images/image-demo-13.jpg',
          author: '11111',
          date: '2022年10月28日',
          comment: '6条',
          fraction: '90分',
          operation: '查看'
        }
      ]
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
  },
  methods: {
    toDetail() {
      this.$router.push('/work-detail')
    }
  }
}
</script>

