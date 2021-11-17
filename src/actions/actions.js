import C from '../constants';
import checkAuth from '../lib/checkAuth';

export const logIn = inputAuthData => (
  checkAuth(inputAuthData) ?
    {
      type: C.LOG_IN,
      userName: inputAuthData.username,
      isAuth: true,
    } :
    {
      type: C.LOG_FALLEN,
      isAuth: false,
      errorMsg: 'Имя пользователя или пароль введены не верно',
    }
);

export const logOut = () => ({
  type: C.LOG_OUT,
  isAuth: false,
  errorMsg: 'Необходимо войти для продолжения.',
});
