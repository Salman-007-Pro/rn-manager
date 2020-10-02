import {all} from 'redux-saga/effects';
import watcherLogin from './loginWatcher';

function* rootSaga() {
  yield all([watcherLogin()]);
}
export default rootSaga;
