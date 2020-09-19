/**
 * 此类表示Marker构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
const MarkerOptions = {
    /**
     *    Size    标注的位置偏移值
     */
    offset: undefined,

    /**
     *    Icon    标注所用的图标对象
     */
    icon: undefined,

    /**
     *    Boolean    是否在调用map.clearOverlays清除此覆盖物，默认为 true
     */
    enableMassClear: true,

    /**
     *    Boolean    是否启用拖拽，默认为 false
     */
    enableDragging: false,

    /**
     *    Boolean    是否响应点击事件。默认为 true
     */
    enableClicking: true,

    /**
     *    Boolean 拖拽标注时，标注是否开启离开地图表面效果。默认为 false
     */
    raiseOnDrag: false,

    /**
     *    String    拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
     */
    draggingCursor: undefined,

    /**
     *    Number    旋转角度
     */
    rotation: undefined,

    /**
     *    Icon    阴影图标
     */
    shadow: undefined,

    /**
     *    String    鼠标移到marker上的显示内容
     */
    title: undefined,
}
export default MarkerOptions