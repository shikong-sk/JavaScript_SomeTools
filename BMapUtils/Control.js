import BMapUtils from "@/utils/BMapUtils/index";
import Size from "@/utils/BMapUtils/Size";

/**
 * 此类是所有控件的基类，您可以通过此类来实现自定义控件。
 * 所有控件均包含 Control类的属性、方法和事件。
 * 通过 Map.addControl() 方法可将控件添加到地图上
 */
export default class Control {
    /**
     * 创建一个控件原型实例，通过该原型实例可创建自定义控件
     */
    constructor() {
    }

    /**
     * ControlAnchor 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
     */
    defaultAnchor;

    /**
     * Size 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
     */
    defaultOffset;

    /**
     * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。
     * 自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。
     * DOM元素需要添加到地图的容器中，使用 Map.getContainer()方法可获得地图容器元素
     * @param map Map
     * @returns {HTMLElement}
     */
    initialize(map) {
        return new HTMLElement()
    }

    /**
     * 设置控件停靠的位置
     * @param anchor ControlAnchor
     */
    setAnchor(anchor) {
    }

    /**
     * 返回控件停靠的位置
     * @returns {{BMAP_ANCHOR_TOP_LEFT: undefined, BMAP_ANCHOR_BOTTOM_RIGHT: undefined, BMAP_ANCHOR_BOTTOM_LEFT: undefined, BMAP_ANCHOR_TOP_RIGHT: undefined}}
     */
    getAnchor() {
        return BMapUtils.ControlAnchor
    }

    /**
     * 设置控件停靠的偏移量
     * @param offset Size
     */
    setOffset(offset) {
    }

    /**
     * 返回控件停靠的偏移量
     * @returns {Size}
     */
    getOffset() {
        return new Size()
    }

    /**
     * 显示控件
     */
    show() {
    }

    /**
     * 隐藏控件
     */
    hide() {
    }

    /**
     * 判断控件的可见性
     * @returns {boolean}
     */
    isVisible() {
        return Boolean()
    }
}