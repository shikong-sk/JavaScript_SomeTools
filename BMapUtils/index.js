/**
 * 百度地图 工具类
 *
 * 主要通过对部分接口的定义实现IDE的自动提示和函数、常量的解释及帮助功能
 * 可使用已定义好的接口直接调用，如果所需要调用的API在本工具类中未定义也可以直接调用
 * 本工具类已实现 动态实例化 并 注入百度API组件
 * 动态初始化百度API中的常量值为工具类常量
 *
 * 本工具类中所有API接口定义模型参考自：http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html
 *
 * === 尚未全部完工 目前已完成大部分常用的API接口声明和定义，有自动提示功能和方法说明 ===
 *
 * Vue-Cli 版本 &lt; 3 配置 项目根路径下的 ./build/webpack.base.conf.js
 *   externals: {
        "BMap": "BMap",
    }
 *
 * Vue-Cli 版本 >= 3 需配置 项目根路径下的 vue.config.js
 *     configureWebpack:{
        externals:{
            'BMap':'BMap',
        }
    }
 *
 * @author Shikong
 * @Date 2020/6/30
 */
import AddressComponent from "@/utils/BMapUtils/AddressComponent";
import Bounds from "@/utils/BMapUtils/Bounds";
import Geolocation from "@/utils/BMapUtils/Geolocation";
import InfoWindow from "@/utils/BMapUtils/InfoWindow";
import Map from '@/utils/BMapUtils/Map'
import Marker from "@/utils/BMapUtils/Marker";
import MapOptions from "@/utils/BMapUtils/MapOptions";
import MarkerOptions from "@/utils/BMapUtils/MarkerOptions";
import MapType from "@/utils/BMapUtils/MapType";
import Overlay from "@/utils/BMapUtils/Overlay";
import Panorama from "@/utils/BMapUtils/Panorama";
import Pixel from "@/utils/BMapUtils/Pixel";
import Point from "@/utils/BMapUtils/Point";
import PositionOptions from "@/utils/BMapUtils/PositionOptions";
import Size from "@/utils/BMapUtils/Size";
import StatusCode from "@/utils/BMapUtils/StatusCode";
import Viewport from "@/utils/BMapUtils/Viewport";
import ViewportOptions from "@/utils/BMapUtils/ViewportOptions";
import ScaleControl from "@/utils/BMapUtils/ScaleControl";
import ScaleControlOptions from "@/utils/BMapUtils/ScaleControlOptions";
import PanOptions from "@/utils/BMapUtils/PanOptions";
import MapStyle from "@/utils/BMapUtils/MapStyle";
import Control from "@/utils/BMapUtils/Control";
import NavigationControl from "@/utils/BMapUtils/NavigationControl";
import NavigationControlOptions from "@/utils/BMapUtils/NavigationControlOptions";
import GeolocationControl from "@/utils/BMapUtils/GeolocationControl";
import GeolocationControlOptions from "@/utils/BMapUtils/GeolocationControlOptions";
import Icon from "@/utils/BMapUtils/Icon";
import IconOptions from "@/utils/BMapUtils/IconOptions";
import InfoWindowOptions from "@/utils/BMapUtils/InfoWindowOptions";
import Label from "@/utils/BMapUtils/Label";
import LabelOptions from "@/utils/BMapUtils/LabelOptions";
import Polyline from "@/utils/BMapUtils/Polyline";
import PolylineOptions from "@/utils/BMapUtils/PolylineOptions";
import IconSequence from "@/utils/BMapUtils/IconSequence";
import Polygon from "@/utils/BMapUtils/Polygon";
import PolygonOptions from "@/utils/BMapUtils/PolygonOptions";
import APIVersion from "@/utils/BMapUtils/APIVersion";
import Animation from "@/utils/BMapUtils/Animation";
import OverviewMapControl from "@/utils/BMapUtils/OverviewMapControl";
import OverviewMapControlOptions from "@/utils/BMapUtils/OverviewMapControlOptions";
import Copyright from "@/utils/BMapUtils/Copyright";
import CopyrightControl from "@/utils/BMapUtils/CopyrightControl";
import CopyrightControlOptions from "@/utils/BMapUtils/CopyrightControlOptions";
import MapTypeControl from "@/utils/BMapUtils/MapTypeControl";
import MapTypeControlOptions from "@/utils/BMapUtils/MapTypeControlOptions";
import PanoramaControl from "@/utils/BMapUtils/PanoramaControl";
import MapPanes from "@/utils/BMapUtils/MapPanes";
import Circle from "@/utils/BMapUtils/Circle";
import CircleOptions from "@/utils/BMapUtils/CircleOptions";
import GroundOverlay from "@/utils/BMapUtils/GroundOverlay";
import GroundOverlayOptions from "@/utils/BMapUtils/GroundOverlayOptions";
import PointCollection from "@/utils/BMapUtils/PointCollection";
import PointCollectionOptions from "@/utils/BMapUtils/PointCollectionOptions";
import Hotspot from "@/utils/BMapUtils/Hotspot";
import HotspotOptions from "@/utils/BMapUtils/HotspotOptions";
import Symbol from "@/utils/BMapUtils/Symbol";
import SymbolOptions from "@/utils/BMapUtils/SymbolOptions";
import MenuItem from "@/utils/BMapUtils/MenuItem";
import MenuItemOptions from "@/utils/BMapUtils/MenuItemOptions";
import ContextMenu from "@/utils/BMapUtils/ContextMenu";
import MapTypeOptions from "@/utils/BMapUtils/MapTypeOptions";
import Projection from "@/utils/BMapUtils/Projection";
import MercatorProjection from "@/utils/BMapUtils/MercatorProjection";
import PerspectiveProjection from "@/utils/BMapUtils/PerspectiveProjection";
import TileLayer from "@/utils/BMapUtils/TileLayer";
import TileLayerOptions from "@/utils/BMapUtils/TileLayerOptions";
import TrafficLayer from "@/utils/BMapUtils/TrafficLayer";
import TrafficLayerOptions from "@/utils/BMapUtils/TrafficLayerOptions";
import PredictDate from "@/utils/BMapUtils/PredictDate";
import CustomLayer from "@/utils/BMapUtils/CustomLayer";
import CustomLayerOptions from "@/utils/BMapUtils/CustomLayerOptions";
import Custompoi from "@/utils/BMapUtils/Custompoi";
import PanoramaCoverageLayer from "@/utils/BMapUtils/PanoramaCoverageLayer";
import LocalSearch from "@/utils/BMapUtils/LocalSearch";
import LocalSearchOptions from "@/utils/BMapUtils/LocalSearchOptions";
import LocalResult from "@/utils/BMapUtils/LocalResult";
import LocalResultPoi from "@/utils/BMapUtils/LocalResultPoi";

