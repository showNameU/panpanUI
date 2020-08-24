<template>
	<div>
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"ls-navigation",
		data:function(){
			return {
				// isActive:1
			}
		}
	}
</script>

<style scoped lang="less">
	div{
		width:60px;
		text-align: center;
		border-radius: 20px;
		background-color: #1d253b;
		color: white;
		font-weight: bold;
		padding-top: 10px;
		padding-bottom: 10px;
		ul{
			list-style-type:none;
			padding:0px;
			li{
				line-height: 40px;
				margin-bottom: 10px;
			}
		}
	}
	.active{
		box-sizing: border-box;
		border-left: 3px solid #6994b4;
		background: linear-gradient(to right,#82dfd9,#1d253b);
	}
</style>
