import {combineReducers} from 'redux';
import login from './login';
import employee from './employee';

const rootReducer = combineReducers({login, employee});

export default rootReducer;
