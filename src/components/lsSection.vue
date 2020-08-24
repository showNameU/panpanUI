<template>
	<div class="card">
		<img :src="src" />
		<div class="content">
			<span class="title">{{title}}</span><br />
			<span class="desc">{{desc}}</span><br />
			<span class="look">{{look}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:["src","title","desc","look"],
		name:"ls-section"
	}
</script>

<style scoped lang="less">
	.card{
		width:303px;
		height: 375px;
		overflow: hidden;
		position: relative;
		img{
		transition: transform 1s;
			position: absolute;
			width:303px;
			height: 375px;
		}
		.content{
			width: 100%;
			position: absolute;
			z-index: 999;
			text-align: center;
			bottom: 20px;
			.title{
				font-size: 21px;
				color: white;
				font-weight: bold;
			}
			.desc{
				color: white;
				font-size: 14px;
			}
			.look{
				color: #f1904A;
				font-size: 24px;
				font-weight: bold;
			}
		}
	}
	.card:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.card:hover img{
		transform: scale(1.08);
	}
</style>
