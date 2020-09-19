import StatusCode from "@/utils/BMapUtils/StatusCode";

/**
 * 返回用户当前的位置。此方法利用浏览器的 geolocation 接口获取用户当前位置，不支持的浏览器将无法获取。
 */
export default class Geolocation {
    /**
     * 创建Geolocation对象实例
     */
    constructor() {
    }

    /**
     * 返回用户当前位置。
     * 当定位成功时，回调函数的参数为 GeolocationResult 对象，否则为 null
     * @param callback Function
     * @param options PositionOptions
     */
    getCurrentPosition(callback, options) {
    }

    /**
     * 返回状态码，当定位成功后，状态码为：BMAP_STATUS_SUCCESS，如果为其他状态码表示不能获取您当前的位置
     * @returns {{BMAP_STATUS_UNKNOWN_LOCATION: number, BMAP_STATUS_INVALID_REQUEST: number, BMAP_STATUS_PERMISSION_DENIED: number, BMAP_STATUS_TIMEOUT: number, BMAP_STATUS_INVALID_KEY: number, BMAP_STATUS_UNKNOWN_ROUTE: number, BMAP_STATUS_SERVICE_UNAVAILABLE: number, BMAP_STATUS_CITY_LIST: number, BMAP_STATUS_SUCCESS: number}}
     */
    getStatus() {
        return StatusCode
    }

    /**
     * 开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效
     */
    enableSDKLocation() {
    }

    /**
     * 关闭SDK辅助定位
     */
    disableSDKLocation() {
    }
}