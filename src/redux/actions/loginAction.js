import {LOGIN_FAILED, LOGIN_IN_PROGRESS, LOGIN_SUCCESS} from '../../Constants';
export const loginInProgress = (email, password) => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};
