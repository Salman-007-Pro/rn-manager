//main
import {takeLatest, call, put} from 'redux-saga/effects';

//actions
import Actions from '../actions/index';

//navigators
import {Actions as navigator} from 'react-native-router-flux';

//firebases
import firebase from '../../../firebase';

//constants
import {LOGIN_IN_PROGRESS} from '../../Constants';

const {loginSuccess, loginFailed} = Actions;

function* login(action) {
  const {email, password} = action.payload;
  const auth = firebase.auth();
  try {
    const {user} = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password,
    );
    yield put(loginSuccess(user));
    yield navigator.main();
  } catch (err) {
    try {
      const {user} = yield call(
        [auth, auth.createUserWithEmailAndPassword],
        email,
        password,
      );
      yield put(loginSuccess(user));
      yield navigator.main();
    } catch (err) {
      yield put(loginFailed('Authenication Failed!!'));
    }
  }
}

function* watcherLogin() {
  const err = yield takeLatest(LOGIN_IN_PROGRESS, login);
}

export default watcherLogin;
