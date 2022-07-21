import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const { pathname } = useLocation();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: pathname }} replace />;
};

export default PrivateRoute;
