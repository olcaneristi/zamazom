import { AnimatedPage, Button, Input, Loader } from 'components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'services/slices/authSlice';
import moment from 'moment';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  const convertRelativeTime = date => {
    return `${moment(date).format('LL ') + `(${moment(date).fromNow()})`}`;
  };

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
    <AnimatedPage className="profile">
      <div className="container profile__container">
        <div className="profile__header">
          <h2 className="profile__title">Your Profile</h2>
        </div>

        <div className="profile__content">
          <div className="profile__avatar">
            <img src="https://i.pravatar.cc/120?img" alt="avatar" loading="lazy" />
          </div>

          <div className="profile__info">
            <Input readOnly value={user.name} placeholder="Name" />
            <Input readOnly value={user.email} placeholder="Email" />
            <Input
              readOnly
              value={convertRelativeTime(user?.createdAt)}
              placeholder="Account Create Date"
            />
          </div>
        </div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </AnimatedPage>
  );
};

export default Profile;
