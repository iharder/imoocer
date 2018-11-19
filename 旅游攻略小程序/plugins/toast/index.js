// plugins/toast/index.js
let _compData = {
  '_toast_.isHide': false,
  '_toast_.content': "",
}

let toastPannel = {
  showToast: function(data){
    let that = this;
    that.setData({
      '_toast_.isHide': true,
      '_toast_.content': data,
    });

    setTimeout(function(){
      that.setData({
        '_toast_.isHide': false,
      });
    }, 3000);
  },
}

function ToastPannel(){
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage;
  Object.assign(curPage, toastPannel);
  curPage.toastPannel = this;
  // 给组件的数据合并到页面的data对象中
  curPage.setData(_compData);
  return this;
}

module.exports = {
  ToastPannel
}