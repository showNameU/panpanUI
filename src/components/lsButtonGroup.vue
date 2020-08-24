<template>
	<div>
		<button class="but butL">{{value1}}</button>
		<button class="but butR">{{value2}}</button>
	</div>
</template>

<script>
	export default{
		name:"ls-button-group",
		props:["value1","value2"]
	}
</script>

<style lang="less" scoped>
	.but{
		outline: none;
		width: 100px;
		height: 30px;
		border: none;
		font-size: 15px;
		font-weight: bold;
		letter-spacing: 3px;
	}
	.butL{
		border-radius: 20px 0px 0px 20px;
		background-color: #fe6056;
		color: white;
	}
	.butL:active{
		opacity: 0.7;
	}
	.butR{
		border-radius: 0px 20px 20px 0px;
		background-color: transparent;
		border: 1px solid #fe6056;
		color: #fe6056;
	}
	.butR:active{
		background-color: #e4e4e4;
	}
</style>
