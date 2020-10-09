import {
  //create
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
const initialState = {
  loading: false,
  uiState: false,
  error: '',
  employees: [],
};
const employee = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case EMPLOYEE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case EMPLOYEE_CREATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case EMPLOYEE_FETCH_IN_PROGRESS:
      return {
        ...state,
        uiState: true,
        error: '',
      };

    case EMPLOYEE_FETCH_SUCCESS:
      return {
        ...state,
        uiState: false,
        error: '',
        employees: [...action.payload.employees],
      };

    case EMPLOYEE_FETCH_FAILED:
      return {
        ...state,
        uiState: false,
        error: action.payload.error,
      };

    case EMPLOYEE_FETCH_LISTENER_IN_PROGRESS:
      return {
        ...state,
        uiState: true,
        error: '',
      };

    case EMPLOYEE_FETCH_LISTENER_SUCCESS:
      return {
        ...state,
        uiState: false,
        error: '',
        employees: [...action.payload.employees],
      };

    case EMPLOYEE_FETCH_LISTENER_FAILED:
      return {
        ...state,
        uiState: false,
        error: action.payload.error,
      };

    case EMPLOYEE_UPDATE_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case EMPLOYEE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case EMPLOYEE_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case EMPLOYEE_REMOVE_IN_PROGRESS:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case EMPLOYEE_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case EMPLOYEE_REMOVE_FAILED:
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

export default employee;
