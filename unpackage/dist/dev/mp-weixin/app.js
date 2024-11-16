"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/chat-view/index.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      const buttonPosition = common_vendor.index.getStorageSync("buttonPosition");
      if (!buttonPosition) {
        const res = common_vendor.index.getMenuButtonBoundingClientRect();
        common_vendor.index.setStorageSync("buttonPosition", res);
      }
    });
    return () => {
    };
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
