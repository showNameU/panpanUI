<template>
	<div class="card">
		<div class="top_img">
			<img :src="mainSrc" />
		</div>
		<div class="content">
			<div class="header">
				<img :src="headSrc" />
				<span>{{headName}}</span>
			</div>
			<div class="cBody">
				<span class="cSpan">{{content}}</span>
			</div>
			<div class="category">
				<p>{{category}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['mainSrc', 'headSrc', 'headName', 'content', 'category'],
		name: "ls-comment"
	}
</script>

<style scoped lang="less">
	.card {
		background-color: white;
		width: 303px;
		.top_img {
			height: 190px;
			overflow: hidden;
			img {
				width: 303px;
			}
		}

		.content {
			.header {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 10px;
				color: gray;

				img {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					margin-left: 20px;
					margin-right: 10px;
					border: 2px solid white;
					box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
				}
			}

			.cBody {
				width: 85%;
				margin: 10px auto;
				height: 50px;

				.cSpan {
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}

			.category {
				height: 25px;
				width: 85%;
				margin: -5px auto;
				color: gray;
				padding-bottom: 40px;
			}
		}
	}

	.card:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>
