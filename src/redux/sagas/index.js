import {all} from 'redux-saga/effects';
import watcherLogin from './loginWatcher';
import watcherEmployee from './employeeWatcher';

function* rootSaga() {
  yield all([watcherLogin(), watcherEmployee()]);
}
export default rootSaga;
