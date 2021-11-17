import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './Home';
import LoginContainer from '../Containers/LoginContainer';
import News from './News';
import ProfileContainer from '../Containers/ProfileContainer';
import NotFound from './NotFound';


const App = ({ isAuth }) => (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/news" component={News} />
        <Route
          path="/profile"
          render={() => (
            isAuth ?
              <ProfileContainer /> :
              <Redirect to="/login" />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default App;
