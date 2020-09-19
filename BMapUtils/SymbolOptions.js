/**
 * 此类表示Symbol构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const SymbolOptions = {
    /**
     * Size 符号的位置偏移值
     */
    anchor: undefined,

    /**
     * string 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
     */
    fillColor: undefined,

    /**
     * Number 设置矢量图标填充透明度,范围0~1
     */
    fillOpacity: undefined,

    /**
     * Number 设置矢量图标的缩放比例
     */
    scale: undefined,

    /**
     * Number 设置矢量图标的旋转角度,参数为角度
     */
    rotation: undefined,

    /**
     * string 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
     */
    strokeColor: undefined,

    /**
     * Number 设置矢量图标线的透明度,opacity范围0~1
     */
    strokeOpacity: undefined,

    /**
     * Number 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
     */
    strokeWeight: undefined,
}

export default SymbolOptions