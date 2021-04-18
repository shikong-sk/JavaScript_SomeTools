<template>
	<div>
		<video style="object-fit: contain;height: 100%" class="w-100" ref="video" preload="metadata" :src="videoSrc" controls></video>
	</div>
</template>

<script>
	export default {
		name: "CVideo",
		props: {
			videoSrc: {
				type: String,
				required: true,
			},
			videoObject: {},
		},
		computed: {
			video: {
				get: function () {
					if (!this.videoObject) {
						return this.innerVideoObject;
					}
					return this.videoObject;
				},
				set: function (v) {
					this.$emit("update:videoObject", v);
					this.innerVideoObject = v;
				},
			},
		},
		data() {
			return {
				innerVideoObject: undefined,
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.video = this.$refs.video;
				this.video.onerror = this.loadError;
				this.video.onloadstart = this.loadStart;
			});
		},
		methods: {
			// 视频加载，失败事件
			loadError() {
				let msg;
				// networkState 3-网络异常，1-网络正常
				if (this.$refs.video.networkState === HTMLVideoElement.NETWORK_NO_SOURCE) {
					msg = "视频加载失败";
				} else if (this.$refs.video.networkState === HTMLVideoElement.NETWORK_EMPTY) {
					msg = "找不到视频文件";
				}
				// 3-当解码时发生错误
				if (this.$refs.video.error.code === MediaError.MEDIA_ERR_DECODE) {
					msg = '视频解码失败'
				}
				this.$emit("error", msg);
			},
			// 视频开始加载
			loadStart(){
				this.$emit("error", undefined);
			}
		},
	}
</script>

<style scoped>

</style>
