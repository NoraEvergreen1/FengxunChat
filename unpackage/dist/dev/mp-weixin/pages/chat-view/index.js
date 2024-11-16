"use strict";
const common_vendor = require("../../common/vendor.js");
const api_componentApi = require("../../api/component-api.js");
if (!Math) {
  chatAreaVue();
}
const chatAreaVue = () => "./component/chat-area.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "114d010d": common_vendor.unref(btn_bottom),
      "8ee6d49a": common_vendor.unref(btn_top),
      "1af7f809": common_vendor.unref(btn_height)
    }));
    const {
      btn_height,
      btn_top,
      btn_bottom
    } = api_componentApi.buttonPosition();
    const menu = common_vendor.ref(["我的", "对话", "AI绘画"]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menu.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        b: common_vendor.s(_ctx.__cssVars()),
        c: common_vendor.s(_ctx.__cssVars()),
        d: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
wx.createPage(_sfc_main);
