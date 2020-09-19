/**
 * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化
 */
export default class Overlay {
    /**
     * 抽象方法，用于初始化覆盖物，
     * 当调用map.addOverlay时，API将调用此方法。
     * 自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的 HTML元素返回
     * @param map Map
     * @returns {HTMLElement}
     */
    initialize(map){	return new HTMLElement()}

    /**
     * 判断覆盖物是否可见
     * @returns {boolean}
     */
    isVisible()	{return Boolean()}

    /**
     * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
     */
    draw(){}

    /**
     * 显示覆盖物。对于自定义覆盖物，此方法会自动将 initialize 方法返回的 HTML 元素样式的 display 属性设置为空
     */
    show(){}

    /**
     * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将 initialize 方法返回的 HTML 元素样式的 display 属性设置为none
     */
    hide(){}
}