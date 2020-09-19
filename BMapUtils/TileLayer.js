import Copyright from "@/utils/BMapUtils/Copyright";

/**
 * 此类表示一个地图图层，您可以向地图中添加自定义图层
 */
export default class TileLayer {
    /**
     * 创建一个地图图层实例
     * @param opts TileLayerOptions
     */
    constructor(opts) {
    }

    /**
     * String 抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供
     * 如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口
     * @param tileCoord Pixel
     * @param zoom Number
     */
    getTilesUrl(tileCoord, zoom) {
    }

    /**
     * 返回地图图层数据的版权对象
     * @returns {{bounds: undefined, id: undefined, content: undefined}|null}
     */
    getCopyright() {
        return Copyright || null
    }

    /**
     * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
     * @returns {Boolean}
     */
    isTransparentPng() {
        return Boolean()
    }
}