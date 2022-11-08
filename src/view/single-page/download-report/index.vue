<template>
  <div class="download-report">
    <Card class="p-4">
      <div class="flex justify-center mb-4">
        <Button size="large" type="primary" shape="circle">下载实验报告</Button>
      </div>
      <pdf
        ref="pdf"
        :src="url"/>
    </Card>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'DownloadReport',
  components: {
    pdf
  },
  data() {
    return {
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
    }
  },
  computed: {
  },
  mounted() {
    //
  },
  methods: {
  }
}
</script>
