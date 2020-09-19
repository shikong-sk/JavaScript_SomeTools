/**
 * 此类表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器
 */
export default class PointCollection {
    /**
     * 创建海量点类。points为点的坐标集合，opts为点的绘制样式
     * @param points Point[]
     * @param opts PointCollectionOptions
     */
    constructor(points, opts) {
    }

    /**
     * 设置要在地图上展示的点坐标集合
     * @param points Point[]
     */
    setPoints(points) {
    }

    /**
     * 点的样式
     * 包括:
     * 大小"size"（可选,默认正常尺寸10*10px，SizeType类型）
     * 形状"shape"（可选，默认圆形，ShapeType类型）
     * 颜色"color"（可选，字符串类型）
     * @param styles PointCollectionOption
     */
    setStyles(styles) {

    }

    /**
     * 清除海量点
     */
    clear() {
    }
}