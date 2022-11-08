<template>
  <div class="work-review container">
    <Card class="pb-10 pt-4" dis-hover>
      <Form :label-width="100">
        <FormItem label="正文" class="text-lg">
          <Upload :action="fileUrl" multiple type="drag">
            <div style="padding: 20px 0">
              <Icon type="md-add" size="52" style="color:#ccc"/>
              <p>插入素材</p>
            </div>
          </Upload>
        </FormItem>
    </form></Card>
  </div>
</template>

<script>
export default {
  name: 'MaterialUpload',
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
  mounted() {
    console.log(this.$config, 'cc')
    //
  },
  methods: {
  }
}
</script>
