<template>
	<div class="card" :style="{width:width + 'px'}">
		<img :src="src" :style="{width:width + 'px'}"/>
		<div class="content">
			<span class="title">{{title}}</span>
			<span class="desc">{{desc}}</span>
			<span class="look">{{look}}</span>
			<a :href="href" target="_blank" class="more">了解更多</a>
		</div>
	</div>
</template>

<script>
	export default{
		props:['src',"title","desc","look","href","width"],
		name:"ls-header-image"
	}
</script>

<style lang="less" scoped>
	.card{
		cursor: pointer;
		position: relative;
		overflow: hidden;
		// width: 300px;
		height: 210px;
		img{
			position: absolute;
			// width: 300px;
			height: 210px;
			transition: transform 0.5s;
		}
		.content{
			position: absolute;
			bottom: -25%;
			z-index: 999;
			padding-left: 10px;
			transition: bottom 0.5s;
			width: 100%;
			height: 70%;
			background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 70%);
			span{
				display: block;
			}
			.title{
				font-size: 16px;
				color: white;
				margin-bottom: 5px;
			}
			.desc{
				color: white;
				font-size: 21px;
				font-weight: bold;
				margin-bottom: 5px;
			}
			.look{
				color: white;
				font-size: 14px;
			}
			a{
				display: block;
				margin-top: 20px;
				color: white;
				position: relative;
				font-size: 15px;
				text-decoration: none;
				width: 70px;
			}
			a::after{
				content: ">";
				position: absolute;
				padding-left: 5px;
				color: #c71335;
				transition: padding-left 0.5s;
			}
			a:hover::after{
				padding-left: 15px;
			}
		}
	}
	.card:hover{
		.content{
			bottom: -6%;
		}
		img{
			transform: scale(1.08);
		}
	}
</style>
