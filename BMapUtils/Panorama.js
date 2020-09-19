/**
 * 全景类
 * 用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在 Map 类的容器中
 */
import Point from "@/utils/BMapUtils/Point";

export default class Panorama {
    /**
     * 全景的类型
     * 常量区分室内场景和室外场景，其中室内景包括酒店内部、景区内部及高校内部等
     */
    PanoramaSceneType = {
        /**
         * 全景场景点的类型为室内场景
         */
        BMAP_PANORAMA_INDOOR_SCENE:undefined,
        /**
         * 全景场景点的类型为室外场景
         */
        BMAP_PANORAMA_STREET_SCENE:undefined,
    }

    /**
     * 常量表示要在全景内显示的poi类型。
     */
    PanoramaPOIType = {
        /**
         * 酒店
         */
        BMAP_PANORAMA_POI_HOTEL:undefined,

        /**
         * 餐饮
         */
        BMAP_PANORAMA_POI_CATERING:undefined,

        /**
         * 电影院
         */
        BMAP_PANORAMA_POI_MOVIE:undefined,

        /**
         * 公交站点
         */
        BMAP_PANORAMA_POI_TRANSIT:undefined,

        /**
         * 室内
         */
        BMAP_PANORAMA_POI_INDOOR_SCENE:undefined,

        /**
         * 无，即隐藏所有的 poi 类型
         */
        BMAP_PANORAMA_POI_NONE:undefined,
    }

    /**
     * 在给定的结点中创建全景
     * @param container String
     */
    constructor(container) {
    }

    /**
     * 在给定的结点中创建全景
     * @param HTMLElement
     * @param opts PanoramaOptions
     */
    constructor2(HTMLElement, opts) {
    }

    /**
     * 获取全景中道路指示信息
     * @returns {*[]} PanoramaLink
     */
    getLinks() {
        return []
    }

    /**
     * 获取当前全景的id
     * @returns {string}
     */
    getId() {
        return String()
    }

    /**
     * 获取当前全景的位置，通过经纬度描述
     * @returns {Point}
     */
    getPosition() {
        return new Point()
    }

    /**
     * 获取当前全景的视角
     * @returns {PanoramaPov}
     */
    getPov() {
        return new PanoramaPov()
    }

    /**
     * 获取当前全景的级别
     * @returns {number}
     */
    getZoom() {
        return Number()
    }

    /**
     * 设置全景的id
     * @param id String
     */
    setId(id) {
    }

    /**
     * 设置全景的位置
     * @param position Point
     */
    setPosition(position) {
    }

    /**
     * 设置全景的视角
     * @param pov PanoramaPov
     */
    setPov(pov) {
    }

    /**
     * 设置全景的级别
     * @param zoom Number
     */
    setZoom(zoom) {
    }

    /**
     * 开启鼠标滚轮缩放功能 仅对 PC 有效
     */
    enableScrollWheelZoom() {
    }

    /**
     * 关闭鼠标滚轮缩放功能
     */
    disableScrollWheelZoom() {
    }

    /**
     * 显示全景
     */
    show() {
    }

    /**
     * 隐藏全景
     */
    hide() {
    }

    /**
     * 全景场景内添加覆盖物
     * @param overlay PanoramaLabel
     */
    addOverlay(overlay) {
    }

    /**
     * 删除全景内的覆盖物
     * @param overlay PanoramaLabel
     */
    removeOverlay(overlay) {
    }

    /**
     * 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE）
     * @returns {{BMAP_PANORAMA_STREET_SCENE: undefined, BMAP_PANORAMA_INDOOR_SCENE: undefined}}
     */
    getSceneType() {
        return this.PanoramaSceneType
    }

    /**
     * 设置全景可配置参数
     * @param opts PanoramaOptions
     */
    setOptions(opts){}

    /**
     * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型 poi
     * @returns {{BMAP_PANORAMA_POI_NONE: undefined, BMAP_PANORAMA_POI_INDOOR_SCENE: undefined, BMAP_PANORAMA_POI_TRANSIT: undefined, BMAP_PANORAMA_POI_CATERING: undefined, BMAP_PANORAMA_POI_MOVIE: undefined, BMAP_PANORAMA_POI_HOTEL: undefined}}
     */
    setPanoramaPOIType() {
        return this.PanoramaPOIType
    }

}