(function () {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = (htmlWidth / 375) / 2 * 100 + 'px';
  window.onresize = function () {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = (htmlWidth / 375) / 2 * 100 + 'px';
  };
}());