import BMapUtils from "@/utils/BMapUtils/index";

/**
 * 比例尺控件类
 */
export default class ScaleControl {

    /**
     * 创建一个比例尺控件
     * @param opts
     */
    constructor(opts) {
    }

    /**
     * 返回比例尺单位制
     * @returns {{BMAP_UNIT_METRIC: undefined, BMAP_UNIT_IMPERIAL: undefined}}
     */
    getUnit() {
        return BMapUtils.LengthUnit;
    }

    /**
     * 设置比例尺单位制
     * @param unit LengthUnit
     */
    setUnit(unit) {
    }
}