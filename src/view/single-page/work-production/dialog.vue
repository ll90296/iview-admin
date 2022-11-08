<template>
  <div class="dialog">
    <Modal v-model="addData" style="width: 800px !important;" title="选择素材" class-name="vertical-center-modal">
      <Tabs value="name1">
        <TabPane label="图片素材" name="name1">
          <div style="height: 500px !important; overflow-y:auto; overflow-x:hidden">
            <Row :gutter="16">
              <Col v-for="item in 40" :key="item" span="6">
              <div class="m-2">
                <Button class="i-btn"><img
                  class="rounded"
                  src="https://file.iviewui.com/images/image-demo-13.jpg"
                  alt=""></Button>
                <p class="text-sm font-bold text-center">image-demo.jpg</p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="视频素材" name="name2">
          <div style="height: 500px !important; overflow-y:auto; overflow-x:hidden">
            <Row :gutter="16">
              <Col v-for="item in 40" :key="item" span="6">
              <div class="m-2">
                <Button class="i-btn relative"><img
                  class="rounded"
                  src="https://file.iviewui.com/images/image-demo-13.jpg"
                  alt="">
                  <Icon size="30" color="#fff" class="absolute z-10 inset-0 m-auto top-8" type="md-play" />
                </Button>
                <p class="text-sm font-bold text-center">image-demo.jpg</p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="音频素材" name="name3">
          <div style="height: 500px !important; overflow-y:auto; overflow-x:hidden">
            <Row :gutter="16">
              <Col v-for="item in 3" :key="item" span="4">
              <div class="m-2">
                <Button class="i-btn"><img
                  class="rounded"
                  src="https://event.itouchtv.cn/laboratory/images/audio-icon9f9b08e4.png"
                  alt=""></Button>
                <p class="text-sm font-bold text-center">image-demo.mp3</p>
              </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="文稿素材" name="name4">
          <div style="height: 500px !important; overflow-y:auto;">
            <Button
              v-for="item in 6"
              :key="item"
              class="i-btn i-btn-text my-2 mx-4">
              <Card class="card-bg">
                <div style="height: 200px; overflow-y:auto;">
                  巴燕·乌拉孜别克在知道老师要来自己家访问的消息后，早早便在路边等候。太阳很大，但巴燕期盼的心情更为炽热。一下车，老师的手便与她紧紧交握在一起，喜悦洋溢在每个人的脸上。
                  在访问时，由于母亲国语水平较弱，巴燕便主动担当起了“翻译官”的职责，努力表达出母亲口中的每一份喜悦。
                  “巴燕非常优秀，谢谢你们输送这么好的人才到我们学校来。”
                  在大学期间，巴燕的成绩依旧很优秀，专业课平均都在九十分左右。巴燕有想要考研的想法，但英语使她十分苦恼。
                  周老师：“如果我们光按部就班的按照学校的课程走，是‘吃不饱’的。一定要下苦工夫，成绩都是一点一滴积累出来的。”
                  进班级、进宿舍、进食堂，联系学生、联系家长，与学生交朋友。广大师生在活动中增进感情，在交流中相互学习，以落实保障总目标在高校的土地上落地生根。
                  老师们走出校园，走到学生家中，走入学生家长们的心里。实现真正的沟通“零距离”。
                  “通过老师的指导我学到了很多，希望以后能多多开展这样的活动。”
                  万风银说：“这是我们第一次搞这样大规模的家访活动，特别有意义。三进两联一交友活动以前，我们老师跟学生的交流都特别少。我们现在到学生家里来家访，更增进了学校和家长之间的沟通和了解。”
                  “一代人有一代人的使命，青年们是国家的未来。青年一代有理想、有本领、有担当，国家就有前途，民族才能希望。”周丽老师期冀道。
                  家访，访进了心，访出了情。有了小家之间的亲密和谐才能有大国的和谐稳定。三进两联一交友，师生情，家校情，共同为总目标源源不断注入新的动力。
                </div>
              </Card>
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  components: {
  },
  data() {
    return {
      addData: false
    }
  },
  computed: {
  },
  mounted() {
    //
  },
  methods: {
    open() {
      this.addData = true
    }
  }
}
</script>

<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}

.i-btn {
  padding: 2px;
  border: 2px solid transparent;
}
.i-btn-text {
  white-space:inherit;
  text-align: left;
}

.i-btn:focus {
  border: 2px solid #2b85e4;
  box-shadow: none;
}
.card-bg{
  background: #fcfcfc;
}
</style>
