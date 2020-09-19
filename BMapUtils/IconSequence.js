/**
 * 此类用于设置polyline上的符号显示
 */
export default class IconSequence {
    /**
     * 创建线上的符号类。
     * symbol为符号样式;offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%"
     * repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值,同时设置repeat与offset时，以repeat为准
     * fixedRotation设置图标的旋转角度是否与线走向一致，默认为 true
     * @param symbol Symbol
     * @param offset string
     * @param repeat string
     * @param fixedRotation boolean
     */
    constructor(symbol, offset, repeat, fixedRotation) {
    }

}