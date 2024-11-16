"use strict";
const common_vendor = require("../common/vendor.js");
const buttonPosition = () => {
  const buttonData = common_vendor.reactive({
    btn_height: "0px",
    btn_top: "0px",
    btn_bottom: "0px"
  });
  const {
    height,
    top,
    bottom
  } = common_vendor.index.getStorageSync("buttonPosition");
  buttonData.btn_height = height + "px";
  buttonData.btn_top = top + "px";
  buttonData.btn_bottom = bottom + 10 + "px";
  return buttonData;
};
exports.buttonPosition = buttonPosition;
