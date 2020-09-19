/**
 * 此类表示点击麻点图返回的，没有构造函数，通过对象字面量形式表示
 */
const Custompoi = {
    /**
     * String 返回数据的id
     */
    poiId: undefined,

    /**
     * String 数据集的id
     */
    databoxId: undefined,

    /**
     * String 结果的名称标题
     */
    title: undefined,

    /**
     * String 地址
     */
    address: undefined,

    /**
     * String 电话
     */
    phoneNumber: undefined,

    /**
     * String 邮政编码
     */
    postcode: undefined,

    /**
     * Number 结果所在省的编码
     */
    provinceCode: undefined,

    /**
     * String 结果所在省的名称
     */
    province: undefined,

    /**
     * Number 结果所在城市的编码
     */
    cityCode: undefined,

    /**
     * String 结果所在城市的名称
     */
    city: undefined,

    /**
     * Number 结果所在区县的编码
     */
    districtCode: undefined,

    /**
     * String 结果所在区县的名称
     */
    district: undefined,

    /**
     * Point 结果所在的地理位置
     */
    point: undefined,

    /**
     * String[] 结果的筛选标签
     */
    tags: undefined,

    /**
     * Number 结果的类别id
     */
    typeId: undefined,

    /**
     * Json 用户扩展数据，结构根据用户的自定义
     */
    extendedData: undefined,
}

export default Custompoi