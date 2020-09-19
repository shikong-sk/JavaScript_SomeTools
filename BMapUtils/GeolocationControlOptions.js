/**
 * 此类表示GeolocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const GeolocationControlOptions = {
    /**
     * ControlAnchor 控件的停靠位置，默认定位到地图的右下角
     */
    anchor: undefined,

    /**
     * Size 控件的水平偏移值
     */
    offset: undefined,

    /**
     * Boolean 是否显示定位信息面板。默认显示定位信息面板
     */
    showAddressBar: true,

    /**
     * Boolean 添加控件时是否进行定位。默认添加控件时不进行定位
     */
    enableAutoLocation: false,

    /**
     *    Icon 可自定义定位中心点的Icon样式
     */
    locationIcon: undefined,
}

export default GeolocationControlOptions