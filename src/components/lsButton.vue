<template>
	<button :class="[type,[hollow != undefined?'hollow'+ type : ''],[circle != undefined?'circle' : ''],[pill != undefined? 'pill' : '']]">{{value}}</button>
</template>

<script>
	export default {
		name:"ls-button",
		props: ["value","type","circle","hollow","pill"],
		created(){
		}
	}
</script>

<style scoped>
	.succeed{
		outline: none;
		width: 80px;
		height:30px;
		background-color: #2486b9;/*宝石蓝*/
		color: white;
		font-size: 16px;
		border: 1px solid #2486b9;
		letter-spacing:3px;
		text-align: center;
		border-radius: 5px;
	}
	.danger{
		outline: none;
		width: 80px;
		height:30px;
		background-color: #ee3f4d;  /*桂花红*/
		border: 1px solid #ee3f4d;
		color: white;
		font-size: 16px;
		letter-spacing:3px;
		text-align: center;
		border-radius: 5px;
	}
	.normal{
		outline: none;
		width: 80px;
		height:30px;
		background-color: #1ba784;  /*竹绿*/
		color: white;
		border: 1px solid #1ba784;
		font-size: 16px;
		letter-spacing:3px;
		text-align: center;
		border-radius: 5px;
	}
	.circle{
		width: 50px;
		height: 50px;
		border-radius: 50% !important;
		letter-spacing:0;
	}
	.hollowsucceed{
		background-color: transparent;
		color: #2486B9;
		border-radius: 0rem;
	}
	.hollownormal{
		background-color: transparent;
		color: #1ba784;
		border-radius: 0rem;
	}
	.hollowdanger{
		background-color: transparent;
		color: #ee3f4d;
		border-radius: 0rem;
	}
	.pill{
		border-radius: 20px;
	}
</style>
