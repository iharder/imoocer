import * as constants from './constants';
import axios from 'axios';
const change_list = (data) => ({type: constants.CHANGE_LIST, data});

export const searchFocus = () => ({type: constants.SEARCH_FOCUS});
export const searchBlur = () => ({type: constants.SEARCH_BLUR});
export const getList = () => {
    return (dispatch) => {
        axios
            .get('/api/headerList.json')
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