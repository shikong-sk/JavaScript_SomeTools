import Icon from "@/utils/BMapUtils/Icon";
import Point from "@/utils/BMapUtils/Point";
import Size from "@/utils/BMapUtils/Size";
import Label from "@/utils/BMapUtils/Label";
import Map from "@/utils/BMapUtils/Map";

/**
 * 此类表示地图上一个图像标注。
 */
export default class Marker {
    /**
     * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
     * @param point 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
     * @param opts MarkerOptions
     */
    constructor(point, opts) {
    }

    /**
     * 打开信息窗
     * @param infoWnd InfoWindow
     */
    openInfoWindow(infoWnd) {
    }

    /**
     * 关闭信息窗
     */
    closeInfoWindow() {
    }

    /**
     * 设置标注所用的图标对象
     * @param icon Icon
     */
    setIcon(icon) {
    }

    /**
     * 返回标注所用的图标对象
     * @returns {Icon}
     */
    getIcon() {
        return Icon
    }

    /**
     * 设置标注的地理坐标
     * @param position Point
     */
    setPosition(position) {
    }

    /**
     * 返回标注的地理坐标
     * @returns {Point}
     */
    getPosition() {
        return new Point()
    }

    /**
     * 设置标注的偏移值
     * @param offset Size
     */
    setOffset(offset) {
    }

    /**
     * 返回标注的偏移值
     * @returns {Size}
     */
    getOffset() {
        return new Size()
    }

    /**
     * 返回标注的文本标注
     * @returns {Label}
     */
    getLabel() {
        return new Label()
    }

    /**
     * 为标注添加文本标注
     * @param label Label
     */
    setLabel(label) {
    }

    /**
     * 设置标注的标题，当鼠标移至标注上时显示此标题
     * @param title String
     */
    setTitle(title) {
    }

    /**
     * 返回标注的标题
     * @returns {string}
     */
    getTitle() {
        return String()
    }

    /**
     * 将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果
     * @param isTop Boolean
     */
    setTop(isTop) {
    }

    /**
     * 开启标注拖拽功能
     */
    enableDragging() {
    }

    /**
     * 关闭标注拖拽功能
     */
    disableDragging() {
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
     * 返回覆盖物所在的map对象
     * @returns {Map}
     */
    getMap() {
        return new Map()
    }

    /**
     * 添加右键菜单
     * @param menu ContextMenu
     */
    addContextMenu(menu) {
    }

    /**
     * 移除右键菜单
     * @param menu ContextMenu
     */
    removeContextMenu(menu) {
    }

    /**
     *  设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置
     * @param animation Animation | Null
     */
    setAnimation(animation) {
    }

    /**
     * 设置点的旋转角度
     * @param rotation Number
     */
    setRotation(rotation) {
    }

    /**
     * 获取点的旋转角度
     * @returns {number}
     */
    getRotation() {
        return Number()
    }

    /**
     * 设置标注阴影图标 Icon
     * @param shadow
     */
    setShadow(shadow) {
    }

    /**
     * 获取标注阴影图标
     * @returns {Icon}
     */
    getShadow() {
        return Icon
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