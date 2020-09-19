/**
 * 此类表示InfoWindow构造函数的可选参数，它没有构造函数，但可通过对象字面量形式表示
 */
const InfoWindowOptions = {
    /**
     * Number 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
     */
    width: undefined,

    /**
     * Number 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
     */
    height: undefined,

    /**
     * Number 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
     */
    maxWidth: undefined,

    /**
     * Size 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
     */
    offset: undefined,

    /**
     * String 信息窗标题文字，支持HTML内容
     */
    title: undefined,

    /**
     *  Boolean 是否开启信息窗口打开时地图自动移动（默认开启）
     */
    enableAutoPan: true,

    /**
     *  Boolean 是否开启点击地图关闭信息窗口（默认开启）
     */
    enableCloseOnClick: true,

    /**
     *  Boolean 是否在信息窗里显示短信发送按钮（默认开启）
     */
    enableMessage: true,

    /**
     *  String 自定义部分的短信内容，可选项。
     *  完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为 140 个字
     */
    message: undefined,
}

export default InfoWindowOptions