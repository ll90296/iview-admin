<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4">
      <Form :label-width="100">
        <FormItem label="标题" class="text-lg">
          <Input placeholder="内容不能为空"></Input>
        </FormItem>
        <FormItem label="正文" class="text-lg">
          <Upload multiple type="drag" action="fileUrl">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <Upload class="mt-6" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <Upload class="mt-6" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
          <Upload class="mt-6" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
          <Input :rows="6" class="mt-6" type="textarea" placeholder="再次输入文本"></Input>
        </FormItem>
        <FormItem label="封面" class="text-lg">
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="分发平台" class="text-lg">
          <CheckboxGroup>
            <Checkbox label="APP"/>
            <Checkbox label="H5"/>
            <Checkbox label="微信公众号"/>
            <Checkbox label="微博"/>
          </CheckboxGroup>
        </FormItem>
      </Form>
      <div class="flex justify-center items-center">
        <Button shape="circle">返回选择素材</Button>
        <Button type="primary" class="ml-4" shape="circle">提交审核</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ManuscriptsUpload',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    fileUrl() {
      return this.$config.baseUrl.dev + '/files/uploadFile'
    }
  },
  methods: {
  }
}
</script>
