/**
 * 此类表示MenuItem构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
 */
const MenuItemOptions = {
    /**
     * Number 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
     */
    width: undefined,

    /**
     * String 指定此菜单项dom的id
     */
    id: undefined,

    /**
     * String | ContextMenuIcon 指定此菜单项的icon URL（大小为17px*17px）
     */
    iconUrl: undefined,
}

export default MenuItemOptions