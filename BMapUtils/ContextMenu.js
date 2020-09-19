import MenuItem from "@/utils/BMapUtils/MenuItem";

/**
 * 此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单
 */
export default class ContextMenu {
    /**
     * 创建一个右键菜单实例
     */
    constructor() {
    }

    /**
     * 添加菜单项
     * @param item MenuItem
     */
    addItem(item) {}

    /**
     * 返回指定索引位置的菜单项，第一个菜单项的索引为0
     * @param index Number
     * @returns {MenuItem}
     */
    getItem(index ) {return new MenuItem()}

    /**
     * 移除菜单项
     * @param item MenuItem
     */
    removeItem(item) {}

    /**
     * 添加分隔符
     */
    addSeparator() {}

    /**
     * 移除指定索引位置的分隔符，第一个分隔符的索引为0
     * @param index Number
     */
    removeSeparator(index) {}
}