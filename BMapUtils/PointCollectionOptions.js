/**
 * 该类是PointCollections的可选参数，没有构造函数，通过对象字面量形式表示
 */
const PointCollectionOptions = {
    /**
     * ShapeType 海量点的预设形状
     */
    shape: undefined,

    /**
     * String 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'；哈希字符串'#000000'；rgb字符串，如'rgb(0,0,0)’；rgba字符串，如'rgb(255,0,0,0.1)'；hsl字符串，如'hsl(0,100%,50%)'；hsla字符串，如'hsla(0,100%,50%,0.4)'

     */
    color: undefined,

    /**
     * SizeType 海量点的预设尺寸
     */
    size: undefined,
}

export default PointCollectionOptions
