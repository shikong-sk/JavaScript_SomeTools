/**
 * 此类是MapType构造函数的可选参数，不能实例化，通过对象字面量形式表示
 */
const MapTypeOptions = {
    /**
     * Number 该类型地图的最小级别
     */
    minZoom: undefined,

    /**
     * Number 该类型地图的最大级别
     */
    maxZoom: undefined,

    /**
     * String 当没有图块时所显示的错误图片地址。默认为透明图
     */
    errorImageUrl: undefined,

    /**
     * Number 地图类型对应的前景色
     */
    textColor: undefined,

    /**
     * String 提示说明信息，用于在地图类型控件中进行提示
     */
    tips: undefined,
}
export default MapTypeOptions