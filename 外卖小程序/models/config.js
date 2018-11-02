let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
wx.setStorageSync('extConfig', extConfig);
let openId = wx.getStorageSync("openId");

let config = {
  openid: openId,
  appid: extConfig.appid,
  appkey: extConfig.appkey
};

export {
  config
};