/**
 * 此类表示一个地理坐标点
 */
export default class Point{
    /**
     * 以指定的经度和纬度创建一个地理点坐标
     * @param lng
     * @param lat
     */
    constructor(lng,lat) {}

    /**
     * Number 地理经度
     */
    lng;

    /**
     * Number 地理纬度
     */
    lat;

    /**
     * 判断坐标点是否相等
     * 当且仅当两点的经度和纬度均相等时返回 true
     * @param other Point
     * @returns {boolean}
     */
    equals(other){return Boolean()}

}