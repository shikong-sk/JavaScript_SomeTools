/**
 * 此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示
 */
const AddressComponent = {
    /**
     * String 门牌号码
     */
    streetNumber: undefined,

    /**
     * String 街道名称
     */
    street: undefined,

    /**
     * String 区县名称
     */
    district: undefined,

    /**
     * String 城市名称
     */
    city: undefined,

    /**
     * String 省份名称
     */
    province: undefined,
}

export default AddressComponent