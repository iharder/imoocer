import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../views/home/store';
import {reducer as detailReducer} from '../views/detail/store';
const reducer = combineReducers({header: headerReducer, home: homeReducer, detail: detailReducer})
export default reducer;