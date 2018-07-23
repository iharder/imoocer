export default {
  formateDate(time) {
    if (!time) {
      return '';
    }
    let date = new Date(time);
    let H = date.getHours(),
      M = date.getMinutes(),
      S = date.getSeconds();

    if (H < 10) {
      H = '0' + date.getHours();
    }
    if (M < 10) {
      M = '0' + date.getMinutes();
    }
    if (S < 10) {
      S = '0' + date.getSeconds();
    }
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + H + ':' + M + ':' + S + ' ';
  }
}