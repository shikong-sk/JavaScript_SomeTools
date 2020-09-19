import BMapUtils from "@/utils/BMapUtils/index";

/**
 * 此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作
 */
export default class NavigationControl {
    /**
     * 创建一个特定样式的地图平移缩放控件
     * @param type NavigationControlOptions
     */
    constructor(type) {
    }

    /**
     * 返回平移缩放控件的类型
     * @returns {{BMAP_NAVIGATION_CONTROL_ZOOM: undefined, BMAP_NAVIGATION_CONTROL_SMALL: undefined, BMAP_NAVIGATION_CONTROL_PAN: undefined, BMAP_NAVIGATION_CONTROL_LARGE: undefined}}
     */
    getType() {
        return BMapUtils.NavigationControlType
    }

    /**
     * 设置平移缩放控件的类型
     * @param type NavigationControlType
     */
    setType(type) {
    }
}