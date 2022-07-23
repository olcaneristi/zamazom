import { IconCover } from 'assets/icons';
import { Input, AnimatedPage, Button } from 'components';
import React, { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { login } from 'services/slices/authSlice';

const Login = () => {
  const { status, error, isAuthenticated } = useSelector(state => state.auth);
  const { state } = useLocation();
  const previousPath = state?.from ? state.from : '/';

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(user));
  };
  return isAuthenticated ? (
    <Navigate to={previousPath} />
  ) : (
    <section className="login">
      <AnimatedPage className="container login__container">
        <div className="login__cover">
          <IconCover width="300" height="450" />
        </div>
        <div className="form">
          <div className="form__content">
            <h3 className="form__content__text">Sign in to Zamazom.</h3>
          </div>

          <div className="form__error">{error && <h4>{error}</h4>}</div>

          <form onSubmit={handleSubmit}>
            <Input
              name="email"
              value={user.email}
              type="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <Input
              name="password"
              value={user.password}
              type="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <Button type="submit" disabled={!(user.email && user.password)} className="form__btn">
              {status === 'loading' ? <Oval color="#FFF" width={24} height={24} /> : 'Sign In'}
            </Button>
          </form>

          <div className="form__register">
            <p className="form__register__text">Don't have any account?</p>
            <Link to="/register" className="form__register__anchor">
              Sign Up
            </Link>
          </div>
        </div>
      </AnimatedPage>
    </section>
  );
};

export default Login;
