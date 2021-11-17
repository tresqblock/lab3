import { connect } from 'react-redux';
import App from '../Components/App';

const mapStateToProps = state => ({
  isAuth: state.isAuth,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
