import axios from 'axios';

export const request = (url) => {
  return axios.get(url, {
    responseType: 'json'
  }).then((res) => {
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      // 做登录
      doLogin();
    } else {

    }
  }).catch((err) => {
    return err;
  });
};

const doLogin = () => {
  window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}

