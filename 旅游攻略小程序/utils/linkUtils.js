module.exports = {
  formatLinks: function (links) {
    // var links = [];
    for (var a in links) {
      var data = this.getParam(links[a].link);
      if (data == false) {
        return false;
      }
      var that = this;
      links[a].appid = "";
      links[a].tel = "";
      links[a].url = "";
      links[a].is_on = false;
      // console.log(JSON.stringify(data));
      if (data.param.appid != undefined) {
        links[a].appid = data.param.appid;
      } else if (data.param.tel != undefined) {
        links[a].tel = data.param.tel;
      } else {
        var whiteList = ["/pages/index/index", "/pages/destination/index", "/pages/fuli/index", "/pages/order/index", "/pages/mine/index"];
        links[a].url = links[a].link;
        if (data.url != "") {
          for (var i in whiteList) {
            if (this.cmp(whiteList[i], data.url)) {
              links[a].is_on = true;
              break;
            }
          }
        }
      }
    }
    return links;
  },

  getParam: function (url) {
    var theRequest = new Object();
    var urlParam = url.split("?");
    var this_url = urlParam[0];
    if (url.indexOf("?") != -1) {
      var strs = urlParam[1].split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return {
      param: theRequest,
      url: this_url,
    };
  },
  cmp: function (x, y) {
    // If both x and y are null or undefined and exactly the same 
    if (x === y) {
      return true;
    }
    // If they are not strictly equal, they both need to be Objects 
    if (!(x instanceof Object) || !(y instanceof Object)) {
      return false;
    }
    //They must have the exact same prototype chain,the closest we can do is
    //test the constructor. 
    if (x.constructor !== y.constructor) {
      return false;
    }
    for (var p in x) {
      //Inherited properties were tested using x.constructor === y.constructor
      if (x.hasOwnProperty(p)) {
        // Allows comparing x[ p ] and y[ p ] when set to undefined 
        if (!y.hasOwnProperty(p)) {
          return false;
        }
        // If they have the same strict value or identity then they are equal 
        if (x[p] === y[p]) {
          continue;
        }
        // Numbers, Strings, Functions, Booleans must be strictly equal 
        if (typeof (x[p]) !== "object") {
          return false;
        }
        // Objects and Arrays must be tested recursively 
        if (!Object.equals(x[p], y[p])) {
          return false;
        }
      }
    }
    for (p in y) {
      // allows x[ p ] to be set to undefined 
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  }
}