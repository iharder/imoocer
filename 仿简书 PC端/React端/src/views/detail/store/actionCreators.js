import axios from 'axios';
import * as constants from './constants';
const changeDetail = (title,content)=>({
	type: constants.CHANGE_DETAIL,
	title,
	content
})
export const getDetail = () => {
	return (dispatch) => {
		axios.get('http://qddd.oss-cn-hangzhou.aliyuncs.com/jianshu/detail.json').then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title,result.content));
		})
	}
}