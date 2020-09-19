/**
 * 类表示LocalSearch的检索结果，没有构造函数，通过LocalSearch.getResults()方法或LocalSearch的onSearchComplete回调函数的参数得到
 */
export default class LocalResult {
    /**
     * String 本次检索的关键词
     */
    keyword;

    /**
     * LocalResultPoi 周边检索的中心点（仅当周边检索时提供）
     */
    center;

    /**
     * Number 周边检索的半径（仅当周边检索时提供）
     */
    radius;

    /**
     *  Bounds 范围检索的地理区域（仅当范围检索时提供）
     */
    bounds;

    /**
     * String 本次检索所在的城市
     */
    city;

    /**
     * String 更多结果的链接，到百度地图进行搜索
     */
    moreResultsUrl;

    /**
     * String 本次检索所在的省份
     */
    province;

    /**
     *  String[] 搜索建议列表。（当关键词是拼音或拼写错误时给出的搜索建议）
     */
    suggestions;

    /**
     * 返回索引指定的结果。索引0表示第1条结果
     * @param i Number
     * @returns {LocalResultPoi}
     */
    getPoi(i){return LocalResultPoi}

    /**
     * 返回当前页的结果数
     * @returns {number}
     */
    getCurrentNumPois() {return Number()}

    /**
     * 返回总结果数
     * @returns {number}
     */
    getNumPois(){return Number()}

    /**
     * 返回总页数
     * @returns {number}
     */
    getNumPages() {return Number()}

    /**
     * 返回页数序号
     * @returns {number}
     */
    getPageIndex() {return Number()}

    /**
     * 返回城市列表
     * 数组元素对象包含如下属性： city: String，城市名 numResults: Number，结果数
     * @returns {{}[]}
     */
    getCityList() {return [{}]}
}