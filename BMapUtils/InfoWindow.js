import Point from "@/utils/BMapUtils/Point";

/**
 * 此类表示地图上包含信息的窗口
 */
export default class InfoWindow {

    /**
     * 创建一个信息窗实例，其中 content 支持 HTML 内容。1.2版本开始 content 参数支持传入 DOM 结点
     * @param content String|HTMLElement
     * @param opts InfoWindowOptions
     */
    constructor(content, opts) {
    }

    /**
     * 设置信息窗口的宽度，单位像素。取值范围：220 - 730
     * @param width Number
     */
    setWidth(width )	{}

    /**
     * 设置信息窗口的高度，单位像素。取值范围：60 - 650
     * @param height Number
     */
    setHeight(height)	{}

    /**
     * 重绘信息窗口，当信息窗口内容发生变化时进行调用
     */
    redraw()	{}

    /**
     * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点
     * @param title String|HTMLElement
     */
    setTitle(title)	{}

    /**
     * 返回信息窗口标题
     * @returns {string | HTMLElement}
     */
    getTitle(){return String() || new HTMLElement()}

    /**
     * 设置信息窗口内容。支持 HTML 内容。1.2版本开始 content 参数支持传入 DOM 结点
     * @param content String | HTMLElement
     */
    setContent(content)	{}

    /**
     * 返回信息窗口内容
     * @returns {string | HTMLElement}
     */
    getContent(){return String() || new HTMLElement()}

    /**
     * 返回信息窗口的位置
     * @returns {Point}
     */
    getPosition(){	return new Point()}

    /**
     * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
     */
    enableMaximize()	{}

    /**
     * 禁用窗口最大化功能
     */
    disableMaximize()	{}

    /**
     * 返回信息窗口的打开状态
     * @returns {boolean}
     */
    isOpen()	{return Boolean()}

    /**
     * 信息窗口最大化时所显示内容，支持HTML内容
     * @param content String
     */
    setMaxContent(content)	{}

    /**
     * 最大化信息窗口
     */
    maximize()	{}

    /**
     * 还原信息窗口
     */
    restore()	{}

    /**
     * 开启打开信息窗口时地图自动平移
     */
    enableAutoPan()	{}

    /**
     * 关闭打开信息窗口时地图自动平移
     */
    disableAutoPan()	{}

    /**
     * 开启点击地图时关闭信息窗口
     */
    enableCloseOnClick()	{}

    /**
     * 关闭点击地图时关闭信息窗口
     */
    disableCloseOnClick()	{}

    /**
     * 添加事件监听函数
     * @param event String
     * @param handler Function
     */
    addEventListener(event, handler)	{}

    /**
     * 移除事件监听函数
     * @param event String
     * @param handler Function
     */
    removeEventListener(event, handler){}
}