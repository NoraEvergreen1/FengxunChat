import {
	reactive
} from "vue"

// 获取胶囊按钮位置
export const buttonPosition = () => {
	const buttonData = reactive({
		btn_height: '0px',
		btn_top: '0px',
		btn_bottom: '0px'
	})
	const {
		height,
		top,
		bottom
	} = uni.getStorageSync('buttonPosition')
	buttonData.btn_height = height + 'px'
	buttonData.btn_top = top + 'px'
	buttonData.btn_bottom = bottom + 10 + 'px'
	return buttonData
}