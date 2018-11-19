// common/index-destination_detailTitle/index.js
import {
  postUnConcern,
  postConcern
} from "../../models/user.js";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    concern: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: ""
    },
    list: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关注
    concern() {
      let concern = this.data.concern;
      let user_id = this.data.list.user_id;
      if (concern) {
        this.setData({
          concern: !concern
        });
        postUnConcern({
          user_id: user_id
        });
      } else {
        this.setData({
          concern: !concern
        });
        postConcern({
          user_id: user_id
        });
      }

    },
  }
})