/**
 * 全局 定时器控制类
 *
 * @author Shikong
 * @Date 2020/9/17
 */
const timers = Symbol("timers");

/**
 * 定时器控制类
 */
class Timer {
	masterTimer = undefined;
	[timers] = {};
	
	constructor() {
		this.masterTimer = setInterval(() => {
			this.mainThread();
		}, 1000);
		window.masterTimer = this.masterTimer;
	}
	
	// 主进程
	mainThread() {
		let timerList = this[timers];
		for (let timer in timerList) {
			if (!timerList.hasOwnProperty(timer)) {
				continue;
			}
			
			if (!timerList[timer]['threadLocked']) {
				new Promise(async () => {
					timerList[timer]['threadLocked'] = true;
					
					if (timerList[timer]["runTime"] >= timerList[timer]["time"] - 1) {
						try {
							await timerList[timer]["fun"]();
						} catch (e) { // 捕获错误事件 防止死锁
							console.error(e);
						}
						
						if (timerList[timer]) {
							timerList[timer]["runTime"] = 0;
						}
					} else {
						timerList[timer]["runTime"]++;
					}
					
					if (timerList[timer]) {
						timerList[timer]['threadLocked'] = false;
					}
				});
			}
		}
	}
	
	// 生成 uuid 字符串
	uuid() {
		let s = [];
		let hexDigits = "0123456789abcdef";
		for (let i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "_";
		return s.join("");
	}
	
	// 检查 timerObj 对象 并初始化
	checkTimerObj(timerObj) {
		this.checkTimerObjFun(timerObj);
		this.checkTimerObjTime(timerObj);
		this.checkTimerObjDesc(timerObj);
	}
	
	// 检查 timerObj.fun 参数
	checkTimerObjFun(timerObj) {
		if (!timerObj.hasOwnProperty("fun")) {
			throw new Error("timerObj 缺少 fun 参数");
		} else if (!timerObj.fun instanceof Function) {
			throw new Error("timerObj.fun 必须为一个方法");
		}
	}
	
	// 检查 timerObj.time 参数
	checkTimerObjTime(timerObj) {
		if (!timerObj.hasOwnProperty("time")) {
			throw new Error("timerObj 缺少 time 参数");
		} else if (!Number.isInteger(timerObj.time)) {
			throw new Error("timerObj.time 必须为整数");
		} else if (timerObj.time < 0) {
			throw new Error("timerObj.time 必须为正数");
		}
	}
	
	// 检查 timerObj.desc 参数
	checkTimerObjDesc(timerObj) {
		if (!timerObj.hasOwnProperty("desc")) {
			// 如果 函数为 匿名函数 则以 fun_ + uuid 形式赋值
			if (!timerObj.fun.name || timerObj.fun.name === 'fun') {
				timerObj.desc = "fun_" + this.uuid();
			} else { // 否则 以函数名命名
				timerObj.desc = timerObj.fun.name;
			}
		}
		// 如果标识 以数字开头 则在开头添加 fun_
		if (!Number.isNaN(Number.parseInt(timerObj.desc.toString().charAt(0)))) {
			timerObj.desc = "fun_" + timerObj.desc;
		}
		// 如果标识 已存在 则在其末尾追加一串 uuid 字符
		if (new Set(Object.keys(this[timers])).has(timerObj.desc)) {
			timerObj.desc = timerObj.desc + "_" + this.uuid();
		}
	}
	
	/**
	 * 添加计时器和初始化并立即执行 最后返回一个可供后续移除操作的唯一标识
	 * <br>
	 * 定时器对象 timerObj 定义：                                                              <br>
	 * &emsp;timerObj : {                                                                   <br>
	 * &emsp;&emsp; fun:function(){},                                                       <br>
	 * &emsp;&emsp; time:10, &emsp; 精度：秒                                                 <br>
	 * &emsp;&emsp; desc:"描述" &emsp; 可选参数: 唯一标识                                      <br>
	 * &emsp;&emsp; delay:false &emsp; 可选参数: 第一次是否延迟执行(即不立刻执行)                <br>
	 * &emsp;}
	 * @param timerObj 计时器对象
	 * @return String 唯一标识
	 */
	addTimer(timerObj) {
		// 检查对象参数
		this.checkTimerObj(timerObj);
		// 初始化 运行时间
		timerObj.runTime = 0;
		// 初始化 是否延迟执行
		timerObj.delay = timerObj.delay || false;
		// 初始化 线程锁
		timerObj.threadLocked = false;
		this[timers][timerObj.desc] = timerObj;
		// 立即执行
		if (!timerObj["delay"]) {
			new Promise(async (resolve) => {
				timerObj['threadLocked'] = true;
				
				await timerObj.fun();
				
				timerObj['threadLocked'] = false;
			});
		}
		return timerObj.desc;
	}
	
	/**
	 * 移除 定时器
	 * @param desc 定时器唯一标识
	 */
	removeTimer(desc) {
		this[timers][desc] = {};
		delete this[timers][desc];
	}
	
	/**
	 * 获取 定时器列表
	 * @returns {*}
	 */
	getTimer() {
		return this[timers];
	}
	
	// 控制台输出 定时器 详细信息
	getTimerList() {
		let timerList = this[timers];
		let timerNum = Object.keys(timerList).length;
		console.log(`定时器数量：${timerNum}`);
		console.table(this[timers]);
	}
}

const MasterTimer = new Timer();
export default MasterTimer;

