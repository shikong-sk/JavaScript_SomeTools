/**
 * 此类表示版权控件，您可以在地图上添加自己的版权信息。
 * 每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围
 */
import Copyright from "@/utils/BMapUtils/Copyright";

export default class CopyrightControl {
    /**
     * 创建一个版权控件实例
     * @param opts CopyrightControlOptions
     */
    constructor(opts) {
    }

    /**
     * 添加版权信息
     * @param copyright Copyright
     */
    addCopyright(copyright) {
    }

    /**
     * 移除版权信息
     * @param id number
     */
    removeCopyright(id) {
    }

    /**
     * 返回单个版权信息
     * @param id number
     * @returns {{bounds: undefined, id: undefined, content: undefined}}
     */
    getCopyright(id) {
        return Copyright
    }

    /**
     * 返回版权信息列表
     * @returns {{bounds: undefined, id: undefined, content: undefined}[]}
     */
    getCopyrightCollection() {
        return [Copyright]
    }
}