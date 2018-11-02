import store from '../../store.js';
import create from '../../utils/create';
import {
  MenuModel
} from '../../models/index-tkfood-menu.js';
import {
  DiscountModel
} from "../../models/my-discount.js";
import {
  config
} from "../../models/config.js";
const menuModel = new MenuModel();
const discountModel = new DiscountModel();
const app = getApp();
let openid = wx.getStorageSync("openId");
config.openid = openid;
create(store, {
  data: {

  },
  onLoad: function() {
    wx.showLoading();
    let _this = this;
    let extConfig = wx.getStorageSync('extConfig');
    let openId = wx.getStorageSync("openId");
    let menu;
    //接收菜单数据
    wx.getLocation({
      success: res => {
        _this.store.data.addres.lat = res.latitude;
        _this.store.data.addres.lng = res.longitude;
        menu = menuModel.postMenu(extConfig, res.latitude, res.longitude, openid);
        menu.then(res => {
          let menu = res.data.menu;
          let peisong = res.data.peisong;
          let disMask = peisong.peisong_quyu;
          // // 处理参数价格
          _this.store.data.indexTkFood.selectMenuId = 0;
          _this.store.data.indexTkFood.menu = menu;
          _this.store.data.indexTkFood.peisong = peisong;
          _this.store.data.disMask = disMask;
          _this.update();
        });
      }
    });
    // 获取商家优惠信息
    let acConfig = {
      appid: extConfig.appid,
      appkey: extConfig.appkey,
      type: 1
    }
    let activity = discountModel.postSeller(acConfig);
    activity.then(res => {
      _this.store.data.indexTkFood.activity = res.data;
      _this.update();
    })
    Promise.all([activity, menu])
      .then(res => {
        wx.hideLoading();
      });
  },
  // 展现外卖页的条件判断
  onShow() {
    if (wx.getStorageSync("openId").length == 0) {
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },
  // 切换模块
  changeSlide(e) {
    let store = this.store.data;
    store.indexTkFood.changeIndex = e.detail.index;
    this.update();
  },
  // 切换菜单
  changeMenuName(e) {
    let store = this.store.data;
    store.indexTkFood.menuNameIndex = e.detail.index;
    this.update();
  },

  // 统计总价
  totalPrice(e) {
    let menu = this.store.data.indexTkFood.selectMenu;

    JSON.stringify(menu);
    let totalCount = 0;
    let totalPrice = 0;

    for (var index in menu) {
      totalCount += menu[index].count;
      totalPrice += ((menu[index].price / 100).toFixed(2) * menu[index].count);
    }

    this.store.data.indexTkFood.totalCount = totalCount;
    this.store.data.indexTkFood.totalPrice = totalPrice;

    // this.setData({
    //   totalCount: totalCount,
    //   totalPrice: totalPrice,
    // });

    this.update();
  },

  // 删除商品数量1
  reduceCart(e) {
    let list = this.store.data.indexTkFood.selectMenu;
    let menu = this.store.data.indexTkFood.menu;

    let index = e.detail.index;

    for (var x in menu) {
      for (var y in menu[x].data) {
        if (list[index] != null && list[index].menu_id == menu[x].data[y].menu_id) {
          if (menu[x].data[y].count > 0 && list[index].count > 0) {
            menu[x].data[y].count -= 1;
            list[index].count -= 1;
          } else {
            menu[x].data[y].count = 0;
            list[index].count = 0;
          }

          if (list[index].count == 0) {
            list.splice(index, 1);
            break;
          }
        }
      }
    }

    this.setData({
      selectMenu: list,
    });

    this.store.data.indexTkFood.menu = menu;
    this.totalPrice();
    this.update();

  },

  // 减少商品更新 
  cartReduceList(name, price, count, totalPrice, menuId, skuId, imgSrc) {
    let list = this.store.data.indexTkFood.selectMenu;
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == name) {
        if (count == 0) {
          list.splice(i, 1);
          break;
        }
        list[i] = {
          name: name,
          price: price,
          count: count,
          totalPrice: totalPrice,
          menuId: menuId,
          skuId: skuId,
          imgSrc: imgSrc
        };
      }
    }
    this.update();
  },

  // 选择规格
  selectStand(e) {
    this.openStandMask();
  },
  // 打开规格遮罩
  openStandMask() {
    this.store.data.indexTkFood.standMask = true;
    this.update();
  },
  // 关闭规格遮罩
  closeStandMask() {
    this.store.data.indexTkFood.standMask = false;
    this.update();
  },

  // 加入购物车
  joinCart(e) {
    let menu = this.store.data.indexTkFood.menu;
    let pIndex = e.detail.pindex;
    let cIndex = e.detail.cindex;
    let sIndex = e.detail.sindex;

    let menu_id = menu[pIndex].data[cIndex].menu_id; //菜品Id
    let menu_name = menu[pIndex].data[cIndex].menu_name; //菜品名称
    let photo = menu[pIndex].data[cIndex].photo; //菜品图片
    let is_sku = menu[pIndex].data[cIndex].is_sku; //是否存在sku

    let sku_id = menu[pIndex].data[cIndex].sku_price[sIndex].sku_id; //sku id
    let sku_name = menu[pIndex].data[cIndex].sku_price[sIndex].name; //sku name
    let price = menu[pIndex].data[cIndex].sku_price[sIndex].price; //sku price
    let count = 1; //sku 数量


    menu[pIndex].data[cIndex].count += 1;

    this.closeStandMask();

    this.cartAddList(menu_id, menu_name, photo, is_sku, sku_id, sku_name, price, count);
    this.totalPrice(e);
  },

  // 添加商品数量1
  addCart(e) {
    let menu = this.store.data.indexTkFood.menu;
    let index = e.detail.index;

    if (index == undefined) { //菜品中添加菜品
      let name = e.detail.name;
      let pIndex = e.detail.pindex;
      let cIndex = e.detail.cindex;
      let sIndex = e.detail.sindex;
      // console.log(JSON.stringify(menu[pIndex].data[cIndex]));

      let menu_id = menu[pIndex].data[cIndex].menu_id; //菜品Id
      let menu_name = menu[pIndex].data[cIndex].menu_name; //菜品名称
      let photo = menu[pIndex].data[cIndex].photo; //菜品照片
      let is_sku = menu[pIndex].data[cIndex].is_sku; //是否存在sku
      let sku_id = ''; //sku id
      let sku_name = ''; //sku name
      let price = menu[pIndex].data[cIndex].price * 100; //sku price
      let count = 1; //sku 数量
      this.cartAddList(menu_id, menu_name, photo, is_sku, sku_id, sku_name, price, count);
      this.totalPrice(e);

      this.resetGoodsNum();
      this.update();
    } else { //购物车添加菜品
      let list = this.store.data.indexTkFood.selectMenu;
      list[index].count += 1;
      this.setData({
        selectMenu: list,
      });
      this.totalPrice(e);

      this.resetGoodsNum();
      this.update();
    }
  },

  // 增加商品更新 
  cartAddList(menu_id, menu_name, photo, is_sku, sku_id, sku_name, price, count) {
    // console.log("添加商品到购物车");
    let list = this.store.data.indexTkFood.selectMenu;
    if (list.length == 0) {
      list.push({
        menu_id: menu_id,
        menu_name: menu_name,
        photo: photo,
        is_sku: is_sku,
        sku_id: sku_id,
        sku_name: sku_name,
        price: price,
        count: count,
      });

      this.setData({
        selectMenu: list,
      });
      // console.log("选中商品：" + JSON.stringify(list));
    } else {
      for (var i = 0; i < list.length; i++) {
        if (list[i].sku_id == sku_id && list[i].menu_id == menu_id) {
          list[i] = {
            menu_id: menu_id,
            menu_name: menu_name,
            photo: photo,
            is_sku: is_sku,
            sku_id: sku_id,
            sku_name: sku_name,
            count: list[i].count + count,
            price: price,
          };
          this.update();
          this.setData({
            selectMenu: list,
          });
          // console.log("选中商品：" + JSON.stringify(list));
          return;
        }
      }

      list.push({
        menu_id: menu_id,
        menu_name: menu_name,
        photo: photo,
        is_sku: is_sku,
        sku_id: sku_id,
        sku_name: sku_name,
        count: count,
        price: price,
      });

      this.setData({
        selectMenu: list,
      });
    }
    this.update();
  },

  /**
   * 重置商品数量
   */
  resetGoodsNum() {
    let list = this.store.data.indexTkFood.selectMenu;
    let menu = this.store.data.indexTkFood.menu;
    for (var i in list) {
      for (var x in menu) {
        for (var y in menu[x].data) {
          menu[x].data[y].count = 0;
        }
      }
    }

    for (var i in list) {
      for (var x in menu) {
        for (var y in menu[x].data) {
          if (list[i].menu_id == menu[x].data[y].menu_id) {
            menu[x].data[y].count += list[i].count;
            break;
          }
        }
      }
    }

    this.store.data.indexTkFood.menu = menu;
    this.update();
  },

  // 调整价格
  selectPrice() {
    let store = this.store.data.indexTkFood;
    let a = store.a;
    let c = store.c;
    let standId = this.store.data.indexTkFood.standId;
    let price = store.menu[a][0][c].sku_price[standId].price;
    this.store.data.indexTkFood.menu[a][0][c].price = price;
    this.update();
  },

  // 清空购物车
  clearCart(e) {
    this.store.data.indexTkFood.selectMenu = [];

    let menu = this.store.data.indexTkFood.menu;
    for (var x in menu) {
      for (var y in menu[x].data) {
        menu[x].data[y].count = 0;
      }
    }

    this.store.data.indexTkFood.menu = menu;
    this.update();

    this.totalPrice(e, 1);
    this.cartMask();
    this.update();
  },
  // 切换购物车遮罩
  cartMask(e) {
    this.store.data.indexTkFood.cartMask = !this.store.data.indexTkFood.cartMask;
    this.update();
  },
  // 进入结算页
  loadAccount() {
    wx.navigateTo({
      url: '../index-account/index-account'
    })
  },
  // 退出
  onUnload() {
    let changeIndex = this.store.data.indexTkFood.changeIndex;
    this.store.data.indexTkFood = {
      changeIndex: changeIndex,
      standMask: false,
      standId: 0,
      totalPrice: 0,
      totalCount: 0,
      selectMenu: [],
      cartMask: false
    };
    this.update();
  },
  //打电话
  callPhone() {
    this.store.callPhone();
  },
  onShareAppMessage: function() {

  }
})