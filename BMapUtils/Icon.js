/**
 * 此类表示标注覆盖物所使用的图标
 */
export default class Icon {
    /**
     * 以给定的图像地址和大小创建图标对象实例
     * @param url String
     * @param size Size
     * @param opts IconOptions
     */
    constructor(url, size, opts) {
    }

    /**
     *    Size 图标的定位点相对于图标左上角的偏移值
     */
    anchor;

    /**
     *    Size 图标可视区域的大小
     */
    size;

    /**
     *    Size 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性

     */
    imageOffset;

    /**
     *    Size 图标所用的图片的大小
     *    此功能的作用等同于CSS中的background-size属性
     *    可用于实现高清屏的高清效果
     */
    imageSize;

    /**
     *    String 图标所用图像资源的位置
     */
    imageUrl;

    /**
     *    Size 信息窗口开启位置相对于图标左上角的偏移值
     */
    infoWindowAnchor;

    /**
     * String 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。
     * 如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
     */
    printImageUrl;

    /**
     * 设置图片资源的地址
     * @param imageUrl String
     */
    setImageUrl(imageUrl) {
    }

    /**
     * 设置图标可视区域的大小
     * @param size Size
     */
    setSize(size) {
    }

    /**
     * 设置图标的大小
     * @param offset Size
     */
    setImageSize(offset) {
    }

    /**
     * 设置图标定位点相对于其左上角的偏移值
     * @param anchor Size
     */
    setAnchor(anchor) {
    }

    /**
     * 设置图片相对于可视区域的偏移值
     * @param offset Size
     */
    setImageOffset(offset) {
    }

    /**
     * 设置信息窗口开启位置相对于图标左上角的偏移值
     * @param anchor Size
     */
    setInfoWindowAnchor(anchor) {
    }

    /**
     * 设置icon的打印图片，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。
     * 如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
     * @param url String
     */
    setPrintImageUrl(url) {
    }
}