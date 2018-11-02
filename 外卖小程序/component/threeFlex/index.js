// component/threeFlex/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    threeList: Array,
    mainStyle: Object,
    imgSrc: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready() {
    let l = this.data.threeList.length;
    let w = 750 / l;
    this.setData({
      w: w
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})