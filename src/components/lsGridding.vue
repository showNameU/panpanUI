<template>
	<div class="parcel" :class="[type]">
		<div>
			<slot name="one"></slot>

			<slot name="two"></slot>

			<slot name="three"></slot>
		</div>
		<div>
			<slot name="four"></slot>

			<slot name="five"></slot>

			<slot name="six"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		props:['type'],
		name: "ls-gridding"
	}
</script>

<style scoped lang="less">
	.parcel {
		div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
	}
</style>
