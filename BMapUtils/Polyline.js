import Point from "@/utils/BMapUtils/Point";
import Bounds from "@/utils/BMapUtils/Bounds";
import Map from "@/utils/BMapUtils/Map";

/**
 * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层
 */
export default class Polyline {
    /**
     * 创建折线覆盖物对象
     * @param points Point[]
     * @param opts PolylineOptions
     */
    constructor(points, opts) {
    }

    /**
     * 设置折线的点数组
     * @param path Point[]
     */
    setPath(path) {
    }

    /**
     * 返回折线的点数组
     * @returns {Point[]}
     */
    getPath() {
        return [new Point()]
    }

    /**
     * 设置折线的颜色
     * @param color String
     */
    setStrokeColor(color) {
    }

    /**
     * 返回折线的颜色
     * @returns {string}
     */
    getStrokeColor() {
        return String()
    }

    /**
     * 设置透明度，取值范围 0 - 1
     * @param opacity Number
     */
    setStrokeOpacity(opacity) {
    }

    /**
     * 返回透明度
     * @returns {number}
     */
    getStrokeOpacity() {
        return Number()
    }

    /**
     * 设置线的宽度，范围为大于等于1的整数
     * @param weight Number
     */
    setStrokeWeight(weight) {
    }

    /**
     * 返回线的宽度
     * @returns {number}
     */
    getStrokeWeight() {
        return Number()
    }

    /**
     * 设置是为实线或虚线，solid 或 dashed
     * @param style String
     */
    setStrokeStyle(style) {
    }

    /**
     * 返回当前线样式状态，实线或者虚线
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
     * 修改指定位置的坐标
     * 索引index从0开始计数
     * 例如setPointAt(2, point)代表将折线的第3个点的坐标设为 point
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