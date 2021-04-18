let Logger = {
	COLOR: {
		success: "#42C02E",
		error: "#FF0036",
		info: "#1475B4",
		warn: "#F2CD02",
		debug: "#333",
		primary: "#35495E",
	},
	success(log = "", title = "Success") {
		this.logger(title, log, undefined, this.COLOR.success);
	},
	error(log = "", title = "Error") {
		this.logger(title, log, undefined, this.COLOR.error)
		console.trace(title)
	},
	info(log = "", title = "Info") {
		this.logger(title, log, undefined, this.COLOR.info)
	},
	warn(log = "", title = "Warn") {
		this.logger(title, log, undefined, this.COLOR.warn)
	},
	debug(log = "", title = "Debug") {
		this.logger(title, log, undefined, this.COLOR.debug)
	},
	log(log = "") {
		this.logger("Log", log, this.COLOR.primary)
	},
	json(data = {}, desc = "", title = "Data", descBg = Logger.COLOR.success, titleBg = Logger.COLOR.primary) {
		console.groupCollapsed(`%c${title}%c${desc}`,
			"padding: 2px 8px;" + "border-radius: 3px 0 0 3px;" + `color: #fff;` + `background: ${titleBg};`,
			"padding: 2px 8px;" + "border-radius: 0 3px 3px 0;" + `color: #fff;` + `background: ${descBg};`);
		let json = ""
		try {
			json = JSON.stringify(data, null, 2)
			console.log(json)
		} catch (e) {
			this.warn("不支持的数据类型")
		} finally {
			console.groupEnd()
		}
	},
	logger(title = "", log = "", titleBg = "#606060", logBg = "#1475B4", titleColor = "#fff", logColor = "#fff") {
		console.log(
			`%c${title}%c${log}`,
			"padding: 2px 8px;" + "border-radius: 3px 0 0 3px;" + `color: ${titleColor};` + `background: ${titleBg};`,
			"padding: 2px 8px;" + "border-radius: 0 3px 3px 0;" + `color: ${logColor};` + `background: ${logBg};`,
		);
	},
}

export default Logger
