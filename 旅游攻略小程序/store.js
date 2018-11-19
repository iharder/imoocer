import destination from "./store/destination.js";
import write from "./store/write.js";
import mine from "./store/mine.js";
const app = getApp();
export default {
  data: {
    destination: destination.data,
    write: write.data,
    mine: mine.data,
    mainIndex: "999"
  },
  // 主体渐变
  mainChange(index = null, config) {
    if (index == null) {
      this.data.mainIndex = "mainIndex";
      this.update();
    }
    this.data.mainIndex = Number.parseInt(index);
    this.update();
  },
  // 打开写游记
  center() {
    let data = this.data.write;
    let mask = data.writeMask;
    mask = !mask;
    data.writeMask = mask;
    this.update();
  },
  // 懒加载配置
  lazyIndex(num, config) {
    let store = config.store;
    let name = config.name;
    let lazy = this.data[store][name];
    let likeLength = 0;
    lazy.forEach((item) => {
      if (item == num) {
        likeLength++;
      }
    });
    if (likeLength != 0) {
      return false;
    };
    lazy.push(num);
    this.update();
    return true;
  },
  // 选择加载
  selectTab(index, config) {
    let store = config.store;
    let name = config.name;
    let noteIndex = this.data[store][name];
    let _this = this;
    let likeLength = 0;
    let lazy = this.lazyIndex(index, config);
    if (!lazy) return false;
    wx.showLoading({
      title: '加载中',
    });
    return true;
  },
  // 写作模块
  write(name, e = null) {
    let bindInput = (e) => {
      this.data.write.inputValue = e.detail.value;
      this.update();
    };
    let bindBlur = () => {
      let value = this.data.write.inputValue;
      // if (value != "") {
      //   this.data.write.inputValue = "";
      //   this.update();
      // };
    };
    let close = () => {
      this.data.write.inputValue = '';
      this.update();
    };
    let back = (e) => {
      wx.navigateBack({
        delta: e
      })
    };
    let addText = () => {
      wx.navigateTo({
        url: `../write_strategy/index`,
      })
    };
    let addImg = (e) => {
      let _this = this;
      let index = 0;
      let text = this.data.write.text;
      app.fileUpload().then(res => {
        let img = res;
        if (e == "traval") {
          let travalImg = _this.data.write.travalImg;
          travalImg.push(res);
        } else {
          // tempFilePath可以作为img标签的src属性显示图片
          text.splice(index, 0, {
            name: "img",
            value: img
          });
          if (_this.data.write.tempFilePaths.length == 0) {
            _this.data.write.tempFilePaths = res;
          };
        }
        _this.update();
      });
    };
    switch (name) {
      case "bindInput":
        bindInput(e);
        break;
      case "bindBlur":
        bindBlur();
        break;
      case "close":
        close();
        break;
      case "back":
        back(e);
        break;
      case "addText":
        addText();
        break;
      case "addImg":
        addImg(e);
        break;
    }
  }
}