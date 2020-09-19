/**
 * 此类表示Icon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const IconOptions = {
    /**
     *    Size 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值
     */
    anchor: undefined,

    /**
     *    Size 图片相对于可视区域的偏移值
     */
    imageOffset: undefined,

    /**
     *    Size 信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的anchor
     */
    infoWindowAnchor: undefined,

    /**
     * String 用于打印的图片，此属性只适用于IE6，为了解决IE6在包含滤镜的情况下打印样式不正确的问题
     */
    printImageUrl: undefined
}
export default IconOptions