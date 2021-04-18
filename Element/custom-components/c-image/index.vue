<template>
	<div @click="showPreview" style="display: inline-block;" :style="{'height':height,'width':width}">
		<el-image :lazy="lazy" fit="contain" :src="imgSrc" :style="{'height':height,'width':width}"
		          style="cursor: pointer"></el-image>
		<CImageViewer v-model="preview" :image-src="imgPreviewSrc||imgSrc" :linkHref="linkHref" :linkText="linkText" :linkClick="linkClick"></CImageViewer>
	</div>
</template>

<script>
import CImageViewer from "@/components/c-image-viewer";

export default {
	name: "CImage",
	components: {
		CImageViewer,
	},
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
		lazy: {
			type: Boolean,
			default: false,
		},
		height: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			required: true,
		},
		imgSrc: {
			type: String,
			required: true,
		},
		imgPreviewSrc:{
			type: String,
		},
		enablePreview: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			preview: false,
		}
	},
	methods: {
		showPreview() {
			if (!this.enablePreview) {
				return;
			}
			this.preview = true;
		},
	},
}
</script>

<style scoped>

</style>
