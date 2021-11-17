import { connect } from 'react-redux';
import Login from '../Components/Login/Login';
import { logIn } from '../actions/actions';

const mapStateToProps = state => ({
  isAuth: state.isAuth,
  erorrMsg: state.errorMsg,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: inputAuthData => dispatch(logIn(inputAuthData)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
