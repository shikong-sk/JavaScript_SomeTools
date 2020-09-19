/**
 * 此类表示街道地图投影类，一般通过MapType的getProjection方法获得实例
 */
const MercatorProjection = {
    /**
     * Pixel 抽象，根据球面坐标获得平面坐标
     * @param lngLat Point
     */
    lngLatToPoint(lngLat) {
    },

    /**
     * Point 抽象，根据平面坐标获得球面坐标
     * @param point Pixel
     */
    pointToLngLat(point) {
    },
}

export default MercatorProjection