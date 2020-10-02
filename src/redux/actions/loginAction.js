import {LOGIN_FAILED, LOGIN_IN_PROGRESS, LOGIN_SUCCESS} from '../../Constants';

export const loginInProgress = (email, password) => {
  // console.log(email, password);
  return {
    type: 'A',
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (user) => {
  console.log(user);
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
