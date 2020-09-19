/**
 * 此类表示一条版权信息。可作为CopyrightControl.addCopyright()方法的参数。它没有构造函数，但可通过对象字面量形式表示
 */
const Copyright = {
    /**
     * Number 该版权信息的唯一标识符
     */
    id: undefined,

    /**
     * String 该版权的文本信息，用于显示在地图上，支持HTML内容
     */
    content: undefined,

    /**
     * Bounds 该版权信息所适用的地理区域
     */
    bounds: undefined,
}

export default Copyright