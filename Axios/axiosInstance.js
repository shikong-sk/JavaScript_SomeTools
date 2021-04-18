import axios from "axios";

// 创建请求 并返回一个Axios实例
export function getAxiosInstance(axiosRequestConfig) {
	let instance = axios.create(axiosRequestConfig);
	// 全局 设置拦截器
	instance.interceptors.response.use(successCB, rejectCB);
	return instance;
}

// 请求成功回调
function successCB(response) {
	function processResponse(response) {
		if (response.status === 200) { // 响应成功
			return response;
		} else {
			return Promise.reject(response);
		}
	}
	
	if (response instanceof Promise) {
		let resp = {
			config    : {},
			data      : undefined,
			headers   : undefined,
			status    : 500,
			statusText: ""
		};
		response.then((r) => {
			resp = r;
		});
		return processResponse(resp);
	} else {
		return processResponse(response);
	}
}

// 请求失败回调
function rejectCB(error) {
	return Promise.reject(error);
}

export default getAxiosInstance;
