/**
 * 此类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const MapTypeControlOptions = {
    /**
     * MapTypeControlType 控件样式
     */
    type: undefined,

    /**
     * MapType[] 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
     */
    mapTypes: undefined,
}

export default MapTypeControlOptions