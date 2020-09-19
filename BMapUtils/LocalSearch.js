import BMapUtils from "@/utils/BMapUtils/index";

/**
 * 用于位置检索、周边检索和范围检索
 */
export default class LocalSearch {
    /**
     * 创建一个搜索类实例，其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。
     * 当参数为地图实例时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级
     * 当参数为坐标时，检索位置由该点所在位置确定
     * 当参数为城市名称时，检索会在该城市内进行
     * @param location Map | Point | String
     * @param opts LocalSearchOptions
     */
    constructor(location, opts) {
    }

    /**
     * 根据检索词发起检索。
     * 当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字，多关键字自 1.2 版本支持
     * option:{forceLocal:Boolean, customData:CustomData}
     * forceLocal表示是否将搜索范围约束在当前城市，customData表示检索lbs云服务的数据
     * @param keyword String | String[]
     * @param option Object
     */
    search(keyword, option) {
    }

    /**
     * 根据范围和检索词发起范围检索。
     * 当keyword为数组时将同时执行多关键字检索，最多支持10个关键字，多关键字自 1.2 版本支持
     * option:{customData:CustomData} customData表示检索lbs云服务的数据
     * @param keyword String | String[]
     * @param bounds Bounds
     * @param option Object
     */
    searchInBounds(keyword, bounds, option) {
    }

    /**
     * 根据中心点、半径与检索词发起周边检索
     * 当keyword为数组时将同时执行多关键字的检索，最多支持10个关键字，多关键字自 1.2 版本支持
     * 当center为字符串时，半径参数将忽略
     * 注意：Point类型的中心点自 1.1 版本支持
     * option:{customData:CustomData} customData表示检索lbs云服务的数据
     * @param keyword String | String[]
     * @param center LocalResultPoi | String | Point
     * @param radius Number
     * @param option Object
     */
    searchNearby(keyword, center, radius, option) {
    }

    /**
     * 返回最近一次检索的结果。
     * 如果是多关键字范围检索，则返回一个LocalResult的数组，数组中的结果顺序和范围检索中多关键字数组中顺序一致
     * @returns {LocalResult|LocalResult[]}
     */
    getResults() {
        return new LocalResult() || [new LocalResult()]
    }

    /**
     * 清除最近一次检索的结果
     */
    clearResults() {
    }

    /**
     * 检索特定页面的结果
     * @param page Number
     */
    gotoPage(page) {
    }

    /**
     *  启用根据结果自动调整地图层级，当指定了搜索结果所展现的地图时有效
     */
    enableAutoViewport() {
    }

    /**
     * 禁用根据结果自动调整地图层级
     */
    disableAutoViewport() {
    }

    /**
     * 启用自动选择第一个检索结果
     */
    enableFirstResultSelection() {
    }

    /**
     * 禁用自动选择第一个检索结果
     */
    disableFirstResultSelection() {
    }

    /**
     * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
     * @param location Map | Point | String
     */
    setLocation(location) {
    }

    /**
     *  设置每页容量，取值范围：1 - 100，
     *  对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）
     *  此值只对下一次检索有效
     *  @param num Number
     */
    setPageCapacity(num) {
    }

    /**
     * 返回每页容量，对于多关键字检索，返回每个关键字对应的页面容量
     * @returns {number}
     */
    getPageCapacity() {
        return Number()
    }

    /**
     * 设置检索结束后的回调函数
     * 参数：results: LocalResult 或 Array
     * 如果是多关键字检索，回调函数参数为LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
     * @param results LocalResult|LocalResult[]
     */
    setSearchCompleteCallback(results) {
    }

    /**
     * 设置添加标注后的回调函数
     * 参数： pois: Array ，通过marker属性可得到其对应的标注
     * @param callback Function
     */
    setMarkersSetCallback(callback) {
    }

    /**
     * 设置标注气泡创建时的回调函数
     * 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注
     * html: HTMLElement，气泡内的Dom元素
     * @param callback Function
     */
    setInfoHtmlSetCallback(callback) {
    }

    /**
     * 设置结果列表创建后的回调函数
     * 参数： container: HTMLElement，结果列表所用的HTML元素
     * @param callback Function
     */
    setResultsHtmlSetCallback(callback) {
    }

    /**
     * 返回状态码
     * @returns {{BMAP_STATUS_UNKNOWN_LOCATION: number, BMAP_STATUS_INVALID_REQUEST: number, BMAP_STATUS_PERMISSION_DENIED: number, BMAP_STATUS_TIMEOUT: number, BMAP_STATUS_INVALID_KEY: number, BMAP_STATUS_UNKNOWN_ROUTE: number, BMAP_STATUS_SERVICE_UNAVAILABLE: number, BMAP_STATUS_CITY_LIST: number, BMAP_STATUS_SUCCESS: number}}
     */
    getStatus() {
        return BMapUtils.StatusCode
    };
}