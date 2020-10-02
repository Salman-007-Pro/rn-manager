import {takeLatest, takeEvery, take} from 'redux-saga/effects';
import {LOGIN_IN_PROGRESS} from '../../Constants';
import Actions from '../actions/index';
// import firebase from 'firebase';
const {loginSuccess, loginFailed} = Actions;

function* login(action) {
  try {
    yield put(loginSuccess('id'));
  } catch (err) {}
}

function* watcherLogin() {
  //   console.log('asd');
  yield take('A', login);
}

export default watcherLogin;
