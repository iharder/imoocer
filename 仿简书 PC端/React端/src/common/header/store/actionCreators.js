import * as constants from './constants';
import axios from 'axios';
import {fromJS} from '../../../../node_modules/immutable';
const change_list = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({type: constants.SEARCH_FOCUS});
export const searchBlur = () => ({type: constants.SEARCH_BLUR});
export const mouseEnter = () => ({type: constants.MOUSE_ENTER});
export const mouseLeave = () => ({type: constants.MOUSE_LEAVE});
export const changePage = (page) => ({type: constants.CHANGE_PAGE, page});
export const getList = () => {
    return (dispatch) => {
        axios
            .get('http://qddd.oss-cn-hangzhou.aliyuncs.com/jianshu/headerList.json')
            .then((res) => {
                const data = res.data;
                const action = change_list(data.data);
                dispatch(action);
            })
            .catch(() => {
                console.log("error")
            });
    }
};