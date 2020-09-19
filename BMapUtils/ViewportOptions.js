/**
 * 此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化
 */
const ViewportOptions = {
    /**
     * Boolean 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
     */
    enableAnimation: undefined,

    /**
     * Number[] 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
     */
    margins: undefined,

    /**
     *    Number    地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值
     *    例如 map.setViewport 计算出地图的级别为 10，如果 zoomFactor 为 -1，则最终的地图级别为 9
     */
    zoomFactor: undefined,

    /**
     *    Number    改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
     */
    delay: undefined,
}

export default ViewportOptions