<template>
	<input :type="type" :placeholder="placeholder" :class="[cls == 'pill'?'pill':'normal']" :disabled="disabled"/>
</template>

<script>
	export default{
		name:"ls-input",
		props:["placeholder","type","disabled","cls"]
	}
</script>

<style scoped>
	.normal{
		outline: none;
		padding-left: 3px;
		width: 150px;
		border: none;
		border-bottom: 3px solid #2486b9;
	}
	.normal:focus{
		border-bottom: 3px solid #ee3f4d;
	}
	.pill{
		outline: none;
		border: 1px solid #ff4d4d;
		border-radius: 15px;
		padding-left: 5px;
		height: 20px;
	}
	.pill:focus{
		border: 1px solid #2486b9;
	}
</style>
