<template>
	<div class="card">
		<div class="header">
			<img :src="src" />
		</div>
		<div class="title">
			<p>{{content}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:['src','content'],
		name:"ls-card"
	}
</script>

<style scoped lang="less">
	.card{
		.header{
			width: 303px;
			height: 190px;
			overflow: hidden;
			img{
				width: 303px;
			}
		}
		.title{
			width: 303px;
			height: 55px;
			display: flex;
			justify-content: center;
			align-items: center;
			p{
				overflow:hidden;
				color: #515151;
				font-size: 16px;
			}
		}
	}
	.card:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
