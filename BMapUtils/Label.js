import Map from "@/utils/BMapUtils/Map";
import Point from "@/utils/BMapUtils/Point";
import Size from "@/utils/BMapUtils/Size";

/**
 * 此类表示地图上的文本标注
 */
export default class Label {

    /**
     * 设置文本标注样式，该样式将作用于文本标注的容器元素上。
     * 其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" })
     * 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
     * @param styles Object
     */
    setStyle(styles) {
    }

    /**
     * 设置文本标注的内容
     * 支持HTML
     * @param content String
     */
    setContent(content) {
    }

    /**
     * 设置地理坐标 || 设置文本标注坐标。仅当通过 Map.addOverlay() 方法添加的文本标注有效
     * @param position Point
     */
    setPosition(position) {
    }

    /**
     * 获取Label的地理坐标
     * @returns {Point}
     */
    getPosition() {
        return new Point()
    }

    /**
     * 设置文本标注的偏移值
     * @param offset Size
     */
    setOffset(offset) {
    }

    /**
     * 返回文本标注的偏移值
     * @returns {Size}
     */
    getOffset() {
        return new Size()
    }

    /**
     * 设置文本标注的标题，当鼠标移至标注上时显示此标题
     * @param title String
     */
    setTitle(title) {
    }

    /**
     * 返回文本标注的标题
     * @returns {string}
     */
    getTitle() {
        return String()
    }

    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear() {
    }

    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear() {
    }

    /**
     * 设置覆盖物的zIndex
     * @param zIndex Number
     */
    setZIndex(zIndex) {
    }

    /**
     * 返回覆盖物所在的 map 对象
     * @returns {Map}
     */
    getMap() {
        return new Map()
    }

    /**
     * 添加事件监听函数
     * @param event String
     * @param handler Function
     */
    addEventListener(event, handler) {
    }

    /**
     * 移除事件监听函数
     * @param event String
     * @param handler Function
     */
    removeEventListener(event, handler) {
    }
}