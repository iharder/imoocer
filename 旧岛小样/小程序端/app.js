//app.js
App({
  onLaunch: function () {

  },
  globalData: {

  },
  setWatcher(data, watch) {
    Object.keys(watch).forEach(v => {
      this.observe(data, v, watch[v]);
    })
  },
  observe(obj, key, watchFun) {
    var val = obj[key];
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: function (value) {
        val = value;
        watchFun(value, val);
      },
      get: function () {
        return val;
      }
    })
  }
})