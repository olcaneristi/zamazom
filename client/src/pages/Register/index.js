import AnimatedPage from 'components/AnimatedPage';
import Input from 'components/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { register } from 'services/authSlice';

const Register = () => {
  const { status, error, isAuthenticated } = useSelector(state => state.auth);
  const { state } = useLocation();
  const previousPath = state?.from ? state.from : '/';
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(user));
  };

  return isAuthenticated ? (
    <Navigate to={previousPath} />
  ) : (
    <AnimatedPage style={{ minHeight: '90vh' }}>
      {status === 'error' && <p>{error}</p>}

      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
          labelText="Name"
        />
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
        <button type="submit" disabled={!(user.name, user.email, user.password)}>
          {status === 'loading' ? 'Loading...' : 'Register'}
        </button>
      </form>
    </AnimatedPage>
  );
};

export default Register;
