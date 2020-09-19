/**
 * 此类是addHotspot方法的可选参数，没有构造函数，通过对象字面量形式表示
 */
const HotspotOptions = {
    /**
     * String 当鼠标移至某一热区上时出现的文字提示
     */
    text: undefined,

    /**
     * [] 热区响应区域距中心点的扩展偏移值。数组的四个数值分别表示上、右、下、左距离中心点的扩展偏移量。默认偏移量为[5, 5, 5, 5]
     */
    offsets: undefined,

    /**
     * any 由用户填入的自定义数据
     */
    userData: undefined,

    /**
     * Number 热区生效的最小级别
     */
    minZoom: undefined,

    /**
     * Number 热区生效的最大级别
     */
    maxZoom: undefined,
}

export default HotspotOptions