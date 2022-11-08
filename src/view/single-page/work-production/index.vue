<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4">
      <Form :label-width="100">
        <FormItem label="标题" class="text-lg">
          <Input placeholder="内容不能为空"></Input>
        </FormItem>
        <FormItem label="正文" class="text-lg">
          <div class="upload" @click="openDialog">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <div class="upload" @click="openDialog">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <div class="upload" @click="openDialog">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <div class="upload" @click="openDialog">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc" />
              <p>插入素材</p>
            </div>
          </div>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
        </FormItem>
        <FormItem label="封面" class="text-lg">
          <div class="upload" @click="openDialog">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc" />
              <p>插入素材</p>
            </div>
          </div>
        </FormItem>
        <FormItem label="分发平台" class="text-lg">
          <CheckboxGroup>
            <Checkbox label="APP" />
            <Checkbox label="H5" />
            <Checkbox label="微信公众号" />
            <Checkbox label="微博" />
          </CheckboxGroup>
        </FormItem>
      </Form>
      <div class="flex justify-center items-center">
        <Button shape="circle">返回选择素材</Button>
        <Button type="primary" class="ml-4" shape="circle">提交审核</Button>
      </div>
    </Card>
    <Dialog ref="addData"/>
  </div>
</template>

<script>
import Dialog from './dialog.vue'
export default {
  name: 'WorkReview',
  components: {
    Dialog
  },
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
    //
  },
  methods: {
    openDialog() {
      this.$refs.addData.open()
    }
  }
}
</script>

<style>
.upload {
  width: 200px;
  background: #fbfbfd;
  border: 3px dashed #dcdee2;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-transition: border-color 0.2s ease;
  transition: border-color 0.2s ease;
}
</style>
