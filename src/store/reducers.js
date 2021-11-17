import C from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case C.LOG_IN:
      return {
        ...state,
        userName: action.userName,
        isAuth: action.isAuth,
        errorMsg: action.errorMsg,
      };
    case C.LOG_OUT:
      return {
        ...state,
        userName: null,
        isAuth: action.isAuth,
        errorMsg: action.errorMsg,
      };
    case C.LOG_FALLEN:
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
