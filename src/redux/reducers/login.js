import {LOGIN_FAILED, LOGIN_IN_PROGRESS, LOGIN_SUCCESS} from '../../Constants';
const initialState = {
  user: {},
  loading: false,
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      console.log(action);
      return {
        ...state,
        loading: true,
        error: '',
      };

    case LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        error: '',
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
