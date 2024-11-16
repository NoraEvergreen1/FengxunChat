<template>
	<!-- 顶部导航栏 -->
	<view class="menu-view">
		<view class="button-top"></view>
		<view class="menu-style">
			<text v-for="(item,index) in menu" :key="index">{{item}}</text>
		</view>
	</view>
	<view class="ment-view-height"></view>
	<!-- 创建新对话的内容展示 -->
	<!-- <startPageVue v-show="selectNavIndexFun.index === 1 && chatbotMessageFun.messages.length <= 0"></startPageVue> -->
	<!-- 文生文的对话组件 -->
	<!-- <chatAreaVue class="chatAreaVue" v-show="selectNavIndexFun.index === 1 && chatbotMessageFun.messages.length > 0"></chatAreaVue> -->
	<!-- <startPageVue></startPageVue> -->
	<chatAreaVue></chatAreaVue>
</template>

<script setup>
	import {
		ref
	} from "vue"
	// 胶囊按钮
	import {
		buttonPosition
	} from "../../api/component-api";
	const {
		btn_height,
		btn_top,
		btn_bottom
	} = buttonPosition()
	// 创建新对话的内容展示
	import startPageVue from "./component/start-page.vue";
	import chatAreaVue from "./component/chat-area.vue";
	const menu = ref(["我的", '对话', 'AI绘画'])
</script>

<style lang="less">
	page {
		background-color: #F3F3F3;
	}

	.menu-view {
		background: linear-gradient(#FCE7CC, #F3F3F3);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		height: v-bind(btn_bottom);

		.button-top {
			height: v-bind('btn_top');
		}

		.menu-style {
			display: flex;
			align-items: center;
			height: v-bind('btn_height');
			padding-left: 20rpx;
		}

		.menu-style text {
			color: #9d9486;
			font-weight: bold;
		}

		.menu-style text:nth-child(2) {
			padding: 0 60rpx;
		}
	}

	.ment-view-height {
		height: v-bind('btn_bottom');
	}
</style>