module.exports = {
  DEBUG: true,
  globalData:[],
  /**
   * 打印log
   */
  log: function(msg) {
    if (this.DEBUG) {
      console.log(msg);
    } else {
      console.log("合肥微小宝网络科技有限公司-发布版本");
    }
  },
}