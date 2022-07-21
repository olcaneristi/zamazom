import AnimatedPage from 'components/AnimatedPage';
import Loader from 'components/Loader';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'services/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(logoutUser());
      <Navigate to="/" />;
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <Loader haveBackground />;
  }

  return (
    <AnimatedPage style={{ minHeight: '90vh' }}>
      <h3>Welcome {user.name}</h3>
      <h3>Your email is {user.email}</h3>
      <button onClick={handleLogout}>Logout</button>
    </AnimatedPage>
  );
};

export default Profile;
