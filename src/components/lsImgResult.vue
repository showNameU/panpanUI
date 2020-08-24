<template>
	<div class="box">
		<div class="magazine">
			<img :src="path" />
		</div>
		<div class="m_font">
			<p>生殖是人类最为珍贵的财富，一直默默地主宰着我们身体的变化。我们的生命、欢乐、美丽、激情及魅力，一句话，我们的幸福乃至命运都系于生殖</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:['path'],
		name:"ls-img-result",
		data(){
			return {
			}
		}
	}
</script>

<style lang="less" scoped>
	.box{
		display: flex;
		justify-content: center;
		align-items: center;
		.magazine{
			img{
				border: 7px solid white;
				width: 200px;
			}
			transition: transform 0.5s;
		}
		.magazine:hover{
			transform: translateY(-10px);
		}
		.m_font{
			margin-left: 20px;
			p{
				white-space:normal; 
				width:250px;
				font-size: 16px;
			}
			p:first-letter{
				font-size: 25px;
				font-weight: bold;
				margin-right: 3px;
			}
		}
	}
</style>
