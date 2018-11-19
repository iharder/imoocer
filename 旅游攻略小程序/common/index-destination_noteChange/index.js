import {
  MineModel
} from "../../models/mine.js";
const mineModel = new MineModel();
import {
  DesModel
} from "../../models/destination.js";
const desModel = new DesModel();
// common/index-destination_noteChange/inde.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    bgColor: {
      type: String,
      value: '#fff'
    },
    num: {
      type: Number,
      value: 200
    },
    list: {
      type: Array,
      value: ['全部', '推荐', '最新']
    },
    title: {
      type: String,
      value: '玩乐攻略'
    },
    color: {
      type: String,
      value: ""
    },
    have: {
      type: Boolean,
      value: false
    },
    _index: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  ready: function() {

  },
  methods: {
    changeBox() {
      let _this = this;
      let have = this.data.have;
      this.setData({
        have: !have
      })
    },
    changeType(e) {
      let type = e.currentTarget.dataset.type;
      let have = this.data.have;
      this.triggerEvent("changeType", {
        type: type
      });
      this.setData({
        _index: type,
        have: !have
      });
    }
  }
})