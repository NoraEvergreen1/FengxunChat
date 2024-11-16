<script setup>
	import {
		onLaunch
	} from "@dcloudio/uni-app"
	onLaunch(() => {
		// 获取胶囊按钮的位置
		const buttonPosition = uni.getStorageSync('buttonPosition')
		if (!buttonPosition) {
			const res = uni.getMenuButtonBoundingClientRect()
			uni.setStorageSync('buttonPosition', res)
		}
	})
</script>

<style>
	/*每个页面公共css */
	view,
	text {
		display: block;
		font-size: 33rpx;
	}

	image {
		display: block;
	}

	button {
		padding: 0;
		margin: 0;
		line-height: inherit;
		background-color: #fff;
	}

	button::after {
		border: none;
	}

	.text-show {
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>