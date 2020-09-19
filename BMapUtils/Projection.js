/**
 * 此类表示地图投影抽象基类，不可实例化，但可通过MapType的getProjection方法获得
 */
const Projection = {
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

export default Projection