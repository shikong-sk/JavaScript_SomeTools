/**
 * 此类表示CustomLayer构造函数的可选参数
 */
const CustomLayerOptions = {
    /**
     * String 使用云检索v1版本的databoxId
     */
    databoxId:undefined,

    /**
     * String 使用云检索v2版本的geotableId
     */
    geotableId:undefined,

    /**
     * String 检索关键字
     */
    q:undefined,

    /**
     * String 空格分隔的多字符串
     */
    tags:undefined,

    /**
     * String 过滤条件,参考lbsyun.baidu.com/index.php?title=lbscloud/api/geosearch
     */
    filter:undefined,

    /**
     * Enum PointDensityType 麻点密度常量
     */
    pointDensityType:undefined,
}
export default CustomLayerOptions