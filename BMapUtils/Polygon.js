import Point from "@/utils/BMapUtils/Point";
import Bounds from "@/utils/BMapUtils/Bounds";
import Map from "@/utils/BMapUtils/Map";

/**
 * 此类表示一个多边形覆盖物
 */
export default class Polygon {

    /**
     * 创建多边形覆盖物
     * @param points Point[]
     * @param opts PolygonOptions
     */
    constructor(points, opts) {
    }

    /**
     * 设置多边型的点数组
     * @param path Point[]
     */
    setPath(path) {
    }

    /**
     * 返回多边型的点数组
     * @returns {Point[]}
     */
    getPath() {
        return [new Point()]
    }

    /**
     * 设置多边型的边线颜色，参数为合法的CSS颜色值
     * @param color String
     */
    setStrokeColor(color) {
    }

    /**
     * 返回多边型的边线颜色
     * @returns {string}
     */
    getStrokeColor() {
        return String()
    }

    /**
     * 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果
     * @param color String
     */
    setFillColor(color) {
    }

    /**
     * 返回多边形的填充颜色
     * @returns {string}
     */
    getFillColor() {
        return String()
    }

    /**
     * 设置多边形的边线透明度，取值范围0 - 1
     * @param opacity Number
     */
    setStrokeOpacity(opacity) {
    }

    /**
     * 返回多边形的边线透明度
     * @returns {number}
     */
    getStrokeOpacity() {
        return Number()
    }

    /**
     * 设置多边形的填充透明度，取值范围 0 - 1
     * @param opacity Number
     */
    setFillOpacity(opacity) {
    }

    /**
     * 返回多边形的填充透明度
     * @returns {number}
     */
    getFillOpacity() {
        return Number()
    }

    /**
     * 设置多边形边线的宽度，取值为大于等于1的整数
     * @param weight Number
     */
    setStrokeWeight(weight) {
    }

    /**
     * 返回多边形边线的宽度
     * @returns {number}
     */
    getStrokeWeight() {
        return Number()
    }

    /**
     * 设置多边形边线样式为实线或虚线，取值solid或dashed
     * @param style String
     */
    setStrokeStyle(style) {
    }

    /**
     * 返回多边形边线样式
     * @returns {string}
     */
    getStrokeStyle() {
        return String()
    }

    /**
     * 返回覆盖物的地理区域范围
     * @returns {Bounds}
     */
    getBounds() {
        return new Bounds()
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
     * 修改指定位置的坐标。索引index从0开始计数。
     * 例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point
     * @param index Number
     * @param point Point
     */
    setPositionAt(index, point) {
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