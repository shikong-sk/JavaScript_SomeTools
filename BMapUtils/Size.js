/**
 * 此类以像素表示一个矩形区域的大小
 */
export default class Size{
    /**
     * 以指定的宽度和高度创建一个矩形区域大小对象
     * @param width Number 水平方向的数值
     * @param height Number 垂直方向的数值
     */
    constructor(width,height) {
    }

    /**
     * Number 水平方向的数值
     */
    width;

    /**
     * Number 垂直方向的数值
     */
    height;

    /**
     * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
     * @param other Size
     * @returns {boolean} Boolean
     */
    equals(other){return Boolean()}
}