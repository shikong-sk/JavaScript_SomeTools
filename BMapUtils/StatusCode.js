/**
 * 此常量用于描述对象当前状态
 */
const StatusCode = {
    /**
     * 状态码：检索成功
     */
    BMAP_STATUS_SUCCESS: 0,

    /**
     * 状态码：城市列表
     */
    BMAP_STATUS_CITY_LIST: 1,

    /**
     * 状态码：位置结果未知
     */
    BMAP_STATUS_UNKNOWN_LOCATION: 2,

    /**
     * 状态码：导航结果未知
     */
    BMAP_STATUS_UNKNOWN_ROUTE: 3,

    /**
     *    非法密钥
     */
    BMAP_STATUS_INVALID_KEY: 4,

    /**
     *    非法请求
     */
    BMAP_STATUS_INVALID_REQUEST: 5,

    /**
     *    没有权限
     */
    BMAP_STATUS_PERMISSION_DENIED: 6,

    /**
     *    服务不可用
     */
    BMAP_STATUS_SERVICE_UNAVAILABLE: 7,

    /**
     *    超时
     */
    BMAP_STATUS_TIMEOUT: 8,
}

export default StatusCode