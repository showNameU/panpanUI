<template>
	<div>
		<button class="up"></button>
		<button class="down"></button>
	</div>
</template>

<script>
	export default{
		name:"ls-special-button"
	}
</script>

<style lang="less" scoped>
div{
	position: relative;
	.up{
		position: absolute;
		outline: none;
		width: 300px;
		height: 80px;
		background-color: #ece4d0;
		border: 1px solid #cdb79c;
		border-radius: 10px;
		transform: skew(30deg,0deg);
		z-index: 99;
		top: 10px;
	}
	.down{
		position: absolute;
		z-index: 999;
		outline: none;
		width: 300px;
		height: 80px;
		background-color: #f6efe2;
		border: 1px solid #cdb79c;
		border-radius: 10px;
		transform: skew(30deg,0deg);
		left: 10px;
		transition: transform 0.5s;
	}
	.down:hover{
		transform: translate(-10px,10px) skew(30deg,0deg);
	}
}
</style>
