<template>
	<transition name="viewer-fade" v-if="showViewer">
		<div tabindex="-1" ref="el-image-viewer__wrapper" class="el-image-viewer__wrapper"
		     :style="{ 'z-index': zIndex }">
			<div class="el-image-viewer__mask" @click.self=""></div>
			<!-- CLOSE -->
			<span class="el-image-viewer__btn el-image-viewer__close" @click="closeViewer">
                <i class="el-icon-close"></i>
            </span>
			<div style="position: relative;top: 15vh">
				<video style="object-fit: contain;height: 80vh" class="w-100" ref="video" preload="metadata"
				       :src="videoSrc"
				       controls></video>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "CVideoViewer",
	props: {
		show:{
			type: Boolean,
			default: false,
			required: true
		},
		zIndex: {
			type: Number,
			default: 2000,
		},
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
		showViewer:{
			get: function () {
				return this.show;
			},
			set: function (v) {
				this.$emit("update:show", v);
			},
		}
	},
	data() {
		return {
			innerVideoObject: undefined,
		}
	},
	mounted() {
		this.$nextTick(() => {
			const body = document.querySelector("body");
			if (body.append) {
				body.append(this.$el);
			} else {
				body.appendChild(this.$el);
			}
		});
	},
	watch:{
		showViewer(v){
			if (v){
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.video = this.$refs.video;
						this.video.onerror = this.loadError;
						this.video.onloadstart = this.loadStart;
					},0)
				})
			}
		}
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
		loadStart() {
			this.$emit("error", undefined);
		},
		closeViewer(){
			this.showViewer = false;
		}
	},
}
</script>

<style scoped>

</style>
