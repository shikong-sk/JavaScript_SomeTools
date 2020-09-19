/**
 * 该类用于设置地图样式，使用对象字面量形式表示，不可实例化
 */
const MapStyle = {
    /**
     * [] 设置地图上展示的元素种类
     * 支持 point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）
     */
    features: undefined,

    /**
     * string 设置地图底图样式，目前支持normal（默认样式）,dark（深色样式）,light（浅色样式）三种
     */
    style: undefined,
}

export default MapStyle