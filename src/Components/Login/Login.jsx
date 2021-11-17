import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
  }

  handleChange(e) {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="auth-form">
        {this.props.isAuth ? <Redirect to="/profile" /> : null}
        <h2 className="auth-form__header">Увійти</h2>
        <span className="auth-form__error-msg">
          {this.props.erorrMsg}
        </span>
        <form className="input-block">
          <label className="auth-form__input-title" htmlFor="loggin">
            Логин
          </label>
          <input
            className="auth-form__input"
            id="loggin"
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Ваш логин"
            required
          />
          <label className="auth-form__input-title" htmlFor="pass">
            Пароль
          </label>
          <input
            className="auth-form__input"
            id="pass"
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Ваш пароль"
            required
          />
          <button className="auth-form__button" onClick={this.handleSubmit}>
            Войти
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  erorrMsg: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
