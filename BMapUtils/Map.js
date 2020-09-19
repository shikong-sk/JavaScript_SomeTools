/**
 * 此类是地图API的核心类，用来实例化一个地图
 */
import Bounds from "@/utils/BMapUtils/Bounds";
import Point from "@/utils/BMapUtils/Point";
import MapType from "@/utils/BMapUtils/MapType";
import Size from "@/utils/BMapUtils/Size";
import Viewport from "@/utils/BMapUtils/Viewport";
import Panorama from "@/utils/BMapUtils/Panorama";
import Pixel from "@/utils/BMapUtils/Pixel";
import Overlay from "@/utils/BMapUtils/Overlay";
import InfoWindow from "@/utils/BMapUtils/InfoWindow";

export default class Map {
    /**
     * 实例化地图
     * 实例化之后需调用 .centerAndZoom() 方法 初始化之后才能进行操作
     * @param container 绑定到指定的 #div 容器上
     * @param opts Map 构造函数的可选参数
     */
    constructor(container, opts) {
    }

    /**
     * 启用地图拖拽 默认
     */
    enableDragging() {
    }

    /**
     * 禁用地图拖拽
     */
    disableDragging() {
    }

    /**
     * 启用滚轮缩放
     */
    enableScrollWheelZoom() {
    }

    /**
     * 禁用滚轮缩放 默认
     */
    disableScrollWheelZoom() {
    }

    /**
     * 启用双击放大 默认
     */
    enableDoubleClickZoom() {
    }

    /**
     * 禁用双击放大 默认
     */
    disableDoubleClickZoom() {
    }

    /**
     * 启用键盘操作
     */
    enableKeyboard() {
    }

    /**
     * 禁用键盘操作 默认
     */
    disableKeyboard() {
    }

    /**
     * 启用地图惯性拖拽
     */
    enableInertialDragging() {
    }

    /**
     * 禁用地图惯性拖拽 默认
     */
    disableInertialDragging() {
    }

    /**
     * 启用连续缩放效果
     */
    enableContinuousZoom() {
    }

    /**
     * 禁用连续缩放效果 默认
     */
    disableContinuousZoom() {
    }

    /**
     * 启用双指操作缩放 默认
     */
    enablePinchToZoom() {
    }

    /**
     * 禁用双指操作缩放
     */
    disablePinchToZoom() {
    }

    /**
     * 启用自适应容器尺寸变化 默认
     */
    enableAutoResize() {
    }

    /**
     * 禁用自动适应容器尺寸变化
     */
    disableAutoResize() {
    }

    /**
     * 设置地图默认鼠标样式
     * @param cursor CSS 属性规范中的鼠标样式名
     */
    setDefaultCursor(cursor) {
    }

    /**
     * 获取地图默认鼠标样式
     * @returns {String} 返回 CSS 属性规范中的鼠标样式名
     */
    getDefaultCursor() {
        return String()
    }

    /**
     * 设置拖拽地图时的鼠标样式
     * @param cursor CSS 属性规范中的鼠标样式名
     */
    setDraggingCursor(cursor) {
    }

    /**
     * 获取拖拽地图时的鼠标样式
     * @returns {string} 返回 CSS 属性规范中的鼠标样式名
     */
    getDraggingCursor() {
        return String()
    }

    /**
     * 设置地图允许的最小缩放级别
     * @param zoom int 缩放级别
     */
    setMinZoom(zoom) {
    }

    /**
     * 设置地图允许的最大缩放级别
     * @param zoom int 缩放级别
     */
    setMaxZoom(zoom) {
    }

    /**
     * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
     */
    setMapStyle() {
    }

    /**
     * 将全景实例与 Map 类进行绑定
     */
    setPanorama(Panorama) {
    }

    /**
     * 获取地图可视区域，以地理坐标表示
     * @returns {Bounds} 返回地图可视区域，以地理坐标表示
     */
    getBounds() {
        return new Bounds()
    }

    /**
     * 获取地图当前中心点
     * @returns {Point} 返回地图当前中心点
     */
    getCenter() {
        return new Point()
    }

    /**
     * 获取两点之间的距离
     * @param start Point 起始位置
     * @param end Point 终点位置
     * @returns {number} 返回两点之间的距离 单位：米
     */
    getDistance(start, end) {
        return Number()
    }

    /**
     * 获取地图类型
     * @returns {MapType} 返回地图类型
     */
    getMapType() {
        return new MapType()
    }

    /**
     * 返回地图视图的大小，以像素表示
     * @returns {Size}
     */
    getSize() {
        return new Size()
    }

    /**
     * 根据提供的地理区域或坐标获得最佳的地图视野，
     * 返回的对象中包含 center 和 zoom 属性，分别表示地图的中心点和级别。
     * 此方法仅返回视野信息，不会将新的中心点和级别作用到当前地图上
     * @param view Point[]
     * @param viewportOptions ViewportOptions
     * @returns {Viewport}
     */
    getViewport(view, viewportOptions) {
        return new Viewport()
    }

