<template>
	<div class="card">
		<img :src="src" />
		<div class="content">
			<span class="title">{{title}}</span>
			<span class="desc">{{desc}}</span>
			<span class="look">{{look}}</span>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:["src","title","desc","look"],
		name:"ls-product-card"
	}
</script>

<style lang="less" scoped>
	.card{
		box-sizing: border-box;
		width:303px;
		height: 375px;
		overflow: hidden;
		position: relative;
		img{
			position: absolute;
			height: 230px;
			margin-left: 36.5px;
			margin-top: 30px;
		}
		.content{
			overflow: hidden;
			width: 100%;
			position: absolute;
			z-index: 999;
			text-align: center;
			bottom: 20px;
			span{
				display: block;
			}
			.title{
				font-size: 16px;
				color: #333333;
				font-weight: bold;
				margin-bottom: 4px;
			}
			.desc{
				color: #999999;
				font-size: 14px;
				margin-bottom: 4px;
			}
			.look{
				color: #cc0000;
				font-size: 22px;
				font-weight: bold;
			}
		}
	}
	.card:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
