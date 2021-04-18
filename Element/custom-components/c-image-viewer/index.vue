<template>
	<div>
		<viewer style="z-index: 99999" v-if="showDialog" :on-close="closeViewer" :url-list="[imageSrc]" :linkHref="linkHref" :linkText="linkText" :linkClick="linkClick"></viewer>
	</div>
</template>

<script>
// 导入组件
import Viewer from '@/components/c-image-viewer/viewer';

export default {
	name: "ImagePreview",
	components: { Viewer },
	props: {
		linkClick:{
			type:Function,
		},
		linkHref:{
			type:String
		},
		linkText:{
			type:String
		},
		value: {
			type: Boolean,
			default: false,
			required: true,
		},
		imageSrc:{
			type: String,
			required: true,
		}
	},
	computed: {
		showDialog: {
			get: function () {
				if (this.value && !this.loaded) {
					this.loaded = true;
				}
				return this.value;
			},
			set: function (v) {
				this.$emit("input", v);
			},
		},
	},
	data() {
		return {
			loaded: false,
		};
	},
	mounted() {
		// 将组件挂载到最顶层 Body下 全局置顶显示
		this.$nextTick(() => {
			const body = document.querySelector("body");
			if (body.append) {
				body.append(this.$el);
			} else {
				body.appendChild(this.$el);
			}
		});
	},
	methods: {
		closeViewer(){
			this.showDialog = false
		},
	},
};
</script>

<style scoped>
::v-deep .video-dialog {
	overflow: hidden;
}

::v-deep .video-dialog .el-dialog__body {
	height: calc(100% - 100px);
	overflow: auto;
	margin-top: -20px;
}
</style>
