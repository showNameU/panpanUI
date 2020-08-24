<template>
	<div class="seal" :class="[circle != undefined ? 'circle' : '']" :style="{color:color,borderColor:color}">
		<span class="sealValue">{{value}}</span>
	</div>
</template>

<script>
	export default{
		name:"ls-seal",
		props:["value","color","circle"]
	}
</script>

<style scoped>
	.seal{
		width: 80px;
		height: 30px;
		border: 3px solid red;
		text-align: center;
		color: red;
		font-size: 18px;
		font-weight: bold;
		transform: rotate(20deg);
	}
	.sealValue{
		line-height: 30px;
	}
	.circle{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		font-size: 30px;
	}
	.circle .sealValue{
		line-height: 50px;
	}
</style>