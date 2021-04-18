/**
 *  Form Rule 输入校验规则 工具类
 */
const Check = {
	
	/**
	 * 正则 匹配 IMSI (终端)
	 */
	imsiExp: /^(\d{15})$/,
	
	/**
	 *  正则 匹配 MAC (关联特征)
	 */
	// macExp: /^[A-Fa-f0-9]{2}([-:]?[A-Fa-f0-9]{2})([-:.]?[A-Fa-f0-9]{2})([-:]?[A-Fa-f0-9]{2})([-:.]?[A-Fa-f0-9]{2})([-:]?[A-Fa-f0-9]{2})$/,
	macExp: /^[A-Fa-f0-9]{2}([-][A-Fa-f0-9]{2})([-][A-Fa-f0-9]{2})([-][A-Fa-f0-9]{2})([-][A-Fa-f0-9]{2})([-][A-Fa-f0-9]{2})$/,
	
	/**
	 * 正则 匹配 车牌号码
	 */
	carPlateExp: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-Z0-9]{4,5}[A-Z0-9挂学警港澳]$/,
	
	/**
	 * 正则 匹配 QQ号码
	 */
	qqExp: /^[1-9][0-9]{4,}$/,
	
	/**
	 * 正则 匹配 手机号码 11位
	 */
	phoneExp: /^1[0-9]{10}$/,
	
	/**
	 * 正则 匹配 邮箱地址
	 */
	emailExp: /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
	
	/**
	 * 正则 匹配 18位身份证号码
	 */
	idCardExp: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|[Xx])$/,
	
	isEmpty(value) {
		return value == null || value === "";
	},
	
	imsi(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.imsiExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("终端 格式不正确"));
		}
	},
	
	mac(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.macExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("特征 格式不正确"));
		}
	},
	
	
	imsiOrMac(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.macExp.test(value) || Check.imsiExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("终端 或 特征 格式不正确"));
		}
	},
	
	carPlate(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.carPlateExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("车牌号码 格式不正确"));
		}
	},
	
	qq(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.qqExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("QQ号码 格式不正确"));
		}
	},
	
	phone(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.phoneExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("手机号码 格式不正确"));
		}
	},
	
	email(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.emailExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("邮箱地址 格式不正确"));
		}
	},
	
	idCard(rule, value, callback) {
		if (Check.isEmpty(value)) {
			return callback();
		}
		
		if (Check.idCardExp.test(value)) {
			return callback();
		} else {
			return callback(new Error("身份证 格式不正确"));
		}
	},
};

export default Check;
