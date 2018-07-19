import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios
			.get("https://qddd.oss-cn-hangzhou.aliyuncs.com/jianshu/login.json?spm=5176.8466032.bu" +
				"cket-object.dopenurl.4cbb1450Ee49ef&file=login.json?account=" + accout + '&password=' + password)
			.then((res) => {
				const result = res.data.data;
				if (result) {
					dispatch(changeLogin());
				} else {
					alert('登录失败');
				}
			})
	}
}