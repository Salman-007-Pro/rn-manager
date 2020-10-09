//main
import {takeLatest, call, put, fork, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

//actions
import Actions from '../actions/index';

//navigator
import {Actions as navigator} from 'react-native-router-flux';

//firebase
import firebase from '../../../firebase';

//lodash
import _ from 'lodash';

//axios
import axios from '../../api/axios/axios';

//constants
import {
  EMPLOYEE_CREATE_IN_PROGRESS,
  EMPLOYEE_FETCH_IN_PROGRESS,
  EMPLOYEE_FETCH_LISTENER_IN_PROGRESS,
  EMPLOYEE_UPDATE_IN_PROGRESS,
  EMPLOYEE_REMOVE_IN_PROGRESS,
} from '../../Constants';

const {
  //create
  employeeCreateSuccess,
  employeeCreateFailed,

  //fetch
  employeeFetchSuccess,
  employeeFetchFailed,

  //listener
  employeeFetchListenerSuccess,
  employeeFetchListenerFailed,

  //update
  employeeUpdateSuccess,
  employeeUpdateFailed,

  //remove
  employeeRemoveSuccess,
  employeeRemoveFailed,
} = Actions;

//create
const pushEmployeeFirebase = (obj) => {
  const {currentUser} = firebase.auth();
  return new Promise((resolve, reject) => {
    try {
      firebase.database().ref(`/users/${currentUser.uid}/employees`).push(obj);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

function* createEmployee(actions) {
  const {resolve, reject, payload} = actions;
  try {
    yield call(pushEmployeeFirebase, payload);
    yield put(employeeCreateSuccess());
    navigator.pop();
    resolve();
  } catch (e) {
    yield put(employeeCreateFailed('Some Error Occurs'));
    reject();
  }
}

//listener
function* fetchEmployeeListening() {
  const {currentUser} = firebase.auth();
  const channel = new eventChannel((emiter) => {
    const listener = firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        emiter({data: snapshot.val() || {}});
      });
    return () => {
      listener.off();
    };
  });
  while (true) {
    const {data} = yield take(channel);
    const employees = _.map(data, (val, uid) => ({uid, ...val}));
    yield put(employeeFetchListenerSuccess(employees));
  }
}

function* fetchEmployeeListener() {
  try {
    yield fork(fetchEmployeeListening);
  } catch (e) {
    yield put(employeeFetchListenerFailed('Error: can not fetch employees'));
  }
}

//fetch
const getEmployeeFirebase = async () => {
  const {currentUser} = firebase.auth();
  const {data} = await axios.get(`/users/${currentUser.uid}/employees.json`);
  const employees = _.map(data, (val, uid) => ({uid, ...val}));
  return employees;
};

function* fetchEmployee() {
  try {
    const res = yield call(getEmployeeFirebase);
    yield put(employeeFetchSuccess(res));
  } catch (e) {
    yield put(employeeFetchFailed('Error: can not fetch employees'));
  }
}

//update
const setEmployeeFirebase = (obj, uid) => {
  const {currentUser} = firebase.auth();
  return new Promise((resolve, reject) => {
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set(obj);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

function* updateEmployee(actions) {
  const {resolve, reject, payload} = actions;
  const {updatedData, uid} = payload;
  try {
    yield call(setEmployeeFirebase, updatedData, uid);
    yield put(employeeUpdateSuccess());
    navigator.pop();
    resolve();
  } catch (e) {
    yield put(employeeUpdateFailed('Some Error Occurs'));
    reject(e);
  }
}

//remove employee
const removedEmployeeFirebase = (uid) => {
  const {currentUser} = firebase.auth();
  return new Promise((resolve, reject) => {
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
function* removeEmployee(actions) {
  const {uid} = actions.payload;
  try {
    yield call(removedEmployeeFirebase, uid);
    yield put(employeeRemoveSuccess());
    navigator.pop();
  } catch (e) {
    yield put(employeeRemoveFailed('Some Error Occurs'));
  }
}
function* watcherEmployee() {
  yield takeLatest(EMPLOYEE_FETCH_LISTENER_IN_PROGRESS, fetchEmployeeListener);
  yield takeLatest(EMPLOYEE_FETCH_IN_PROGRESS, fetchEmployee);
  yield takeLatest(EMPLOYEE_UPDATE_IN_PROGRESS, updateEmployee);
  yield takeLatest(EMPLOYEE_CREATE_IN_PROGRESS, createEmployee);
  yield takeLatest(EMPLOYEE_REMOVE_IN_PROGRESS, removeEmployee);
}

export default watcherEmployee;
