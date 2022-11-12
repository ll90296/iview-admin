<template>
  <div class="work-review container bg-white p-10">
    <Button type="primary" class="mb-5" @click="add">新增</Button>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="action">
        <Poptip
          confirm
          title="确定要删除吗?"
          @on-ok="remove(row.number)">
          <Button type="error" size="small">删除</Button>
        </Poptip>
      </template>
    </Table>
    <Modal
      v-model="showModal"
      :footer-hide="true"
      title="新增练习题">
      <Form ref="formCustom" :model="form" :label-width="100" :rules="ruleValidate">
        <FormItem label="题号" prop="number">
          <Input v-model="form.number" placeholder="请输入题目"></Input>
        </FormItem >
        <FormItem label="题目" prop="testName">
          <Input v-model="form.testName" placeholder="请输入题目"></Input>
        </FormItem >
        <FormItem label="答案解析" prop="testEx">
          <Input v-model="form.testEx" :autosize="{minRows: 2,maxRows: 5}" type="textarea" placeholder="请输入答案解析"></Input>
        </FormItem >

        <Button type="primary" class="mb-5" @click="addQuestion">新增</Button>
        <Table :columns="questionColumns" :data="form.list">
          <template slot-scope="{ row, index }" slot="testOption">
            <FormItem
              :rules="[
                {
                  required: true,
                  validator: (rule, val, callback) => checktestOption(rule, val, callback, row),
                  trigger: 'blur',
                },
              ]"
              :prop="`testOption${index}`">
              <Input v-model="row.testOption" @on-change="inputChange(row,index)"></Input>
            </FormItem >
          </template>
          <template slot-scope="{ row, index }" slot="testOptionEx">
            <FormItem
              :rules="[
                {
                  required: true,
                  trigger: 'blur',
                  validator: (rule, val, callback) => checktestOptionEx(rule, val, callback, row),
                },
              ]"
              :prop="`testOptionEx${index}`">
              <Input v-model="row.testOptionEx" @on-change="inputChange(row,index)"></Input>
            </FormItem >
          </template>
          <template slot-scope="{ row, index }" slot="testOptionAnswer">

            <i-Switch v-model="row.testOptionAnswer" :true-value="1" :false-value="0" @on-change="change(index,row)">
              <span slot="open">正</span>
              <span slot="close">错</span>
            </i-Switch>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <!-- <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button> -->
            <Button type="error" size="small" @click="removeQuestion(index)">删除</Button>
          </template>
        </Table>
      </Form>
      <div style="text-align:center" class="mt-5">
        <Button @click="cancel">取消</Button>
        <Button type="primary" class="ml-2" @click="ok">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { getTestList } from '@/api/practice'
import { addTest, deleteTest } from '@/api/question-bank'
export default {
  name: 'QuestionBank',
  components: {
  },
  data() {
    return {
      columns: [
        {
          title: '序号',
          key: 'number'
        },
        {
          title: '题目',
          key: 'testName'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      questionColumns: [
        {
          title: '选项',
          slot: 'testOption'
        },
        {
          title: '选项内容',
          slot: 'testOptionEx'
        },
        {
          title: '是否为正确答案',
          slot: 'testOptionAnswer'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [],
      form: {
        list: []
      },
      showModal: false,
      ruleValidate: {
        number: [
          { required: true, message: '不可为空', trigger: 'blur' }
        ],
        testName: [
          { required: true, message: '不可为空', trigger: 'blur' }
        ],
        testEx: [
          { required: true, message: '不可为空', trigger: 'blur' }
        ],
        testOption: [
          { required: true, message: '不可为空', trigger: 'blur' }
        ],
        testOptionEx: [
          { required: true, message: '不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    fileUrl() {
      return this.$config.baseUrl.dev + '/files/uploadFile'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      getTestList().then(res => {
        this.total = res.data.total
        this.data = res.data.rows
      })
    },
    remove(number) {
      deleteTest({ number }).then(res => {
        this.getList()
      })
    },
    add() {
      this.showModal = true
    },
    ok() {
      this.$refs['formCustom'].validate((valid) => {
        if (valid) {
          addTest(this.form).then(res => {
            this.getList()
            this.showModal = false
          })
        }
      })
    },
    cancel() {
      this.form = {}
      this.showModal = false
    },
    change(i, row) {
      console.log(row, 'rrr')
      this.form.list.forEach((item, index) => {
        if (i !== index) {
          item.testOptionAnswer = 0
        } else {
          item.testOptionAnswer = 1
        }
      })
    },
    addQuestion() {
      this.form.list.push({
        testOption: '',
        testOptionEx: '',
        testOptionAnswer: 0
      })
    },
    removeQuestion(i) {
      this.form.list.splice(i, 1)
    },
    checktestOptionEx(rule, val, callback, row) {
      if (!row.testOptionEx) {
        callback(new Error('不可为空'))
      } else {
        callback()
      }
    },
    checktestOption(rule, val, callback, row) {
      if (!row.testOption) {
        callback(new Error('不可为空'))
      } else {
        callback()
      }
    },
    inputChange(e, i) {
      this.$set(this.form.list, i, e)
    }
  }
}
</script>
<style lang="less" scoped>
  ::v-deep .ivu-input{
    border-radius: 0 !important;
  }
</style>
