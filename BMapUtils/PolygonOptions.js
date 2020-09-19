/**
 * 此类表示 Polygon 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const PolygonOptions = {
    /**
     * String 边线颜色
     */
    strokeColor: undefined,

    /**
     * String 填充颜色。当参数为空时，折线覆盖物将没有填充效果
     */
    fillColor: undefined,

    /**
     * Number 边线的宽度，以像素为单位
     */
    strokeWeight: undefined,

    /**
     * Number 边线透明度，取值范围0 - 1
     */
    strokeOpacity: undefined,

    /**
     * Number 填充的透明度，取值范围0 - 1
     */
    fillOpacity: undefined,

    /**
     * String 边线的样式，solid 或 dashed
     */
    strokeStyle: undefined,

    /**
     * Boolean 是否在调用map.clearOverlays清除此覆盖物，默认为 true
     */
    enableMassClear: true,

    /**
     * Boolean 是否启用线编辑，默认为 false
     */
    enableEditing: false,

    /**
     * Boolean 是否响应点击事件，默认为 true
     */
    enableClicking: true,
}
export default PolygonOptions