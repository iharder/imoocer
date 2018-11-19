// common/center_selectLabel/index.js
const app = getApp();
// 选中
const _checked = 1;
// 未选中
const _unchecked = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接收的数据
    list: {
      type: Array,
      value: []
    },
    // 主体颜色
    color: {
      type: String,
      value: ""
    },
    //默认盒子 
    labelBox: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 选中索引
    _index: 0,
    // 盒子
    labelBox: [],
    // 选中
    _checked: 1,
    // 未选中
    _unchecked: 0
  },
  ready() {
    if (this.data.labelBox.length != 0) return;
    // 获取盒子数量
    let boxLength = this.data.list.length;
    // 填充初始盒子
    let labelBox = Array(boxLength).fill(_unchecked);
    this.setData({
      labelBox: labelBox
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
      e = e.currentTarget.dataset;
      let labelIndex = e.labelindex;
      let cat_id = e.cat_id;
      let labelBox = this.data.labelBox;
      // 如果选中切换为0,未选中切换为1
      if (labelBox[labelIndex] == 0) {
        labelBox[labelIndex] = _checked;
      } else {
        labelBox[labelIndex] = _unchecked;
      };
      this.setData({
        labelBox: labelBox
      });
      this.triggerEvent("selectLabel", {
        labelBox: labelBox,
        cat_id: cat_id
      });
    }
  }
})