import AddressComponent from "@/utils/BMapUtils/AddressComponent";

/**
 * 此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能
 */
export default class GeolocationControl {
    /**
     * 创建一个特定样式的地图定位控件
     * @param type  GeolocationControlOptions
     */
    constructor(type) {
    }

    /**
     * 开始进行定位
     */
    location() {
    }

    /**
     * 返回当前的定位信息。若当前还未定位，则返回null
     * @returns {AddressComponent|null}
     */
    getAddressComponent() {
        return AddressComponent || null;
    }
}