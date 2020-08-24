<template>
	<div class="box">
		<div class="cover"><slot></slot></div>
		<img src="../assets/1.jpeg" />
	</div>
</template>

<script>
	export default {
		name:"ls-suspend"
	}
</script>

<style scoped lang="less">
	.box{
		position: relative;
		width: 150px;
		height: 150px;
		transition: transform 0.5s;
		.cover{
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			top: 0;
			background-color: rgba(0, 0, 0, 0.4);
			border-radius: 10px;
			display: none;
			color: white;
			
		}
		img{
			width: 150px;
			height: 150px;
			border-radius: 10px;
		}
		:hover .cover{
			display: block;
		}
	}
	.box:hover{
		transform: translateY(-10px);
	}
	
</style>
