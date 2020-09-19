/**
 * 此类表示位置检索或路线规划的一个结果点，没有构造函数，可通过对象字面量形式表示。
 */
const LocalResultPoi = {
    /**
     * String 结果的名称标题
     */
    title: undefined,

    /**
     * Point 该结果所在的地理位置
     */
    point: undefined,

    /**
     * String 在百度地图中展示该结果点的详情信息链接
     */
    url: undefined,

    /**
     * String 地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次
     */
    address: undefined,

    /**
     * String 所在城市
     */
    city: undefined,

    /**
     * String 电话，根据数据部分提供
     */
    phoneNumber: undefined,

    /**
     * String 邮政编码，根据数据部分提供
     */
    postcode: undefined,

    /**
     * PoiType 类型，根据数据部分提供
     */
    type: undefined,

    /**
     * Boolean 是否精确匹配。只适用LocalSearch的search方法检索的结果
     */
    isAccurate: undefined,

    /**
     * String 所在省份
     */
    province: undefined,

    /**
     * String[] POI的标签，如商务大厦、餐馆等。
     * 目前只有LocalSearch的回调函数onSearchComplete(result)中的result和Geocoder.getLocation的回调函数的参数GeocoderResult.surroundingPois涉及的LocalResultPoi有tags字段。其他API涉及的LocalResultPoi没有该字段
     */
    tags: undefined,

    /**
     * String 在百度地图详情页面展示该结果点的链接
     * localsearch的结果中才有
     */
    detailUrl: undefined,
}
export default LocalResultPoi