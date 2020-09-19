import Point from "@/utils/BMapUtils/Point";
import Bounds from "@/utils/BMapUtils/Bounds";
import Map from "@/utils/BMapUtils/Map";

/**
 * 此类表示地图上的圆覆盖物
 */
export default class Circle {
    /**
     * 创建圆覆盖物
     * @param center Point
     * @param radius Number
     * @param opts CircleOptions
     */
    constructor(center, radius, opts) {
    }

    /**
     * 设置圆形的中心点坐标
     * @param center Point
     */
    setCenter(center) {
    }

    /**
     * 返回圆形的中心点坐标
     * @returns {Point}
     */
    getCenter() {
        return new Point()
    }

    /**
     * 设置圆形的半径，单位为米
     * @param radius Number
     */
    setRadius(radius) {
    }

    /**
     * 返回圆形的半径，单位为米
     * @returns {number}
     */
    getRadius() {
        return Number()
    }

    /**
     * 返回圆形的地理区域范围
     * @returns {Bounds}
     */
    getBounds() {
        return new Bounds()
    }

    /**
     * 设置圆形的边线颜色，参数为合法的CSS颜色值
     * @param color String
     */
    setStrokeColor(color) {
    }

    /**
     * 返回圆形的边线颜色
     * @returns {string}
     */
    getStrokeColor() {
        return String()
    }

    /**
     * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果
     * @param color String
     */
    setFillColor(color) {
    }

    /**
     * 返回圆形的填充颜色
     * @returns {string}
     */
    getFillColor() {
        return String()
    }

    /**
     * 设置圆形的边线透明度，取值范围0 - 1
     * @param opacity Number
     */
    setStrokeOpacity(opacity) {
    }

    /**
     * 返回圆形的边线透明度
     * @returns {number}
     */
    getStrokeOpacity() {
        return Number()
    }

    /**
     * 设置圆形的填充透明度，取值范围0 - 1
     * @param opacity Number
     */
    setFillOpacity(opacity) {
    }

    /**
     * 返回圆形的填充透明度
     * @returns {number}
     */
    getFillOpacity() {
        return Number()
    }

    /**
     * 设置圆形边线的宽度，取值为大于等于1的整数
     * @param weight Number
     */
    setStrokeWeight(weight) {
    }

    /**
     * 返回圆形边线的宽度
     * @returns {number}
     */
    getStrokeWeight() {
        return Number()
    }

    /**
     * 设置圆形边线样式为实线或虚线，取值solid或dashed
     * @param style String
     */
    setStrokeStyle(style) {
    }

    /**
     * 返回圆形边线样式
     * @returns {string}
     */
    getStrokeStyle() {
        return String()
    }

    /**
     * 开启编辑功能
     */
    enableEditing() {
    }

    /**
     * 关闭编辑功能
     */
    disableEditing() {
    }

    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear() {
    }

    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear() {
    }

    /**
     * 返回覆盖物所在的map对象
     * @returns {Map}
     */
    getMap() {
        return new Map()
    }

    /**
     * 添加事件监听函数
     * @param event String
     * @param handler Function
     */
    addEventListener(event, handler) {
    }

    /**
     * 移除事件监听函数
     * @param event String
     * @param handler Function
     */
    removeEventListener(event, handler) {
    }
}