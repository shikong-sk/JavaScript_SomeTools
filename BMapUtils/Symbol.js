/**
 * 此类表示通过svg的path string创建的矢量图标类
 */
export default class Symbol {
    /**
     * 创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量,opts为矢量图标的样式
     * @param path String | SymbolShapeType
     * @param opts SymbolOptions
     */
    constructor(path, opts) {
    }

    /**
     * 设置矢量图标的路径
     * @param path string | SymbolShape
     */
    setPath(path) {
    }

    /**
     * 设置矢量图标的定位点,该定位点的位置以图标自身为基准
     * @param anchor Size
     */
    setAnchor(anchor) {
    }

    /**
     * 设置矢量图标的旋转角度,参数为角度
     * @param rotation number
     */
    setRotation(rotation) {
    }

    /**
     * 设置矢量图标的缩放比例
     * @param scale number
     */
    setScale(scale) {
    }

    /**
     * 设置矢量图标的线宽
     * @param strokeWeight number
     */
    setStrokeWeight(strokeWeight) {
    }

    /**
     * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
     * @param color string
     */
    setStrokeColor(color) {
    }

    /**
     * 设置矢量图标线的透明度,opacity范围0~1
     * @param opacity number
     */
    setStrokeOpacity(opacity) {
    }

    /**
     * 设置矢量图标填充透明度,opacity范围0~1
     * @param opacity number
     */
    setFillOpacity(opacity) {
    }

    /**
     * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
     * @param color string
     */
    setFillColor(color) {
    }
}