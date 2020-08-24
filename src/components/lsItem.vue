<template>
	<div class="all">
		<div v-if="type == 'img'" class="img">
			<img :src="resource" />
		</div>
		<template v-else>
			<div class="fontDiv">
				<slot></slot>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		props: ['type', 'resource'],
		name: "ls-item"
	}
</script>

<style lang="less" scoped>
	.all {
		width: 20%;

		.img {
			width: 100%;
			height: 0px;
			padding-bottom: 100%;
			position: relative;

			img {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
			}
		}

		.fontDiv {
			text-align: center;
			padding: 10px;
			font-size: 16px;
			letter-spacing:1px;
		}
	}
</style>
