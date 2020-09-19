import Bounds from "@/utils/BMapUtils/Bounds";

/**
 * 此类表示地图上的地面叠加层
 */
export default class GroundOverlay {
    /**
     * 创建地面叠加层
     * @param bounds Bounds
     * @param opts GroundOverlayOptions
     */
    constructor(bounds, opts) {
    }

    /**
     * 设置图层显示的矩形区域
     * @param bounds Bounds
     */
    setBounds(bounds) {}

    /**
     * 返回图层显示的矩形区域
     * @returns {Bounds}
     */
    getBounds() {return new Bounds()}

    /**
     * 设置图层的透明度
     * @param opacity Number
     */
    setOpacity(opacity) {}

    /**
     * 返回图层的透明度
     * @returns {number}
     */
    getOpacity() {return Number()}

    /**
     * 返回图层地址
     * @param url String
     */
    setImageURL(url) {}

    /**
     * 返回图层地址
     * @returns {String}
     */
    getImageURL() {return  String()}

    /**
     * 设置图层显示的最小级别
     * @param level Number
     */
    setDisplayOnMinLevel(level) {}

    /**
     * 返回图层显示的最小级别
     * @returns {number}
     */
    getDisplayOnMinLevel() {return Number()}

    /**
     * 设置图层显示的最大级别
     * @param level Number
     */
    setDisplayOnMaxLevel(level) {}

    /**
     * 返回图层显示的最大级别
     * @returns {number}
     */
    getDisplayOnMaxLevel() {return Number()}
}
