import React from 'react';
import Login from '../../pages/Login';
import { useAuth } from '../../providers/AuthProvider';

const RequireAuth = ({ children }) => {
  const {
    state: { isLogin },
  } = useAuth();

  if (!isLogin) {
    return <Login />;
  }

  return children;
};

export default RequireAuth;
