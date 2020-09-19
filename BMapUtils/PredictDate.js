/**
 * 此类表示交通流量的预测日期，没有构造函数，通过对象字面量形式表示
 */
const PredictDate = {
    /**
     * Number 预测日期，取值1到7，表示周一到周日
     */
    weekday: undefined,

    /**
     * Number 预测小时数，取值0到23，表示当日的0点到23点
     */
    hour: undefined,
}
export default PredictDate