import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('authToken');
  const { pathname } = useLocation();

  const authProtected = ['/404', '/'];
  const protectedByToken = ['/detail/:id', '/main', '/preview/:id'];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={'/main'} />;
  }
  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
