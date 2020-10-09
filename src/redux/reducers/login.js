import {LOGIN_FAILED, LOGIN_IN_PROGRESS, LOGIN_SUCCESS} from '../../Constants';
const initialState = {
  user: {},
  loading: false,
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload.user,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default login;
