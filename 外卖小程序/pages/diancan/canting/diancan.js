// pages/diancan/canting/diancan.js
import {
  FoodModel
} from '../../../models/diancan/waimai';

const foodModel = new FoodModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [],

    menuIndex: 0,
    goodsIndex: 0,

    manjianlist: [],
    skuMaskFlag: false,

    skuIndex: 0,

    selectMenu: [],

    // 购物清单列表
    listMaskFlag: false,

    totalPrice: 0,
    totalNum: 0,
  },

  /**
   * 分类点击事件
   */
  onMenuListener: function(e) {
    this.setData({
      menuIndex: e.currentTarget.dataset.index,
    });
  },

  /**
   * 选择Sku
   */
  onSkuDialogListener: function(e) {
    this.setData({
      skuMaskFlag: true,
      menuIndex: e.currentTarget.dataset.mindex,
      goodsIndex: e.currentTarget.dataset.gindex,
    });
  },

  /**
   * 关闭Sku dialog
   */
  onCloseDialogListenter: function() {
    this.setData({
      skuMaskFlag: false,
      skuIndex: 0,
    });
  },

  /**
   * 选择Sku Listener
   */
  selectSkuListener: function(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      skuIndex: index,
    });
  },

  /**
   * 购物清单添加商品
   */
  listAddGoodsListener: function(e) {
    //购物清单Index
    let index = e.currentTarget.dataset.index;
    let selectMenu = this.data.selectMenu;
    let menu = this.data.menu;

    selectMenu[index].count += 1;
    for (var x in menu) {
      for (var y in menu[x].data) {
        for (var z in menu[x].data[y].sku_price) {
          if (!selectMenu[index].is_sku) {
            menu[x].data[y].count += 1;
            this.setData({
              selectMenu: selectMenu,
              menu: menu,
            });
            this.countTotalInfo();
          } else if (selectMenu[index].menu_id == menu[x].data[y].menu_id && selectMenu[index].sku_id == menu[x].data[y].sku_price[z].sku_id) {
            menu[x].data[y].count += 1;
            menu[x].data[y].sku_price[z].count += 1;
            this.setData({
              selectMenu: selectMenu,
              menu: menu,
            });
            this.countTotalInfo();
            return;
          }
        }
      }
    }
  },

  /**
   * 购物清单减少商品
   */
  listReduceGoodsListener: function(e) {
    //购物清单Index
    let index = e.currentTarget.dataset.index;
    let selectMenu = this.data.selectMenu;
    let menu = this.data.menu;

    selectMenu[index].count -= 1;
    for (var x in menu) {
      for (var y in menu[x].data) {
        if (!menu[x].data[y].is_sku) {
          if (selectMenu[index].menu_id == menu[x].data[y].menu_id) {
            menu[x].data[y].count -= 1;
            if (menu[x].data[y].count == 0) {
              menu[x].data[y].count = 0;
              selectMenu.splice(index, 1);
            }
          }
          this.setData({
            selectMenu: selectMenu,
            menu: menu,
          });
          this.countTotalInfo();
          return;
        } else if (menu[x].data[y].is_sku && menu[x].data[y].sku_price.length > 0) {
          for (var z in menu[x].data[y].sku_price) {
            if (selectMenu[index].menu_id == menu[x].data[y].menu_id && selectMenu[index].sku_id == menu[x].data[y].sku_price[z].sku_id) {
              menu[x].data[y].count -= 1;
              if (menu[x].data[y].sku_price[z].count > 1) {
                menu[x].data[y].sku_price[z].count -= 1;
              } else {
                selectMenu.splice(index, 1);
              }

              this.setData({
                selectMenu: selectMenu,
                menu: menu,
              });
              this.countTotalInfo();
              return;
            }
          }
        }
      }
    }
  },

  /**
   * 添加购物车
   */
  addShoppingCartListener: function(e) {
    var selectMenu = this.data.selectMenu;
    var menu = this.data.menu;

    let menuIndex = this.data.menuIndex;
    let goodsIndex = this.data.goodsIndex;
    let skuIndex = this.data.skuIndex;

    let type = e.currentTarget.dataset.type;
    var sku_price = menu[menuIndex].data[goodsIndex].sku_price;

    let menu_id = menu[menuIndex].data[goodsIndex].menu_id; //菜品Id
    let menu_name = menu[menuIndex].data[goodsIndex].menu_name; //菜品名称
    let photo = menu[menuIndex].data[goodsIndex].photo; //菜品照片
    let is_sku = menu[menuIndex].data[goodsIndex].is_sku; //是否存在sku
    let sku_id = "";
    let sku_name = "";
    let price = "";
    let count = 1; //sku 数量

    if (type == 2) {
      sku_id = 0;
      menu[menuIndex].data[goodsIndex].count += 1;
      price = menu[menuIndex].data[goodsIndex].price;
    } else {
      sku_id = sku_price.length == 0 ? "" : menu[menuIndex].data[goodsIndex].sku_price[skuIndex].sku_id; //sku id
      sku_name = sku_price.length == 0 ? "" : menu[menuIndex].data[goodsIndex].sku_price[skuIndex].name; //sku name
      price = menu[menuIndex].data[goodsIndex].sku_price[skuIndex].price; //sku price
      menu[menuIndex].data[goodsIndex].count += 1;
      menu[menuIndex].data[goodsIndex].sku_price[skuIndex].count += 1;
    }
    // var sku_price = menu[menuIndex].data[goodsIndex].sku_price;

    // let menu_id = menu[menuIndex].data[goodsIndex].menu_id; //菜品Id
    // let menu_name = menu[menuIndex].data[goodsIndex].menu_name; //菜品名称
    // let photo = menu[menuIndex].data[goodsIndex].photo; //菜品照片
    // let is_sku = menu[menuIndex].data[goodsIndex].is_sku; //是否存在sku
    // let sku_id = sku_price.length == 0 ? "" : menu[menuIndex].data[goodsIndex].sku_price[skuIndex].sku_id; //sku id
    // let sku_name = sku_price.length == 0 ? "" : menu[menuIndex].data[goodsIndex].sku_price[skuIndex].name; //sku name
    // let price = menu[menuIndex].data[goodsIndex].sku_price[skuIndex].price; //sku price
    // let count = 1; //sku 数量

    // if (menu[menuIndex].data[goodsIndex].sku_price.length == 0) {
    //   menu[menuIndex].data[goodsIndex].count += 1;
    // } else {
    //   menu[menuIndex].data[goodsIndex].count += 1;
    //   menu[menuIndex].data[goodsIndex].sku_price[skuIndex].count += 1;
    // }

    this.setData({
      menu: menu,
    });

    if (selectMenu.length == 0) {
      selectMenu.push({
        menu_id: menu_id,
        menu_name: menu_name,
        photo: photo,
        is_sku: is_sku,
        sku_id: sku_id,
        sku_name: sku_name,
        price: price,
        count: count,
      });
      // console.log("选中商品：" + JSON.stringify(selectMenu));
      this.setData({
        selectMenu: selectMenu,
      });
      this.countTotalInfo();
    } else {
      for (var i in selectMenu) {
        if (selectMenu[i].sku_id == sku_id && selectMenu[i].menu_id == menu_id) {
          selectMenu[i] = {
            menu_id: menu_id,
            menu_name: menu_name,
            photo: photo,
            is_sku: is_sku,
            sku_id: sku_id,
            sku_name: sku_name,
            count: selectMenu[i].count + count,
            price: price,
          };
          this.setData({
            selectMenu: selectMenu,
          });
          // console.log("选中商品：" + JSON.stringify(selectMenu));
          this.countTotalInfo();
          this.onCloseDialogListenter();
          return;
        }
      }

      selectMenu.push({
        menu_id: menu_id,
        menu_name: menu_name,
        photo: photo,
        is_sku: is_sku,
        sku_id: sku_id,
        sku_name: sku_name,
        price: price,
        count: count,
      });
      // console.log("选中商品：" + JSON.stringify(selectMenu));
      this.setData({
        selectMenu: selectMenu,
      });
    }
    this.countTotalInfo();
    this.onCloseDialogListenter();
  },

  /**
   * 计算总价格
   */
  countTotalInfo: function(e) {
    let selectMenu = this.data.selectMenu;
    var totalPrice = 0;
    var count = 0;
    for (var i in selectMenu) {
      totalPrice += selectMenu[i].price * selectMenu[i].count;
      count += selectMenu[i].count;
    }

    this.setData({
      totalPrice: totalPrice,
      totalNum: count,
    });
  },

  /**
   * 展示清单列表
   */
  onShowDetailListListener: function(e) {
    this.setData({
      listMaskFlag: true,
    });
  },

  /**
   * 隐藏清单列表
   */
  onHiddenDetailListListener: function(e) {
    this.setData({
      listMaskFlag: false,
    });
  },
  // 清空购物车
  clearCart() {
    this.setData({
      selectMenu: [],
      totalPrice: 0,
      totalNum: 0
    });
    this.loadMenuInfo();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '',
    })
    this.loadMenuInfo();
    this.loadCouponInfo();
    wx.hideLoading();
  },

  /**
   * 加载菜单信息
   */
  loadMenuInfo: function(e) {
    let extConfig = wx.getStorageSync('extConfig');
    let openId = wx.getStorageSync('openId');
    let food = foodModel.postGetMenuInfo(extConfig);
    food.then(res => {
      // console.log(res.data.menu);
      if (res.code == 200) {
        this.setData({
          menu: res.data.menu,
        });
      } else {

      }
    });
  },
  enterRes() {
    let data = this.data;
    // console.log("选中=>" + JSON.stringify(data.selectMenu))
    if (data.selectMenu.length == 0) {
      wx.showToast({
        title: '请选择菜品',
        icon: "none"
      })
    } else {
      wx.setStorageSync("dcData", data);
      wx.redirectTo({
        url: './order',
      });
    }

  },
  catchTouchMove: function(res) {
    return false;
  },

  /**
   * 加载优惠信息
   */
  loadCouponInfo: function() {
    let extConfig = wx.getStorageSync('extConfig');
    let order = wx.getStorageSync("order");

    let food = foodModel.postGetCouponInfo(extConfig);
    food.then(res => {
      // console.log(res);
      if (res.code == 200) {
        this.setData({
          manjianlist: res.data.manjianlist,
        });
        order.manjianlist = res.data.manjianlist;
        wx.setStorageSync("order", order);
      } else {

      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})