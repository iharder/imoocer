import axios from 'axios';
import * as constants from './constants';
const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('http://qddd.oss-cn-hangzhou.aliyuncs.com/jianshu/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		})
	}
}