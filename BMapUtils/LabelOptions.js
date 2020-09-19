/**
 * 此类表示Label构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const LabelOptions = {
    /**
     * Size 文本标注的位置偏移值
     */
    offset: undefined,

    /**
     * Point 文本标注的地理位置
     */
    position: undefined,

    /**
     * Boolean 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear: true,
}

export default LabelOptions