// 克隆方法 (浅拷贝)
let cloneObj = (obj) => {
	return Object.assign({ __proto__: obj.__proto__ }, obj);
};

// 克隆方法 (深拷贝, 不支持内嵌函数方法)
let deepCloneObj = (obj) => {
	let objJson = JSON.stringify(obj);
	return JSON.parse(objJson);
};

// 循环检测元素是否在可视区域
const isElementInViewportWithLoopCheck = (el, trueCB, falseCB = () => {
}, top = true, left = true, bottom = true, right = true, interval = 100) => {
	let _break = false;
	let loopCheck = () => {
		if (_break) {
			return;
		}
		setTimeout(() => {
			if (isElementInViewport(el, top, left, bottom, right)) {
				_break = trueCB();
			} else {
				_break = falseCB();
				loopCheck();
			}
		}, interval);
	};
	loopCheck();
};


// 获取元素是否在可视区域
const isElementInViewport = (el, top = true, left = true, bottom = true, right = true, strict = true) => {
	if (!(el instanceof HTMLElement)) {
		return false;
	}
	if (!top && !bottom && !left && !right) {
		return false;
	}
	let rect = el.getBoundingClientRect();
	if (strict) {
		return (
			(top ? rect.top >= 0 : true) &&
			(left ? rect.left >= 0 : true) &&
			(bottom ? rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) : true) &&
			(right ? rect.right <= (window.innerWidth || document.documentElement.clientWidth) : true)
		);
	} else {
		return (
			(top ? rect.top >= 0 : false) ||
			(left ? rect.left >= 0 : false) ||
			(bottom ? rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) : false) ||
			(right ? rect.right <= (window.innerWidth || document.documentElement.clientWidth) : false)
		);
	}
};


// 打开浏览器下载弹窗 触发下载事件
let browserDownload = (url, saveName) => {
	if (typeof url == 'object' && url instanceof Blob) {
		url = URL.createObjectURL(url); // 创建blob地址
	}
	let aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	let event;
	if (window.MouseEvent) {
		event = new MouseEvent('click');
	} else {
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0,
			0, 0, 0, 0, false, false,
			false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

let blobToBase64Img = (blob) => {
	return new Promise(resolve => {
		let oFileReader = new FileReader();
		oFileReader.onloadend = function (e) {
			let base64 = e.target.result;
			resolve(base64)
		};
		oFileReader.readAsDataURL(blob);
	})
}



export
{
	cloneObj,
	deepCloneObj,
	isElementInViewport,
	isElementInViewportWithLoopCheck,
	browserDownload,
	blobToBase64Img,
};
