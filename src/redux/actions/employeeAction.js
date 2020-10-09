import {
  //employee create
  EMPLOYEE_CREATE_IN_PROGRESS,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAILED,

  //employee fetch
  EMPLOYEE_FETCH_IN_PROGRESS,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_FETCH_FAILED,

  //employee fetch listner
  EMPLOYEE_FETCH_LISTENER_IN_PROGRESS,
  EMPLOYEE_FETCH_LISTENER_SUCCESS,
  EMPLOYEE_FETCH_LISTENER_FAILED,

  //update employee
  EMPLOYEE_UPDATE_IN_PROGRESS,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAILED,

  //employee remove
  EMPLOYEE_REMOVE_IN_PROGRESS,
  EMPLOYEE_REMOVE_SUCCESS,
  EMPLOYEE_REMOVE_FAILED,
} from '../../Constants';
import employee from '../reducers/employee';

//create
export const employeeCreateInProgress = (obj, resolve, reject) => {
  return {
    type: EMPLOYEE_CREATE_IN_PROGRESS,
    payload: {
      ...obj,
    },
    resolve: resolve,
    reject: reject,
  };
};

export const employeeCreateSuccess = () => {
  return {
    type: EMPLOYEE_CREATE_SUCCESS,
  };
};

export const employeeCreateFailed = (error) => {
  return {
    type: EMPLOYEE_CREATE_FAILED,
    payload: {
      error,
    },
  };
};

//fetch
export const employeeFetchInProgress = () => {
  return {
    type: EMPLOYEE_FETCH_IN_PROGRESS,
  };
};

export const employeeFetchSuccess = (employees) => {
  return {
    type: EMPLOYEE_FETCH_SUCCESS,
    payload: {
      employees,
    },
  };
};

export const employeeFetchFailed = (error) => {
  return {
    type: EMPLOYEE_FETCH_FAILED,
    payload: {
      error,
    },
  };
};

//listener
export const employeeFetchListenerInProgress = () => {
  return {
    type: EMPLOYEE_FETCH_LISTENER_IN_PROGRESS,
  };
};

export const employeeFetchListenerSuccess = (employees) => {
  return {
    type: EMPLOYEE_FETCH_LISTENER_SUCCESS,
    payload: {
      employees,
    },
  };
};

export const employeeFetchListenerFailed = (error) => {
  return {
    type: EMPLOYEE_FETCH_LISTENER_FAILED,
    payload: {
      error,
    },
  };
};

//update
export const employeeUpdateInProgress = (obj, uid, resolve, reject) => {
  return {
    type: EMPLOYEE_UPDATE_IN_PROGRESS,
    payload: {
      updatedData: {
        ...obj,
      },
      uid,
    },
    resolve: resolve,
    reject: reject,
  };
};

export const employeeUpdateSuccess = () => {
  return {
    type: EMPLOYEE_UPDATE_SUCCESS,
  };
};

export const employeeUpdateFailed = (error) => {
  return {
    type: EMPLOYEE_UPDATE_FAILED,
    payload: {
      error,
    },
  };
};

//update
export const employeeRemoveInProgress = (uid) => {
  return {
    type: EMPLOYEE_REMOVE_IN_PROGRESS,
    payload: {
      uid,
    },
  };
};

export const employeeRemoveSuccess = () => {
  return {
    type: EMPLOYEE_REMOVE_SUCCESS,
  };
};

export const employeeRemoveFailed = (error) => {
  return {
    type: EMPLOYEE_REMOVE_FAILED,
    payload: {
      error,
    },
  };
};
