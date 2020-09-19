/**
 * 此类表示一种地图类型，可以通过实例化此类自定义地图类型。
 */
export default class MapType {

    /**
     * 	此地图类型展示普通街道视图
     */
    BMAP_NORMAL_MAP = global.BMAP_NORMAL_MAP;

    /**
     * 此地图类型展示卫星视图
     */
    BMAP_SATELLITE_MAP = global.BMAP_SATELLITE_MAP;

    /**
     * 	此地图类型展示卫星和路网的混合视图
     */
    BMAP_HYBRID_MAP = global.BMAP_HYBRID_MAP;

    /**
     * 创建MapType对象实例
     * @param name String
     * @param layers TileLayer
     */
    constructor(name, layers) {
    }

    /**
     * 创建MapType对象实例
     * @param tileLayer Array<TileLayer>
     * @param options   MapTypeOptions
     */
    constructor2(tileLayer, options) {
    }

    /**
     * 返回地图类型名称
     * @returns {string}
     */
    getName() {
        return String()
    }

    /**
     * 返回地图类型对应的图层
     * @returns {TileLayer}
     */
    getTileLayer() {
        return new TileLayer()
    }

    /**
     * 返回地图类型允许的最小级别
     * @returns {number}
     */
    getMinZoom() {
        return Number()
    }

    /**
     * 返回地图类型允许的最大级别
     * @returns {number}
     */
    getMaxZoom() {
        return Number()
    }

    /**
     * 返回地图类型所使用的投影实例
     * @returns {Projection}
     */
    getProjection() {
        return new Projection()
    }

    /**
     * 返回地图类型对应的前景色
     * @returns {string}
     */
    getTextColor() {
        return String()
    }

    /**
     * 返回地图类型的提示说明，用于在地图类型控件中提示
     * @returns {string}
     */
    getTips() {
        return String()
    }


}