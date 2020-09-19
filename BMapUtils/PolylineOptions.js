/**
 * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const PolylineOptions = {
    /**
     *  String 折线颜色
     */
    strokeColor: undefined,

    /**
     *  Number 折线的宽度，以像素为单位
     */
    strokeWeight: undefined,

    /**
     *  Number 折线的透明度，取值范围0 - 1
     */
    strokeOpacity: undefined,

    /**
     *  String 折线的样式，solid 或 dashed
     */
    strokeStyle: undefined,

    /**
     *  Boolean 是否在调用map.clearOverlays清除此覆盖物，默认为 true
     */
    enableMassClear: true,

    /**
     *  Boolean 是否启用线编辑，默认为 false
     */
    enableEditing: false,

    /**
     *  Boolean 是否响应点击事件，默认为 true
     */
    enableClicking: true,

    /**
     *  IconSequence[] 配置贴合折线的图标
     */
    icons: undefined,
}

export default PolylineOptions