import AnimatedPage from 'components/AnimatedPage';
import Input from 'components/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { login } from 'services/authSlice';

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
    <AnimatedPage style={{ minHeight: '90vh' }}>
      {status === 'error' && <p>{error}</p>}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          labelText="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          labelText="Password"
        />
        <button type="submit">{status === 'loading' ? 'Logging...' : 'Login'}</button>
      </form>
    </AnimatedPage>
  );
};

export default Login;
