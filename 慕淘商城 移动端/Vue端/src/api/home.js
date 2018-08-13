import axios from 'axios';
import jsonp from '../assets/js/jsonp';
import {
  SUCC_CODE,
  jsonpOptions,
  HOME_RECOMMEND_PAGE_SIZE
} from './config'
//获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: 10000
  }).then(res => {
    if (res.data.code == SUCC_CODE) {
      return res.data.slider;
    }
    throw new ErrorEvent('没有成功获取到数据!');
  }).catch(err => {
    if (err) {
      console.log(err)
    }

    return [{
      linkUrl: 'https://www.imooc.com',
      picUrl: require('../assets/img/404.png')
    }]
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    })
  });
}

//获取热门推荐数据-jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(res);
        }, 500);
      });
    }
    throw new Error('没有成功获取到数据!');
  })
}