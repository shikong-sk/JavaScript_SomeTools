/**
 * 此类表示地图上的一点，单位为像素
 */
export default class Pixel{
    /**
     * Number x 坐标
     */
    x;

    /**
     * Number y 坐标
     */
    y;

    /**
     * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
     * @param x x 坐标
     * @param y y 坐标
     */
    constructor(x,y) {
    }

    /**
     * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
     * @param other Pixel
     */
    equals(other){return Boolean()}
}