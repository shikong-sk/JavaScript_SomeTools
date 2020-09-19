/**
 * 此类作为getCurrentPosition的可选参数，不能实例化。
 */
const PositionOptions = {
    /**
     *    Boolean    要求浏览器获取最佳结果
     */
    enableHighAccuracy: undefined,

    /**
     *    Number    超时时间
     */
    timeout: undefined,

    /**
     * Number    允许返回指定时间内的缓存结果。如果此值为0，则浏览器将立即获取新定位结果
     */
    maximumAge: undefined,
}

export default PositionOptions