/**
 * 百度地图 工具类
 */
const BMapUtils = {
    /**
     * 接口定义
     */
    BMap: {
        AddressComponent,
        Animation,
        APIVersion,
        Bounds,
        Circle,
        CircleOptions,
        ContextMenu,
        Control,
        Copyright,
        CopyrightControl,
        CopyrightControlOptions,
        CustomLayer,
        CustomLayerOptions,
        Custompoi,
        Geolocation,
        GeolocationControl,
        GeolocationControlOptions,
        GroundOverlay,
        GroundOverlayOptions,
        Hotspot,
        HotspotOptions,
        Icon,
        IconOptions,
        IconSequence,
        InfoWindow,
        InfoWindowOptions,
        Label,
        LabelOptions,
        LocalResult,
        LocalResultPoi,
        LocalSearch,
        LocalSearchOptions,
        Map,
        MapOptions,
        MapPanes,
        MapStyle,
        MapType,
        MapTypeControl,
        MapTypeControlOptions,
        MapTypeOptions,
        Marker,
        MarkerOptions,
        MenuItem,
        MenuItemOptions,
        MercatorProjection,
        NavigationControl,
        NavigationControlOptions,
        Overlay,
        OverviewMapControl,
        OverviewMapControlOptions,
        PanOptions,
        Panorama,
        PanoramaControl,
        PanoramaCoverageLayer,
        PerspectiveProjection,
        Pixel,
        Point,
        PointCollection,
        PointCollectionOptions,
        Polygon,
        PolygonOptions,
        Polyline,
        PolylineOptions,
        PositionOptions,
        PredictDate,
        Projection,
        ScaleControl,
        ScaleControlOptions,
        Size,
        StatusCode,
        Symbol,
        SymbolOptions,
        TileLayer,
        TileLayerOptions,
        TrafficLayer,
        TrafficLayerOptions,
        Viewport,
        ViewportOptions,
    },

    /**
     * 初始化地图
     * @param ak appKey
     * @param version 接口版本
     * @returns {Promise}
     */
    init(ak, version) {
        let _this = BMapUtils
        version = version || "2.0"

        return new Promise(function (resolve, reject) {
            /**
             * 判断 全局变量是否定义 BMap 对象,若未定义则执行初始化
             */
            if (typeof global.BMap !== 'undefined') {

                let flag = true
                /**
                 * 遍历 全局变量中的 BMap 对象的键 若该键在 BMapUtils中的 BMap 对象中不存在 则视为未初始化
                 */
                for(let tmp in global.BMap)
                {
                    if(global.BMap.hasOwnProperty(tmp))
                    {
                        if(!_this.BMap.hasOwnProperty(tmp))
                        {
                            flag = false
                            break
                        }
                    }

                }

                if(flag)
                {
                    resolve(_this.BMap)
                    return true
                }
            }
            window.onBMapCallback = function () {
                // console.log(BMap)

                // 注入 百度地图中提供的 API
                _this.BMap = Object.assign(_this.BMap,global.BMap)
                // console.log(_this.BMap)

                // 初始化常量
                BMapUtils.initConstant()
                resolve(_this.BMap)
            }
            let script = document.createElement('script')
            script.type = 'text/javascript'
            script.src =
                `http://api.map.baidu.com/api?v=${version}&ak=${ak}&callback=onBMapCallback`
            script.onerror = reject
            document.head.appendChild(script)
        })
    },

    /*
     *  公共常量定义
     */

    /**
     * 请求结果 状态码
     */
    StatusCode: {
        /**
         * 状态码：检索成功
         */
        BMAP_STATUS_SUCCESS: 0,

        /**
         * 状态码：城市列表
         */
        BMAP_STATUS_CITY_LIST: 1,

        /**
         * 状态码：位置结果未知
         */
        BMAP_STATUS_UNKNOWN_LOCATION: 2,

        /**
         * 状态码：导航结果未知
         */
        BMAP_STATUS_UNKNOWN_ROUTE: 3,

        /**
         * 状态码：非法密钥
         */
        BMAP_STATUS_INVALID_KEY: 4,

        /**
         * 状态码：非法请求
         */
        BMAP_STATUS_INVALID_REQUEST: 5,

        /**
         * 状态码：没有权限
         */
        BMAP_STATUS_PERMISSION_DENIED: 6,

        /**
         * 状态码：服务不可用
         */
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,

        /**
         * 状态码：超时
         */
        BMAP_STATUS_TIMEOUT: 8,
    },
    /**
     * 图层类型
     */
    MapType: {
        /**
         * 此地图类型展示普通街道视图
         */
        BMAP_NORMAL_MAP: undefined,

        /**
         * 此地图类型展示卫星视图
         */
        BMAP_SATELLITE_MAP: undefined,
        /**
         * 此地图类型展示卫星和路网的混合视图
         */
        BMAP_HYBRID_MAP: undefined,
    },
    /**
     * 内置的右键菜单图标
     */
    ContextMenuIcon: {
        /**
         * 放大图标
         */
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: undefined,

        /**
         * 缩小图标
         */
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: undefined,
    },
    /**
     * 全景地图 场景类型
     */
    PanoramaSceneType: {
        /**
         * 全景场景点的类型为室内场景
         */
        BMAP_PANORAMA_INDOOR_SCENE: undefined,
        /**
         * 全景场景点的类型为室外场景
         */
        BMAP_PANORAMA_STREET_SCENE: undefined,
    },
    /**
     * 全景地图 要显示的 POI 类型
     */
    PanoramaPOIType: {
        /**
         *  酒店
         */
        BMAP_PANORAMA_POI_HOTEL: undefined,

        /**
         * 餐饮类
         */
        BMAP_PANORAMA_POI_CATERING: undefined,

        /**
         * 电影院
         */
        BMAP_PANORAMA_POI_MOVIE: undefined,

        /**
         * 公交站点
         */
        BMAP_PANORAMA_POI_TRANSIT: undefined,

        /**
         * 室内景
         */
        BMAP_PANORAMA_POI_INDOOR_SCENE: undefined,

        /**
         * 无，即隐藏所有的 poi 类型
         */
        BMAP_PANORAMA_POI_NONE: undefined,
    },
    /**
     * 驾车结果 高亮模式
     */
    HighlightModes: {
        /**
         * 驾车结果展现中点击列表后的展现点步骤
         */
        BMAP_HIGHLIGHT_STEP: undefined,

        /**
         * 驾车结果展现中点击列表后的展现路段
         */
        BMAP_HIGHLIGHT_ROUTE: undefined,
    },
    /**
     * 线路类型
     */
    RouteType: {
        /**
         * 驾车线路
         */
        BMAP_ROUTE_TYPE_DRIVING: undefined,

        /**
         * 步行线路
         */
        BMAP_ROUTE_TYPE_WALKING: undefined,
    },
    /**
     * 驾车方案 策略
     */
    DrivingPolicy: {
        /**
         * 最少时间
         */
        BMAP_DRIVING_POLICY_LEAST_TIME: undefined,

        /**
         * 最短距离
         */
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: undefined,

        /**
         * 避开高速
         */
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: undefined,
    },
    /**
     * 公共交通线路类型
     */
    LineType: {
        /**
         * 公交车
         */
        BMAP_LINE_TYPE_BUS: undefined,

        /**
         * 地铁
         */
        BMAP_LINE_TYPE_SUBWAY: undefined,

        /**
         * 渡轮
         */
        BMAP_LINE_TYPE_FERRY: undefined,
    },
    /**
     * 公共交通方案策略
     */
    TransitPolicy: {
        /**
         * 最少时间
         */
        BMAP_TRANSIT_POLICY_LEAST_TIME: undefined,

        /**
         * 最少换乘
         */
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: undefined,

        /**
         * 最少步行
         */
        BMAP_TRANSIT_POLICY_LEAST_WALKING: undefined,

        /**
         * 不乘地铁
         */
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: undefined,
    },
    /**
     * 地点类型
     */
    PoiType: {
        /**
         * 一般位置点
         */
        BMAP_POI_TYPE_NORMAL: undefined,

        /**
         * 公交车站位置点
         */
        BMAP_POI_TYPE_BUSSTOP: undefined,

        /**
         * 地铁车站位置点
         */
        BMAP_POI_TYPE_SUBSTOP: undefined,
    },
    /**
     * 麻点密度类型
     */
    PointDensityType: {
        /**
         * 麻点密度高
         */
        BMAP_POINT_DENSITY_HIGH: undefined,

        /**
         * 麻点密度中等，默认
         */
        BMAP_POINT_DENSITY_MEDIUM: undefined,

        /**
         * 麻点密度低
         */
        BMAP_POINT_DENSITY_LOW: undefined,
    },
    /**
     * 预设矢量图标样式
     */
    SymbolShapeType: {
        /**
         * 圆形，默认半径为1px
         */
        BMap_Symbol_SHAPE_CIRCLE: undefined,

        /**
         * 矩形，默认宽度4px、高度2px
         */
        BMap_Symbol_SHAPE_RECTANGLE: undefined,

        /**
         * 菱形，默认外接圆半径10px
         */
        BMap_Symbol_SHAPE_RHOMBUS: undefined,

        /**
         * 五角星，五角星外接圆半径为10px
         */
        BMap_Symbol_SHAPE_STAR: undefined,

        /**
         * 箭头方向向下的闭合箭头
         */
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: undefined,

        /**
         * 箭头方向向上的闭合箭头
         */
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: undefined,

        /**
         * 箭头方向向下的非闭合箭头
         */
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: undefined,

        /**
         * 箭头方向向上的非闭合箭头
         */
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: undefined,

        /**
         * 定位点图标
         */
        BMap_Symbol_SHAPE_POINT: undefined,

        /**
         * 预设的飞机形状
         */
        BMap_Symbol_SHAPE_PLANE: undefined,

        /**
         * 预设的照相机形状
         */
        BMap_Symbol_SHAPE_CAMERA: undefined,

        /**
         * 预设的警告符号
         */
        BMap_Symbol_SHAPE_WARNING: undefined,

        /**
         * 预设的笑脸形状
         */
        BMap_Symbol_SHAPE_SMILE: undefined,

        /**
         * 预设的钟表形状
         */
        BMap_Symbol_SHAPE_CLOCK: undefined,

    },
    /**
     * 海量点预设尺寸
     */
    SizeType: {
        /**
         * 定义点的尺寸为超小，宽高为2px*2px
         */
        BMAP_POINT_SIZE_TINY: undefined,

        /**
         * 定义点的尺寸为很小，宽高为4px*4px
         */
        BMAP_POINT_SIZE_SMALLER: undefined,

        /**
         * 定义点的尺寸为小，宽高为8px*8px
         */
        BMAP_POINT_SIZE_SMALL: undefined,

        /**
         * 定义点的尺寸为正常，宽高为10px*10px，为海量点默认尺寸
         */
        BMAP_POINT_SIZE_NORMAL: undefined,

        /**
         * 定义点的尺寸为大，宽高为16px*16px
         */
        BMAP_POINT_SIZE_BIG: undefined,

        /**
         * 定义点的尺寸为很大，宽高为20px*20px
         */
        BMAP_POINT_SIZE_BIGGER: undefined,

        /**
         * 定义点的尺寸为超大，宽高为30px*30px
         */
        BMAP_POINT_SIZE_HUGE: undefined,
    },
    /**
     * 海量点预设形状
     */
    ShapeType: {
        /**
         * 圆形，为默认形状
         */
        BMAP_POINT_SHAPE_CIRCLE: undefined,

        /**
         * 星形
         */
        BMAP_POINT_SHAPE_STAR: undefined,

        /**
         * 方形
         */
        BMAP_POINT_SHAPE_SQUARE: undefined,

        /**
         * 菱形
         */
        BMAP_POINT_SHAPE_RHOMBUS: undefined,

        /**
         * 水滴状，该类型无size和color属性
         */
        BMAP_POINT_SHAPE_WATERDROP: undefined,
    },
    /**
     * 标注的动画效果类型
     */
    Animation: {
        /**
         * 坠落动画
         */
        BMAP_ANIMATION_DROP: undefined,

        /**
         * 跳动动画
         */
        BMAP_ANIMATION_BOUNCE: undefined,
    },
    /**
     * MapTypeControl 的 外观样式
     */
    MapTypeControlType: {
        /**
         * 按钮水平方式展示，默认采用此类型展示
         */
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: undefined,

        /**
         * 按钮呈下拉列表方式展示
         */
        BMAP_MAPTYPE_CONTROL_DROPDOWN: undefined,

        /**
         * 以图片方式展示类型控件，设置该类型后无法指定maptypes属性
         */
        BMAP_MAPTYPE_CONTROL_MAP: undefined,
    },
    /**
     * 长度单位制 类型
     */
    LengthUnit: {
        /**
         * 公制单位
         */
        BMAP_UNIT_METRIC: undefined,

        /**
         * 英制单位
         */
        BMAP_UNIT_IMPERIAL: undefined,
    },
    /**
     * 平移缩放控件 类型
     */
    NavigationControlType: {
        /**
         * 标准的平移缩放控件（包括平移、缩放按钮和滑块）
         */
        BMAP_NAVIGATION_CONTROL_LARGE: undefined,

        /**
         * 仅包含平移和缩放按钮
         */
        BMAP_NAVIGATION_CONTROL_SMALL: undefined,

        /**
         * 仅包含平移按钮
         */
        BMAP_NAVIGATION_CONTROL_PAN: undefined,

        /**
         * 仅包含缩放按钮
         */
        BMAP_NAVIGATION_CONTROL_ZOOM: undefined,
    },
    /**
     * 控件定位
     */
    ControlAnchor: {
        /**
         * 控件将定位到地图的左上角
         */
        BMAP_ANCHOR_TOP_LEFT: undefined,

        /**
         * 控件将定位到地图的右上角
         */
        BMAP_ANCHOR_TOP_RIGHT: undefined,

        /**
         * 控件将定位到地图的左下角
         */
        BMAP_ANCHOR_BOTTOM_LEFT: undefined,

        /**
         * 控件将定位到地图的右下角
         */
        BMAP_ANCHOR_BOTTOM_RIGHT: undefined,
    },
    /**
     * API版本号
     */
    APIVersion:{
        /**
         * 返回当前API版本。例如，1.2版本返回字符串“1.2”
         */
        BMAP_API_VERSION:undefined,
    },
    /**
     * 初始化常量值
     */
    initConstant() {
        // 图层
        BMapUtils.MapType.BMAP_NORMAL_MAP = global.BMAP_NORMAL_MAP;
        BMapUtils.MapType.BMAP_SATELLITE_MAP = global.BMAP_SATELLITE_MAP;
        BMapUtils.MapType.BMAP_HYBRID_MAP = global.BMAP_HYBRID_MAP;

        // 内置右键菜单图标
        BMapUtils.ContextMenuIcon.BMAP_CONTEXT_MENU_ICON_ZOOMIN = global.BMAP_CONTEXT_MENU_ICON_ZOOMIN;
        BMapUtils.ContextMenuIcon.BMAP_CONTEXT_MENU_ICON_ZOOMOUT = global.BMAP_CONTEXT_MENU_ICON_ZOOMOUT;

        // 全景地图 场景类型
        BMapUtils.PanoramaSceneType.BMAP_PANORAMA_INDOOR_SCENE = global.BMAP_PANORAMA_INDOOR_SCENE;
        BMapUtils.PanoramaSceneType.BMAP_PANORAMA_STREET_SCENE = global.BMAP_PANORAMA_STREET_SCENE;

        // 全景地图 要显示的 POI 类型
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_HOTEL = global.BMAP_PANORAMA_POI_HOTEL;
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_CATERING = global.BMAP_PANORAMA_POI_CATERING;
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_MOVIE = global.BMAP_PANORAMA_POI_MOVIE
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_TRANSIT = global.BMAP_PANORAMA_POI_TRANSIT
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_INDOOR_SCENE = global.BMAP_PANORAMA_POI_INDOOR_SCENE
        BMapUtils.PanoramaPOIType.BMAP_PANORAMA_POI_NONE = global.BMAP_PANORAMA_POI_NONE

        // 驾车结果 高亮模式
        BMapUtils.HighlightModes.BMAP_HIGHLIGHT_STEP = global.BMAP_HIGHLIGHT_STEP
        BMapUtils.HighlightModes.BMAP_HIGHLIGHT_ROUTE = global.BMAP_HIGHLIGHT_ROUTE

        // 线路类型
        BMapUtils.RouteType.BMAP_ROUTE_TYPE_DRIVING = global.BMAP_ROUTE_TYPE_DRIVING
        BMapUtils.RouteType.BMAP_ROUTE_TYPE_WALKING = global.BMAP_ROUTE_TYPE_WALKING

        // 驾车方案 策略
        BMapUtils.DrivingPolicy.BMAP_DRIVING_POLICY_LEAST_TIME = global.BMAP_DRIVING_POLICY_LEAST_TIME
        BMapUtils.DrivingPolicy.BMAP_DRIVING_POLICY_LEAST_DISTANCE = global.BMAP_DRIVING_POLICY_LEAST_DISTANCE
        BMapUtils.DrivingPolicy.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = global.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS

        // 公共交通线路类型
        BMapUtils.LineType.BMAP_LINE_TYPE_BUS = global.BMAP_LINE_TYPE_BUS
        BMapUtils.LineType.BMAP_LINE_TYPE_SUBWAY = global.BMAP_LINE_TYPE_SUBWAY
        BMapUtils.LineType.BMAP_LINE_TYPE_FERRY = global.BMAP_LINE_TYPE_FERRY

        // 公共交通方案策略
        BMapUtils.TransitPolicy.BMAP_TRANSIT_POLICY_LEAST_TIME = global.BMAP_TRANSIT_POLICY_LEAST_TIME
        BMapUtils.TransitPolicy.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = global.BMAP_TRANSIT_POLICY_LEAST_TRANSFER
        BMapUtils.TransitPolicy.BMAP_TRANSIT_POLICY_LEAST_WALKING = global.BMAP_TRANSIT_POLICY_LEAST_WALKING
        BMapUtils.TransitPolicy.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = global.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS

        // 地点类型
        BMapUtils.PoiType.BMAP_POI_TYPE_NORMAL = global.BMAP_POI_TYPE_NORMAL
        BMapUtils.PoiType.BMAP_POI_TYPE_BUSSTOP = global.BMAP_POI_TYPE_BUSSTOP
        BMapUtils.PoiType.BMAP_POI_TYPE_SUBSTOP = global.BMAP_POI_TYPE_SUBSTOP

        // 麻点密度类型
        BMapUtils.PointDensityType.BMAP_POINT_DENSITY_HIGH = global.BMAP_POINT_DENSITY_HIGH
        BMapUtils.PointDensityType.BMAP_POINT_DENSITY_MEDIUM = global.BMAP_POINT_DENSITY_MEDIUM
        BMapUtils.PointDensityType.BMAP_POINT_DENSITY_LOW = global.BMAP_POINT_DENSITY_LOW

        // 预设矢量图标样式
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_CIRCLE = global.BMap_Symbol_SHAPE_CIRCLE
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_RECTANGLE = global.BMap_Symbol_SHAPE_RECTANGLE
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_RHOMBUS = global.BMap_Symbol_SHAPE_RHOMBUS
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_STAR = global.BMap_Symbol_SHAPE_STAR
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW = global.BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW = global.BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW = global.BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW = global.BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_POINT = global.BMap_Symbol_SHAPE_POINT
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_PLANE = global.BMap_Symbol_SHAPE_PLANE
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_CAMERA = global.BMap_Symbol_SHAPE_CAMERA
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_WARNING = global.BMap_Symbol_SHAPE_WARNING
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_SMILE = global.BMap_Symbol_SHAPE_SMILE
        BMapUtils.SymbolShapeType.BMap_Symbol_SHAPE_CLOCK = global.BMap_Symbol_SHAPE_CLOCK

        // 海量点预设尺寸
        BMapUtils.SizeType.BMAP_POINT_SIZE_TINY = global.BMAP_POINT_SIZE_TINY
        BMapUtils.SizeType.BMAP_POINT_SIZE_SMALLER = global.BMAP_POINT_SIZE_SMALLER
        BMapUtils.SizeType.BMAP_POINT_SIZE_SMALL = global.BMAP_POINT_SIZE_SMALL
        BMapUtils.SizeType.BMAP_POINT_SIZE_NORMAL = global.BMAP_POINT_SIZE_NORMAL
        BMapUtils.SizeType.BMAP_POINT_SIZE_BIG = global.BMAP_POINT_SIZE_BIG
        BMapUtils.SizeType.BMAP_POINT_SIZE_BIGGER = global.BMAP_POINT_SIZE_BIGGER
        BMapUtils.SizeType.BMAP_POINT_SIZE_HUGE = global.BMAP_POINT_SIZE_HUGE

        // 海量点预设形状
        BMapUtils.ShapeType.BMAP_POINT_SHAPE_CIRCLE = global.BMAP_POINT_SHAPE_CIRCLE
        BMapUtils.ShapeType.BMAP_POINT_SHAPE_STAR = global.BMAP_POINT_SHAPE_STAR
        BMapUtils.ShapeType.BMAP_POINT_SHAPE_SQUARE = global.BMAP_POINT_SHAPE_SQUARE
        BMapUtils.ShapeType.BMAP_POINT_SHAPE_RHOMBUS = global.BMAP_POINT_SHAPE_RHOMBUS
        BMapUtils.ShapeType.BMAP_POINT_SHAPE_WATERDROP = global.BMAP_POINT_SHAPE_WATERDROP

        // 标注的动画效果类型
        BMapUtils.Animation.BMAP_ANIMATION_DROP = global.BMAP_ANIMATION_DROP
        BMapUtils.Animation.BMAP_ANIMATION_BOUNCE = global.BMAP_ANIMATION_BOUNCE

        // MapTypeControl 的 外观样式
        BMapUtils.MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL = global.BMAP_MAPTYPE_CONTROL_HORIZONTAL
        BMapUtils.MapTypeControlType.BMAP_MAPTYPE_CONTROL_DROPDOWN = global.BMAP_MAPTYPE_CONTROL_DROPDOWN
        BMapUtils.MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP = global.BMAP_MAPTYPE_CONTROL_MAP

        // 长度单位制 类型
        BMapUtils.LengthUnit.BMAP_UNIT_METRIC = global.BMAP_UNIT_METRIC
        BMapUtils.LengthUnit.BMAP_UNIT_IMPERIAL = global.BMAP_UNIT_IMPERIAL

        // 平移缩放控件 类型
        BMapUtils.NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE = global.BMAP_NAVIGATION_CONTROL_LARGE
        BMapUtils.NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL = global.BMAP_NAVIGATION_CONTROL_SMALL
        BMapUtils.NavigationControlType.BMAP_NAVIGATION_CONTROL_PAN = global.BMAP_NAVIGATION_CONTROL_PAN
        BMapUtils.NavigationControlType.BMAP_NAVIGATION_CONTROL_ZOOM = global.BMAP_NAVIGATION_CONTROL_ZOOM

        // 控件定位
        BMapUtils.ControlAnchor.BMAP_ANCHOR_TOP_LEFT = global.BMAP_ANCHOR_TOP_LEFT
        BMapUtils.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT = global.BMAP_ANCHOR_TOP_RIGHT
        BMapUtils.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT = global.BMAP_ANCHOR_BOTTOM_LEFT
        BMapUtils.ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT = global.BMAP_ANCHOR_BOTTOM_RIGHT

        // API版本号
        BMapUtils.APIVersion.BMAP_API_VERSION = global.BMAP_API_VERSION
    },

}
export default BMapUtils