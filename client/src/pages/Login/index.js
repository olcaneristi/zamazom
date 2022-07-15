import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'store/authSlice';

const Login = () => {
  const auth = useSelector(state => state.auth);
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
  return (
    <div>
      {auth.status === 'error' && <p>{auth.error}</p>}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">{auth.status === 'loading' ? 'Logging...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Login;
