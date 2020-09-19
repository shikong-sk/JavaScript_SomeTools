import Point from "@/utils/BMapUtils/Point";

/**
 * 此类表示地图上的一个热区
 */
export default class Hotspot {
    /**
     * 创建Hotspot对象实例
     * @param position Point
     * @param options HotspotOptions
     */
    constructor(position, options){}

    /**
     * 获取热区位置坐标
     * @returns {Point}
     */
    getPosition() {return new Point()}

    /**
     * 设置热区位置坐标
     * @param position
     */
    setPosition(position) {
    }

    /**
     * 获取热区提示文本
     * @returns {string}
     */
    getText() {return String()}

    /**
     * 设置热区提示文本
     * @param text String
     */
    setText(text) {}

    /**
     * 获取热区对应的用户数据
     * @returns {*}
     */
    getUserData() {return null}

    /**
     * 设置热区对应的用户数据
     * @param data any
     */
    setUserData(data) {}
}