/**
 * 此类表示 NavigationControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const NavigationControlOptions = {
    /**
     * ControlAnchor 控件的停靠位置
     */
    anchor: undefined,

    /**
     * Size 控件的水平偏移值
     */
    offset: undefined,

    /**
     * NavigationControlType 平移缩放控件的类型
     */
    type: undefined,

    /**
     * Boolean 是否显示级别提示信息
     */
    showZoomInfo: undefined,

    /**
     * Boolean 控件是否集成定位功能，默认为false
     */
    enableGeolocation: false,
}

export default NavigationControlOptions