// plugins/loading/index.js
let _compData = {
  '_loading_.isHide': false,
  // '_loading_.message': "",
  '_loading_.bottom': 0,
}

let loadingPannel = {
  loading: function(){
    console.log("loading.....");
  },
  
  show: function() {
    let that = this;
    that.setData({
      '_loading_.isHide': true,
      // '_loading_.message': data,
    });
  },

  setBottom: function(data) {
    let that = this;
    that.setData({
      '_loading_.bottom': data,
    });
  },

  hide: function() {
    let that = this;
    that.setData({
      '_loading_.isHide': false,
    });
  },
}

function LoadingPannel() {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage;
  Object.assign(curPage, loadingPannel);
  curPage.loadingPannel = this;
  // 给组件的数据合并到页面的data对象中
  curPage.setData(_compData);
  return this;
}

module.exports = {
  LoadingPannel
}