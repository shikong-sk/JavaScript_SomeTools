import Point from "@/utils/BMapUtils/Point";

/**
 * 此类表示地理坐标的矩形区域
 */
export default class Bounds {
    /**
     * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
     * @param sw
     * @param ne
     */
    constructor(sw, ne) {
    }

    /**
     * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
     * @param other Bounds
     * @returns {boolean}
     */
    equals(other) {
        return Boolean()
    }

    /**
     * 如果点的地理坐标位于此矩形内，则返回true
     * @param point Point
     * @returns {boolean}
     */
    containsPoint(point) {
        return Boolean()
    }

    /**
     * 传入的矩形区域完全包含于此矩形区域中，则返回true
     * @param bounds Bounds
     * @returns {boolean}
     */
    containsBounds(bounds) {
        return Boolean()
    }

    /**
     * 计算与另一矩形的交集区域
     * @param other Bounds
     * @returns {Bounds}
     */
    intersects(other) {
        return Bounds
    }

    /**
     * 放大此矩形，使其包含给定的点
     * @param point Point
     */
    extend(point) {
    }

    /**
     * 返回矩形的中心点
     * @returns {Point}
     */
    getCenter() {
        return Point
    }

    /**
     * 如果矩形为空，则返回true
     * @returns {boolean}
     */
    isEmpty() {
        return Boolean()
    }

    /**
     * 返回矩形区域的西南角
     * @returns {Point}
     */
    getSouthWest() {
        return Point
    }

    /**
     * 返回矩形区域的东北角
     * @returns {Point}
     */
    getNorthEast() {
        return Point
    }

    /**
     * 返回矩形区域的跨度
     * @returns {Point}
     */
    toSpan() {
        return Point
    }
}