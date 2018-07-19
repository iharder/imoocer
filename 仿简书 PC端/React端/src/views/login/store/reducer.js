import {
	fromJS
} from 'immutable';
import * as constants from './constants';
const defaultStore = fromJS({
	login: false
})

export default (state = defaultStore, action) => {
	switch (action.type) {
		case constants.CHANGE_LOGIN:
			return state.set('login', action.value);
		case constants.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}
}