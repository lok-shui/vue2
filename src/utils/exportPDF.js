import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

/**
 * @param table    必填  要导出的table  通过级联选择器选择的元素
 * @param thead    可选
 * @param tbody    可选
 * @param setTable  可选  主要控制导出table的高度
 */

export function htmlToPdf (table, thead, tbody, setTable) {
  let theader = thead || ''
  let tbodyer = tbody || ''
  let setTabler = setTable || ''
  let originHeight = setTabler.offsetHeight || table.offsetHeight
  if (theader && tbodyer && setTabler) {
    setTabler.style.height = (tbodyer.offsetHeight + theader.offsetHeight) + 'px'
  }
  return html2Canvas(table, {
    // 保证跨域图片的显示
    useCORS: true
  }).then(function (canvas) {
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageHeight = contentWidth / 592.28 * 841.89
    let leftHeight = contentHeight
    let position = 15
    let imgWidth = 595.28
    let imgHeight = 592.28 / contentWidth * contentHeight
    // 将图片转化为dataUrl
    let pageData = canvas.toDataURL('image/jpeg', 1.0)
    // 三个参数，第一个方向（landscape横向？），第二个尺寸，第三个尺寸格式
    let PDF = new JsPDF('', 'pt', 'a4')
    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    // 当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      //  0, 0, 控制文字距离左边，与上边的距离，后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
      PDF.addImage(pageData, 'JPEG', 20, position, imgWidth - 40, imgHeight)
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, 'JPEG', 20, position, imgWidth - 40, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        // 避免添加空白页
        if (leftHeight > 0) {
          PDF.addPage()
        }
      }
    }
    let title = new Date().getTime()
    PDF.save(title + '.pdf')
    setTabler.style.height = originHeight + 'px'
  })
}
