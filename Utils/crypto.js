import CryptoJS from 'crypto-js';

// 生成 唯一 uuid
let uuid = () => {
	let s = [];
	let hexDigits = "0123456789abcdef";
	for (let i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";
	
	return s.join("");
};

// TripleDES CBC 加密 (结果为 Hex)
let encrypt = (src, key, iv) => {
	return CryptoJS.TripleDES.encrypt(src, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(iv),
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
};

// TripleDES CBC 加密 (结果为 Base64)
let encryptB64 = (src, key, iv) => {
	return CryptoJS.enc.Base64.stringify(encrypt(src, key, iv).ciphertext);
};

// TripleDES CBC 解密
let decrypt = (b64Cipher, key, iv) => {
	return CryptoJS.TripleDES.decrypt(b64Cipher, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(iv),
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});
};

// 清空本地储存库
let emptyLocalStorage = () => {
	let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let i = 0; i < base.length; i++) {
		localStorage.removeItem(base[i]);
	}
	localStorage.removeItem("version");
};

// 初始化密钥
let initEncryptKey = () => {
	let randId = uuid();
	let splitIndex = randId.lastIndexOf("-");
	let key = randId.substr(0, splitIndex);
	let iv = randId.substr(splitIndex + 1);
	let keyArr = key.split("-");
	let version = keyArr[2][0];
	keyArr[2] = keyArr[2].slice(1);
	let a = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(keyArr[0]));
	let b = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(keyArr[1]));
	let c = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(keyArr[2]));
	let d = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(keyArr[3]));
	let s = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(iv));
	
	localStorage.setItem("a", a);
	localStorage.setItem("b", b);
	localStorage.setItem("c", c);
	localStorage.setItem("d", d);
	localStorage.setItem("s", s);
	localStorage.setItem("version", version);
	
	console.log("加密保存密钥到本地存储");
	console.log(`a => ${a}`);
	console.log(`b => ${b}`);
	console.log(`c => ${c}`);
	console.log(`d => ${d}`);
	console.log(`s => ${s}`);
	console.log(`version => ${version}`);
};

const getDecryptKey = () => {
	let a = CryptoJS.enc.Base64.parse(localStorage.getItem("a") || "").toString(CryptoJS.enc.Utf8);
	let b = CryptoJS.enc.Base64.parse(localStorage.getItem("b") || "").toString(CryptoJS.enc.Utf8);
	let c = CryptoJS.enc.Base64.parse(localStorage.getItem("c") || "").toString(CryptoJS.enc.Utf8);
	let d = CryptoJS.enc.Base64.parse(localStorage.getItem("d") || "").toString(CryptoJS.enc.Utf8);
	let v = localStorage.getItem("version");
	return `${a}-${b}-${v}${c}-${d}`;
};

const getIv = () => {
	return CryptoJS.enc.Base64.parse(localStorage.getItem("s") || "").toString(CryptoJS.enc.Utf8);
};

// 加密数据
const encryptData = (data, key = getDecryptKey(), iv = getIv()) => {
	key = CryptoJS.SHA512(key).toString();
	iv = CryptoJS.SHA512(iv).toString();
	return encryptB64(data, key, iv);
};

// 解密数据
const decryptData = (data, key = getDecryptKey(), iv = getIv()) => {
	key = CryptoJS.SHA512(key).toString();
	iv = CryptoJS.SHA512(iv).toString();
	return decrypt(data, key, iv).toString(CryptoJS.enc.Utf8);
};

// 初始化本地存储库
let initLocalStorage = () => {
	emptyLocalStorage();
	initEncryptKey();
};

// 根据所需格式转换对象数组
let convertObjectArray = (arr, convertObject) => {
	if (!Array.isArray(arr)) {
		return [];
	}
	let convertArray = [];
	for (let i = 0; i < arr.length; i++) {
		let tmpObj = {};
		let obj = arr[i];
		
		let convertKeys = Object.keys(convertObject);
		for (let k = 0; k < convertKeys.length; k++) {
			for (let j = 0; j < convertKeys.length; j++) {
				let key = convertKeys[j];
				if (obj.hasOwnProperty(convertObject[key])) {
					tmpObj[key] = obj[convertObject[key]];
				}
			}
		}
		convertArray.push(tmpObj);
	}
	return convertArray;
};

export {
	uuid,
	encrypt,
	encryptB64,
	decrypt,
	initLocalStorage,
	emptyLocalStorage,
	encryptData,
	decryptData,
	convertObjectArray,
}
