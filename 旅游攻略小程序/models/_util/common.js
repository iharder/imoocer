class Common {
  constructor() {

  }
  // 原生showAction
  showActionSheet(name = []) {
    return new Promise((resolve, reject) => {
      wx.showActionSheet({
        itemList: name,
        success(res) {
          name.forEach((item, index) => {
            if (res.tapIndex == index) {
              resolve();
            }
          })
        }
      })
    })
  }
  // 请输入信息
  pleEnterInfo(value) {
    if (!value) {
      wx.showToast({
        title: '请输入信息',
        icon: "none"
      });
      return false;
    }
    return true;
  }
  // 获取地理位置
  getLocation() {
    return new Promise(function(resolve, reject) {
      wx.getLocation({
        success: function(res) {
          resolve(res);
        },
        fail: function(res) {
          resolve("获取地理位置失败");
        },
        complete: function(res) {},
      })
    })
  }
  // 得到当前页面
  getPage() {
    let getPage = getCurrentPages();
    let length = getPage.length;
    return getPage[length - 1];
  }
  // 设置当前页面的某个对象
  setConfig(config, name, value) {
    let page = this.getPage();
    let _config = page.data[config];
    _config[name] = value;
    page.setData({
      config: _config
    });
  }
  // 懒加载盒子
  lazy(index) {
    let lazyBox = this.getPage().data.lazy;
    let likeLength = 0;
    lazyBox.forEach((item) => {
      if (item == index) {
        likeLength++;
      }
    });
    if (likeLength != 0) {
      return false;
    };
    lazyBox.push(index);
    this.getPage().setData({
      lazy: lazyBox
    });
    return true;
  }
  // 是否登录
  isLogin() {
    let page = getPage();
    let login = page.selectComponent("#login");
    if (page.data.userData.length == 0) {
      login.showDialog();
      return false;
    }
    return true;
  }
}
const common = new Common();
const {
  getPage
} = common;
export {
  Common,
  getPage
}