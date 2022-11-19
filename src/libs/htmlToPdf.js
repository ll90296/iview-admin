// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install(Vue, options) {
    Vue.prototype.getPdf = function() {
      var title = this.htmlTitle
      // const arr = ['#pdfDom1', '#pdfDom2']

      Promise.all([
        html2Canvas(document.querySelector('#pdfDom1'), {
          allowTaint: true
        }),
        html2Canvas(document.querySelector('#pdfDom2'), {
          allowTaint: true
        })
      ]).then(function([blob1, blob2]) {
        const PDF = new JsPDF('', 'pt', 'a4')
        const contentWidth = blob1.width
        const contentHeight = blob1.height
        const imgWidth = 595.28
        const imgHeight = 592.28 / contentWidth * contentHeight
        PDF.addImage(blob1.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 40, imgWidth, imgHeight)

        PDF.addPage()

        const contentWidth2 = blob2.width
        const contentHeight2 = blob2.height
        const imgWidth2 = 595.28
        const imgHeight2 = 592.28 / contentWidth2 * contentHeight2
        PDF.addImage(blob2.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 40, imgWidth2, imgHeight2)
        PDF.save(title)
      })
    }
  }
}
