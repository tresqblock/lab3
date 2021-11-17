import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/actions';
import './menu.scss';

const Menu = ({ isAuth, onLogOut }) => (
  <header>
    {console.log(`From menu. isAuth: ${isAuth}`)}
    <nav className="menu">
      <Link className="menu__link" to="/">Home</Link>
      <Link className="menu__link" to="/news">News</Link>
      <Link className="menu__link" to="/profile">Profile</Link>
      <Link className="menu__link" to="/login" onClick={onLogOut}>
        {isAuth ? 'Logout' : 'Login'}
      </Link>
    </nav>
  </header>
);

Menu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    isAuth: state.isAuth,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLogOut: () => dispatch(logOut()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
