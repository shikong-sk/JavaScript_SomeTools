/**
 * 此类表示一个菜单项
 */
export default class MenuItem {

    /**
     * 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback
     * @param text String
     * @param callback Function
     * @param opts MenuItemOptions
     */
    constructor(text, callback, opts){}

    /**
     * 设置菜单项显示的文本
     * @param text String
     */
    setText(text) {}

    /**
     * 设置菜单项的icon
     * @param iconUrl String
     */
    setIcon(iconUrl) {}

    /**
     * 启用菜单项
     */
    enable() {}

    /**
     * 禁用菜单项
     */
    disable() {}
}
