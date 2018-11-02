import destination from "./store/destination.js";
import write from "./store/write.js";

export default {
  data: {
    destination: destination.data,
    write: write.data
  },
  // 打开写游记
  center() {
    let data = this.data.write;
    let mask = data.writeMask;
    mask = !mask;
    data.writeMask = mask;
    this.update();
  },
  // 写作模块
  write(name, e = null) {
    let bindInput = (e) => {
      this.data.write.inputValue = e.detail.value;
      this.update();
    };
    let bindBlur = () => {
      let value = this.data.write.inputValue;
      if (value != "") {
        this.data.write.inputValue = "";
        this.update();
      };
    };
    let close = () => {
      this.data.write.inputValue == '';
      this.update();
    }
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
    }
  }
}