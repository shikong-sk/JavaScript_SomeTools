/**
 * 此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const MapOptions = {
    /**
     * Number 地图允许展示的最小级别
     */
    minZoom: undefined,

    /**
     * Number 地图允许展示的最大级别
     */
    maxZoom: undefined,

    /**
     *    MapType 地图类型，默认为BMAP_NORMAL_MAP
     */
    mapType: global.BMAP_NORMAL_MAP,

    /**
     * Boolean 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
     */
    enableHighResolution: undefined,

    /**
     * Boolean 是否自动适应地图容器变化，默认启用
     */
    enableAutoResize: true,

    /**
     * Boolean 是否开启底图可点功能，默认启用
     */
    enableMapClick: true,
}

export default MapOptions