    /**
     * 返回地图当前缩放级别
     * @returns {number}
     */
    getZoom() {
        return Number()
    }

    /**
     * 获取与 Map 类绑定的全景实例
     * @returns {Panorama}
     */
    getPanorama() {
        return new Panorama()
    }

    /**
     * 初始化地图
     * 如果 center 类型为 Point 时，zoom 必须赋值，范围3-19级
     * 若调用高清底图（针对移动端开发）时，zoom 可赋值范围为 3-18 级
     * 如果 center 类型为字符串时，比如 北京，zoom 可以忽略，地图将自动根据 center 适配最佳 zoom 级别
     * @param center Point|String
     * @param zoom Number
     */
    centerAndZoom(center, zoom) {
    }

    /**
     * 将地图的中心点更改为给定的点。
     * 如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。
     * 可以通过配置强制移动过程不使用动画效果
     * @param center Point
     * @param opts PanOptions
     */
    panTo(center, opts) {
    }

    /**
     * 将地图在水平位置上移动x像素，垂直位置上移动y像素。
     * 如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
     * @param x Number
     * @param y Number
     * @param opts PanOptions
     */
    panBy(x, y, opts) {
    }

    /**
     * 重置地图，恢复地图初始化时的中心点和级别
     */
    reset() {
    }

    /**
     * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
     * @param center Point|String
     */
    setCenter(center) {
    }

    /**
     *    设置地图城市，注意当地图初始化时的类型设置为 BMAP_NORMAL_MAP 时，需
     *    要在调用 centerAndZoom 之前调用此方法设置地图所在城市。
     *    例如：
     *        var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP});
     *        map.setCurrentCity(“北京市”);
     *        map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);
     *    注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
     * @param city String
     */
    setCurrentCity(city) {
    }

    /**
     * 设置地图类型
     * @param mapType MapTypes
     */
    setMapType(mapType) {
    }

    /**
     * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
     * @param view Point[]|Viewport
     * @param viewportOptions ViewportOptions
     */
    setViewport(view, viewportOptions) {
    }

    /**
     * 将视图切换到指定的缩放等级，中心点坐标不变。
     * 注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
     * @param zoom Number
     */
    setZoom(zoom) {
    }

    /**
     * 是否使用高分辨率底图
     * 仅当 mapOptions.enableHighResolution 属性为 true 且设备支持高分辨率时返回 true
     * @returns {boolean}
     */
    highResolutionEnabled() {
        return Boolean()
    }

    /**
     * 放大一级视图
     */
    zoomIn(){}
    /**
     * 缩小一级视图
     */
    zoomOut(){}

    /**
     * 为地图添加热区
     * @param hotspot Hotspot
     */
    addHotspot(hotspot){}
    /**
     * 移除某个地图热区
     * @param hotspot Hotspot
     */
    removeHotspot(hotspot){}
    /**
     * 清空地图所有热区
     */
    clearHotspots(){}

    /**
     * 将控件添加到地图，一个控件实例只能向地图中添加一次
     * @param control Control
     */
    addControl(control){}
    /**
     * 	从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
     * @param control Control
     */
    removeControl(control){}

    /**
     * 返回地图的容器元素。
     * 当创建用户自定义控件时，需要自行实现Control.initialize()方法，
     * 并将控件的容器元素添加到地图上，通过此方法可获得地图容器
     * @returns {HTMLElement}
     */
    getContainer(){return new HTMLElement()}

    /**
     * 添加右键菜单
     * @param menu ContextMenu
     */
    addContextMenu(menu){}
    /**
     * 移除右键菜单
     * @param menu ContextMenu
     */
    removeContextMenu(menu){}

    /**
     * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
     * @param overlay Overlay
     */
    addOverlay(overlay){}
    /**
     * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
     * @param overlay Overlay
     */
    removeOverlay(overlay){}
    /**
     * 清除地图上所有覆盖物
     */
    clearOverlays(){}

    /**
     * 在地图上打开信息窗口
     * @param infoWnd InfoWindow
     * @param point Point
     */
    openInfoWindow(infoWnd, point){}

    /**
     * 关闭在地图上打开的信息窗口
     * 在标注上打开的信息窗口也可通过此方法进行关闭
     */
    closeInfoWindow(){}

    /**
     * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
     * @param point Point
     * @returns {Pixel}
     */
    pointToOverlayPixel(point){return new Pixel()}

    /**
     * 根据覆盖物容器的坐标获取对应的地理坐标
     * @param pixel Pixel
     * @returns {Point} Point
     */
    overlayPixelToPoint(pixel){return new Point()}

    /**
     * 返回地图上处于打开状态的信息窗的实例。
     * 当地图没有打开的信息窗口时，此方法返回 null
     * @returns {InfoWindow | null}
     */
    getInfoWindow(){
        return new InfoWindow() || null
    }

    /**
     * 回返回地图上的所有覆盖物
     * @returns {Overlay[]}
     */
    getOverlays(){return [new Overlay()]}
}
