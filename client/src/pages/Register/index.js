import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'store/authSlice';

const Register = () => {
  const auth = useSelector(state => state.auth);
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

  return (
    <div>
      {auth.status === 'error' && <p>{auth.error}</p>}

      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" type="text" placeholder="Name" />
        <input onChange={handleChange} name="email" type="email" placeholder="Email" />
        <input onChange={handleChange} name="password" type="password" placeholder="Password" />
        <button type="submit" disabled={!(user.name, user.email, user.password)}>
          {auth.status === 'loading' ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
