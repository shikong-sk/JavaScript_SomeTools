/**
 * Circle类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const CircleOptions = {
    /**
     * String 圆形边线颜色
     */
    strokeColor: undefined,

    /**
     * String 圆形填充颜色。当参数为空时，圆形将没有填充效果
     */
    fillColor: undefined,

    /**
     * Number 圆形边线的宽度，以像素为单位
     */
    strokeWeight: undefined,

    /**
     * Number 圆形边线透明度，取值范围0 - 1
     */
    strokeOpacity: undefined,

    /**
     * Number 圆形填充的透明度，取值范围0 - 1
     */
    fillOpacity: undefined,

    /**
     * String 圆形边线的样式，solid或dashed
     */
    strokeStyle: undefined,

    /**
     * Boolean 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear: true,

    /**
     * Boolean 是否启用线编辑，默认为false
     */
    enableEditing: false,

    /**
     * Boolean 是否响应点击事件，默认为true
     */
    enableClicking: true,
}
export default CircleOptions