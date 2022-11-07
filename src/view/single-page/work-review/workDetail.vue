<template>
  <div class="work-detail container">
    <Card class="pb-10 pt-4">
      <div class="p-2">
        <h4 class="font-semibold text-base">审核意见</h4>
      </div>
      <div class="detail-wapper mt-4">
        <Row class="px-4">
          <Col span="2">
          <p class="font-normal text-lg">标题</p>
          </Col>
          <Col span="22">
          <p class="font-normal text-lg">新时代民工</p>
          </Col>
        </Row>
        <Row class="mt-6 px-4">
          <Col span="2">
          <p class="font-normal text-lg">正文</p>
          </Col>
          <Col span="22">
          <div>
            <img class="rounded-lg" src="https://file.iviewui.com/images/image-demo-13.jpg" alt="">
          </div>
          <p class="font-normal text-lg mt-4">正文一</p>
          <div class="mt-2 flex justify-center items-center">
            <audio
              src="http://video-touchtv.oss-cn-shenzhen.aliyuncs.com/nom/2019/xjfeu_lab/audio/v2.mp3"
              controls="controls" />
          </div>
          <div class="mt-6 flex justify-center items-center">
            <video
              src="http://video-touchtv.oss-cn-shenzhen.aliyuncs.com/nom/2019/xjfeu_lab/video/IMG_5592_4__hd.mp4"
              controls="controls" />
          </div>
          <p class="font-normal text-lg mt-6">巴燕·乌拉孜别克在知道老师要来自己家访问的消息后，早早便在路边等候。太阳很大，但巴燕期盼的心情更为炽热。一下车，老师的手便与她紧紧交握在一起，喜悦洋溢在每个人的脸上。 在访问时，由于母亲国语水平较弱，巴燕便主动担当起了“翻译官”的职责，努力表达出母亲口中的每一份喜悦。 “巴燕非常优秀，谢谢你们输送这么好的人才到我们学校来。” 在大学期间，巴燕的成绩依旧很优秀，专业课平均都在九十分左右。巴燕有想要考研的想法，但英语使她十分苦恼。 周老师：“如果我们光按部就班的按照学校的课程走，是‘吃不饱’的。一定要下苦工夫，成绩都是一点一滴积累出来的。” 进班级、进宿舍、进食堂，联系学生、联系家长，与学生交朋友。广大师生在活动中增进感情，在交流中相互学习，以落实保障总目标在高校的土地上落地生根。 老师们走出校园，走到学生家中，走入学生家长们的心里。实现真正的沟通“零距离”。 “通过老师的指导我学到了很多，希望以后能多多开展这样的活动。” 万风银说：“这是我们第一次搞这样大规模的家访活动，特别有意义。三进两联一交友活动以前，我们老师跟学生的交流都特别少。我们现在到学生家里来家访，更增进了学校和家长之间的沟通和了解。” “一代人有一代人的使命，青年们是国家的未来。青年一代有理想、有本领、有担当，国家就有前途，民族才能希望。”周丽老师期冀道。 家访，访进了心，访出了情。有了小家之间的亲密和谐才能有大国的和谐稳定。三进两联一交友，师生情，家校情，共同为总目标源源不断注入新的动力。</p>
          </Col>
        </Row>
        <Row class="px-4 mt-6">
          <Col span="2">
          <p class="font-normal text-lg ">封面</p>
          </Col>
          <Col span="22">
          <div>
            <img class="w-40 rounded" src="https://file.iviewui.com/images/image-demo-13.jpg" alt="">
          </div>
          </Col>
        </Row>
        <Row class="px-4 mt-6">
          <Col span="2">
          <p class="font-normal text-lg">分发平台</p>
          </Col>
          <Col span="22">
          <div class="flex items-center">
            <Tag color="primary">H5</Tag>
            <Tag color="primary">APP</Tag>
          </div>
          </Col>
        </Row>
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
          minWidth: 5
        }
      ]
      return columns
    }
  },
  mounted() {
    //
  },
  methods: {
  }
}
</script>
