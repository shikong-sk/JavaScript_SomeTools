<template>

</template>

<script>
import { api } from "@/api/ncfollow/person";
import iFun from "./fun"
import { params } from "./fun"

export default {
	name: "index",
	beforeMount() {
		console.log(iFun,iFun.name)

		let dynamicWorkerScript3 = `
        self.addEventListener('message', (e) => {
            let {name} = e.data
            let str = "dynamicWorker: " + name;
            console.log(e.data)
            ` + String(iFun) + `
            console.log(` + String(iFun) + `)
            `+iFun.name+`(e.data).then((res)=>{
                postMessage(res)
            })
        }, false);
        `;
		let dynamicWorkerBlob3 = new Blob([dynamicWorkerScript3]);
		let dynamicWorker3 = new Worker(URL.createObjectURL(dynamicWorkerBlob3));

		let param = this.$deepCloneObj(params);
		param.name = "dynamicWorker3";
		param.url = location.origin + this.$api.ncfollow.baseURL + api.list;
		param.method = "post"
		param.timeout = 5
		param.data = JSON.stringify({
			"faceImage": "",
			"keyword": "",
			"pageNumber": 1,
			"pageSize": 10,
			"personScope": "",
			"personSource": "",
			"personType": "",
		});

		dynamicWorker3.postMessage(param);
		dynamicWorker3.addEventListener("message", (event) => {
			console.log(event);
			console.log(event.data);
		});

		// let dynamicWorker4 = new Worker(URL.createObjectURL(dynamicWorkerBlob3));
		// dynamicWorker4.postMessage(["dynamicWorker4", location.origin + this.$api.ncfollow.baseURL + api.list]);
		// dynamicWorker4.addEventListener("message", (event) => {
		// 	console.log(event);
		// 	console.log(event.data);
		// });
	},
	mounted() {
		function stringToUint8Array(str) {
			let arr = encodeURI(str).split("").map((item) => {
				return item.charCodeAt(0);
			});
			return new Uint8Array(arr);
		}

		function uint8ArrayToString(uint8Arr) {
			let array = [...uint8Arr];
			let str = '';
			let chunk = 8 * 1024;
			let i = 0;
			for (; i < array.length / chunk; i++) {
				str += String.fromCharCode.apply(null, array.slice(i * chunk, (i + 1) * chunk));
			}
			str += String.fromCharCode.apply(null, array.slice(i * chunk));
			str = decodeURI(str);
			return str;
		}

		let arr = stringToUint8Array("shikong 时空旅行者");
		let sab = new SharedArrayBuffer(arr.length);
		let sabArr = new Int8Array(sab);
		arr.forEach((item, index) => {
			Atomics.store(sabArr, index, item);
		});
		console.log(uint8ArrayToString(sabArr));

		let sab2 = new SharedArrayBuffer(1024);
		let sabArr2 = new Int32Array(sab2);
		// 动态生成 Worker
		let dynamicWorkerScript = `
	    self.addEventListener('message', (e) => {
	        let str = "dynamicWorker: " + e.data[0];
	        let sabArr = e.data[1];
	        console.log(str + "=> 等待")
	        Atomics.wait(sabArr,1,0)
	        console.log(str + "=> 被唤醒")
	        postMessage(str)
	    }, false);
	    `;
		let dynamicWorkerBlob = new Blob([dynamicWorkerScript]);
		let dynamicWorker = new Worker(URL.createObjectURL(dynamicWorkerBlob));
		dynamicWorker.postMessage(["dynamicWorker", sabArr2]);
		dynamicWorker.addEventListener("message", (event) => {
			console.log(event, event.data);
			console.log(sabArr2);
		});

		let dynamicWorkerScript2 = `
	    self.addEventListener('message', (e) => {
	        let str = "dynamicWorker: " + e.data[0];
	        let sabArr = e.data[1];
	        console.time("模拟延迟唤醒")
	        setTimeout(()=>{
	            console.log(str + "=> 唤醒 等待 sabArr[1] 的线程")
	            Atomics.store(sabArr,1,1);
	            Atomics.notify(sabArr,1,1);
	            console.timeEnd("模拟延迟唤醒")
	        },500)
	        postMessage(str)
	    }, false);
	    `;
		let dynamicWorkerBlob2 = new Blob([dynamicWorkerScript2]);
		let dynamicWorker2 = new Worker(URL.createObjectURL(dynamicWorkerBlob2));
		dynamicWorker2.postMessage(["dynamicWorker2", sabArr2]);
		dynamicWorker2.addEventListener("message", (event) => {
			console.log(event, event.data);
			console.log(sabArr2);
		});
	},
};
</script>

<style scoped>

</style>
